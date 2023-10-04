import React from 'react'
import telescopio from "../multimedia/telescopio.jpg"

function Visibilidad() {
    return (
        <div className='subseccion'>
            <img src={telescopio}></img>
            <div className='elemento'>
                <p><b>Visibilidad</b></p>
            </div>
            <div className='elemento' style={{color: "darkred", backgroundColor: "lightgray"}}>
                <p><b>NORMAL</b></p>
                <p><b>10 km</b></p>
            </div>
        </div>
    )
}

export default Visibilidad;