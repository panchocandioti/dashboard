import React from 'react'
import despejadoDia from '../multimedia/IconosClima/dia/despejadoDia.jpg'
import despejadoNoche from '../multimedia/IconosClima/noche/despejadoNoche.jpg'


function TiempoActual() {
    return (
        <div className='subseccion'>
            <img className="elemento" src={despejadoNoche}></img>
            <div className='elemento'>
                <p><b>Despejado</b></p>
                <p><b>NOCHE</b></p>
            </div>
        </div>
    )
}

export default TiempoActual