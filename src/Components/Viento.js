import React, { useState } from 'react'
import vientoDia from "../multimedia/IconosClima/dia/vientoDia.jpg"
import vientoNoche from "../multimedia/IconosClima/noche/vientoNoche.jpg"
import { datosTrabajo1 } from './Datos'

function Viento() {
    
    const velocidad = datosTrabajo1["current_weather"]["windspeed"];
    const direccionGrados = datosTrabajo1["current_weather"]["winddirection"];
    const esDiaNumero = datosTrabajo1["current_weather"]["is_day"];
    
    var direccion = "";

    const convertirDireccion = () => {
        if (direccionGrados > 337 || direccionGrados < 23) {
            direccion = "NORTE"
        } else if (direccionGrados > 23 && direccionGrados < 68) {
            direccion = "NORESTE"
        } else if (direccionGrados > 67 && direccionGrados < 113) {
            direccion = "ESTE"
        } else if (direccionGrados > 112 && direccionGrados < 158) {
            direccion = "SURESTE"
        } else if (direccionGrados > 157 && direccionGrados < 203) {
            direccion = "SUR"
        } else if (direccionGrados > 202 && direccionGrados < 248) {
            direccion = "SUROESTE"
        } else if (direccionGrados > 247 && direccionGrados < 293) {
            direccion = "OESTE"
        } else if (direccionGrados > 292 && direccionGrados < 338) {
            direccion = "NOROESTE"
        }
    }

    convertirDireccion();

    return (
        <div className='subseccion'>
            {esDiaNumero !== 1 && (<img src={vientoNoche}></img>)}
            {esDiaNumero === 1 && (<img src={vientoDia}></img>)}
            <div className='elemento'>
                <p><b>Velocidad</b></p>
                <p><b>{velocidad} km/h</b></p>
            </div>
            <div className='elemento'>
                <p><b>Dirección</b></p>
                <p><b>{direccion}</b></p>
            </div>
        </div>
    )
}

export default Viento;