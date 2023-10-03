import React from 'react'
import vientoDia from "../multimedia/IconosClima/dia/vientoDia.jpg"
import vientoNoche from "../multimedia/IconosClima/noche/vientoNoche.jpg"

function Viento() {
    return (
        <div className='subseccion'>
            <img src={vientoNoche}></img>
            <div className='elemento' style={{ border: "solid black 2px", backgroundColor: "lightgray" }}>
                <p><b>Velocidad:</b></p>
                <p><b>25 km/h</b></p>
            </div>
            <div className='elemento' style={{ border: "solid black 2px", backgroundColor: "lightgray" }}>
                <p><b>Dirección:</b></p>
                <p><b>Noreste</b></p>
            </div>
        </div>
    )
}

export default Viento;