import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { datosTransporte } from "./DatosTransporte";

function DashboardTransporte() {

    const [linea, setLinea] = useState('1');
    const [transportData, setTransportData] = useState(datosTransporte.filter((item) => item.route_id == '1'));
    const [centrado, setCentrado] = useState([-34.63155, -58.4261055]);
    const [datosDropDown1, setDatosDropDown1] = useState(datosTransporte.map(item => item.route_id));
    const [datosDropDown2, setDatosDropDown2] = useState(datosDropDown1.sort((a, b) => a - b));
    const [datosDropdown3, setDatosDropDown3] = useState([...new Set(datosDropDown2)]);
    const [cargando, setCargando] = useState(true);

    const handleSelectChange = (event) => {
        setLinea(event.target.value);
        setTransportData((prev) => transportData);
        setDatosDropDown1(datosTransporte.map(item => item.route_id));
        setDatosDropDown2(datosDropDown1.sort((a, b) => a - b));
        setDatosDropDown3([...new Set(datosDropDown2)]);
        setCentrado([transportData[0]["latitude"], transportData[0]["longitude"]]);
    };

    const fetchTransportData = async () => {
        try {
            const response = await fetch('https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id='+{linea}+'&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6');
            const data = await response.json();
            setTransportData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTransportData();
    }, [linea]);

    useEffect(() => {
        async function fetchData() {
            await fetchTransportData();
            setCargando(false);
        }
        fetchData();
    }, []);

    console.log("ruta: "+ linea);
    console.log('datos: '+ transportData);
 
    return (
        <div>
            {cargando === true && (<div className="texto-con-movimiento">CARGANDO DATOS TRANSPORTE</div>)}
            {cargando === false && (<div>
            <div style={{ backgroundColor: "#ccc", border: "2px solid #000" }}>
                <label htmlFor="opcionesDropdown">Selecciona una línea: </label>
                <select id="opcionesDropdown" value={linea} onChange={handleSelectChange}>
                    <option value="route_id">Selecciona una opción</option>
                    {datosDropdown3.map((opcion) => (
                        <option value={opcion}>
                            {opcion}
                        </option>
                    ))}
                </select>
            </div>
            <MapContainer key={transportData[0]["agency_id"]} center={centrado} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {transportData.map((item, index) => {
                    return (<Marker position={[item["latitude"], item["longitude"]]}>
                        <Popup>
                            <>Ruta: {[item["route_id"]]}</>
                            <br></br>
                            <>{[item["trip_headsign"]]}</>
                        </Popup>
                    </Marker>)
                })}

            </MapContainer>
            </div>)}
        </div>
    )
};

export default DashboardTransporte;