import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { datosTransporte } from "./DatosTransporte";

function DashboardTransporte() {

    const [linea, setLinea] = useState('22');
    const [datosTransporteFiltro, setDatosTransporteFiltro] = useState(datosTransporte.filter((item) => item.route_id === '22'));
    const [centrado, setCentrado] = useState([-34.63155, -58.4261055]);
    const [id, setId] = useState("1")

    const handleSelectChange = (event) => {
        setLinea(event.target.value);
    };

    useEffect(() => {
        setDatosTransporteFiltro(datosTransporte.filter((item) => item.route_id === linea));
        setId(datosTransporteFiltro[0]["id"]);
        setCentrado([datosTransporteFiltro[0]["latitude"], datosTransporteFiltro[0]["longitude"]]);
    }, [linea])

        return (
            <div>
                <div style={{backgroundColor: "#ccc", border: "2px solid #000"}}>
                    <label htmlFor="opcionesDropdown">Selecciona una línea: </label>
                    <select id="opcionesDropdown" value={linea} onChange={handleSelectChange}>
                        <option value="">Selecciona una opción</option>
                        {datosTransporte.map((opcion) => (
                            <option key={opcion.id} value={opcion.route_id}>
                                {opcion.route_id}
                            </option>
                        ))}
                    </select>
                </div>
                <MapContainer key={id} center={centrado} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {datosTransporteFiltro.map((item, index) => {
                        return (<Marker position={[item["latitude"], item["longitude"]]}>
                            <Popup>
                                <>{[item["route_id"]]}</>
                                <br></br>
                                <>{[item["trip_headsign"]]}</>
                            </Popup>
                        </Marker>)
                    })}

                </MapContainer>
            </div>
        )
    };

    export default DashboardTransporte;