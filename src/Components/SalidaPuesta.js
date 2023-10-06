import React from 'react'
import crepusculo from "../multimedia/crepusculo.jpg"
import { datosTrabajo1 } from './Datos';

const horaSalida = datosTrabajo1["daily"]["sunrise"][0].split("T")[1];
const horaPuesta = datosTrabajo1["daily"]["sunset"][0].split("T")[1];

function SalidaPuesta() {
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