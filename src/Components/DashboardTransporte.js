import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvent, animateRef } from 'react-leaflet'
import { datosTransporte } from "./DatosTransporte";
import {  iconPerson  } from './Icon'

function DashboardTransporte() {

    const [linea, setLinea] = useState('1');
    const [transportData, setTransportData] = useState(datosTransporte.filter((item) => item.route_id === '1'));
    const [centrado, setCentrado] = useState([-34.64359, -58.47478]);
    const [cargando, setCargando] = useState(true);

    const [latitudes, setLatitudes] = useState(transportData.map(item => item.latitude));
    const [longitudes, setLongitudes] = useState(transportData.map(item => item.longitude));
    const [centerLat, setCenterLat] = useState((Math.max(...latitudes) + Math.min(...latitudes)) / 2);
    const [centerLng, setCenterLng] = useState((Math.max(...longitudes) + Math.min(...longitudes)) / 2);
    const [selectedData, setSelectedData] = useState(transportData.find(item => item.route_id === linea));

    const datosDropDown1 = datosTransporte.map(item => item.route_id);
    const datosDropDown2 = datosDropDown1.sort((a, b) => a - b);
    const datosDropdown3 = [...new Set(datosDropDown2)];
    const formatoCoordenada = /^-?\d+(\.\d+)?$/;

    const handleSelectChange = (event) => {
        const selectedLinea = event.target.value;
        setLinea(selectedLinea);
    };

    const fetchTransportData = async () => {
        try {
            const response = await fetch(`https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${linea}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`);
            if (!response.ok) {
                throw new Error(`Error de servidor: Código ${response.status}`);
            }
            const data = await response.json();
            setTransportData(data);
        } catch (error) {
            console.error(error);
            //alert("Falló la conexión con el servidor: API Colectivos AMBA");
            //el alert funciona OK pero prefiero desactivarlo porque aparece a cada rato. La API falla mucho.
        }
    };

    useEffect(() => {
        setLatitudes(transportData.map(item => item.latitude));
        setLongitudes(transportData.map(item => item.longitude));
        setCenterLat((Math.max(...latitudes) + Math.min(...latitudes)) / 2);
        setCenterLng((Math.max(...longitudes) + Math.min(...longitudes)) / 2);
        setSelectedData(transportData.find(item => item.route_id === linea));
        if (!selectedData || !formatoCoordenada.test(centerLat) || !formatoCoordenada.test(centerLng)) {
            setCentrado([-34.64359, -58.47478])
        }
        else { setCentrado([centerLat, centerLng]); }
    }, [linea]);

    useEffect(() => {
        fetchTransportData();
        const interval = setInterval(fetchTransportData, 31000);
        return () => clearInterval(interval);
    }, [linea]);

    useEffect(() => {
        async function fetchData() {
            await fetchTransportData();
            setCargando(false);
        }
        fetchData();
    }, []);

    const RecenterAutomatically = () => {
        const map = useMap();
        useEffect(() => {
            map.setView(centrado);
        }, [linea]);
        return null;
    }

    return (
        <div>
            {cargando === true && (<div className="texto-con-movimiento">CARGANDO DATOS TRANSPORTE</div>)}
            {cargando === false && (<div>
                <div className="barratransporte" style={{ backgroundColor: "#ccc", border: "2px solid #000" }}>
                    <h4>COLECTIVOS DEL ÁREA METROPOLITANA DE BUENOS AIRES</h4>
                    <div>
                        <label htmlFor="opcionesDropdown">Selecciona una ruta (route_id): </label>
                        <select id="opcionesDropdown" value={linea} onChange={handleSelectChange}>
                            <option value="route_id">Selecciona una opción</option>
                            {datosDropdown3.map((opcion) => (
                                <option value={opcion}>
                                    {opcion}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <MapContainer center={centrado} zoom={11} scrollWheelZoom={true}>
                    <RecenterAutomatically position={centrado} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {transportData.map((item, index) => {
                        return (<Marker key={item["id"] || index} position={[item["latitude"], item["longitude"]]} icon={ iconPerson }>
                            
                            <Popup>
                                <>Ruta: {[item["route_id"]]}</>
                                <br></br>
                                <>{[item["trip_headsign"]]}</>
                                <br></br>
                                <>Línea: {[item["route_short_name"]]}</>
                            </Popup>
                        </Marker>)
                    })}
                </MapContainer>
            </div>)}
        </div>
    )
};

export default DashboardTransporte;