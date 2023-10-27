import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { datosTransporte } from "./DatosTransporte";

function DashboardTransporte() {

    const [linea, setLinea] = useState('1');
    const [transportData, setTransportData] = useState(datosTransporte.filter((item) => item.route_id == '1'));
    const [centrado, setCentrado] = useState([]);
    const [cargando, setCargando] = useState(true);

    const datosDropDown1 = datosTransporte.map(item => item.route_id);
    const datosDropDown2 = datosDropDown1.sort((a, b) => a - b);
    const datosDropdown3 = [...new Set(datosDropDown2)];

    const handleSelectChange = (event) => {
        const selectedLinea = event.target.value;
        setLinea(selectedLinea);
    };

    const fetchTransportData = async () => {
        try {
            const response = await fetch(`https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${linea}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`);
            const data = await response.json();
            setTransportData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        let latitudes = transportData.map(item => item.latitude);
        let longitudes = transportData.map(item => item.longitude);
        let centerLat = (Math.max(...latitudes) + Math.min(...latitudes)) / 2;
        let centerLng = (Math.max(...longitudes) + Math.min(...longitudes)) / 2;
        let selectedData = transportData.find(item => item.route_id === linea);
        if (selectedData) {
            setCentrado([centerLat, centerLng]);
        }
    }, [linea]);

    useEffect(() => {
        const fetchTransportData = async () => {
          try {
            const response = await fetch(`https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${linea}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`);
            const data = await response.json();
            setTransportData(data);
          } catch (error) {
            console.error(error);
          }
        };
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

    return (
        <div>
            {cargando === true && (<div className="texto-con-movimiento">CARGANDO DATOS TRANSPORTE</div>)}
            {cargando === false && (<div>
                <div className="barratransporte" style={{ backgroundColor: "#ccc", border: "2px solid #000" }}>
                    <h4>COLECTIVOS DE LA CIUDAD AUTÓNOMA DE BUENOS AIRES</h4>
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
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {transportData.map((item, index) => {
                        return (<Marker key={item["id"]} position={[item["latitude"], item["longitude"]]}>
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