import React from 'react'
import crepusculo from "../multimedia/crepusculo.jpg"

function SalidaPuesta() {
  return (
    <div className='subseccion'>
        <img src={crepusculo}></img>
        <div className='elemento' style={{backgroundColor: "orange"}}>
            <p><b>Salida Sol</b></p>
            <p><b>6:30</b></p>
        </div>
        <div className='elemento'style={{color: "white", backgroundColor: "blue"}}>
        <p><b>Puesta Sol</b></p>
            <p><b>18:30</b></p>
        </div>
    </div>
  )
}

export default SalidaPuesta;