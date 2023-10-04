import React from 'react'
import vientoDia from "../multimedia/IconosClima/dia/vientoDia.jpg"
import vientoNoche from "../multimedia/IconosClima/noche/vientoNoche.jpg"

function Viento() {
    return (
        <div className='subseccion'>
            <img src={vientoNoche}></img>
            <div className='elemento'>
                <p><b>Velocidad</b></p>
                <p><b>25 km/h</b></p>
            </div>
            <div className='elemento'>
                <p><b>Dirección</b></p>
                <p><b>NORESTE</b></p>
            </div>
        </div>
    )
}

export default Viento;