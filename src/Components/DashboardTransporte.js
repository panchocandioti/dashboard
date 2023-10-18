import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { datosTransporte } from "./DatosTransporte";

function DashboardTransporte() {

    const position = [datosTransporte[0]["latitude"], datosTransporte[0]["longitude"]];

    return (
        <div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
};

export default DashboardTransporte;