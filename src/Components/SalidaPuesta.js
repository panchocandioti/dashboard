import React from 'react'
import crepusculo from "../multimedia/crepusculo.jpg"


function SalidaPuesta(props) {

  const datosTrabajo1 = props.weatherData1;
  const horaSalida = datosTrabajo1["daily"]["sunrise"][0].split("T")[1];
  const horaPuesta = datosTrabajo1["daily"]["sunset"][0].split("T")[1];

  return (
    <div className='subseccion'>
        <img src={crepusculo}></img>
        <div className='elemento' style={{backgroundColor: "orange"}}>
            <p><b>Salida Sol</b></p>
            <p><b>{horaSalida}</b></p>
        </div>
        <div className='elemento'style={{color: "white", backgroundColor: "blue"}}>
        <p><b>Puesta Sol</b></p>
            <p><b>{horaPuesta}</b></p>
        </div>
    </div>
  )
}

export default SalidaPuesta;