import React from 'react'

function Lluvia(props) {

  const datosTrabajo1 = props.weatherData1;
  const precipitacion = datosTrabajo1["daily"]["precipitation_sum"];
  const probabilidad = datosTrabajo1["daily"]["precipitation_probability_max"];

  return (
    <div className='subseccion'>
        <div className='elemento' style={{backgroundColor: "lightblue"}}>
            <p><b>Precipitación</b></p>
            <p><b>{precipitacion} mm</b></p>
        </div>
        <div className='elemento'style={{backgroundColor: "lightblue"}}>
        <p><b>Probabilidad</b></p>
            <p><b>{probabilidad}%</b></p>
        </div>
    </div>
  )
}

export default Lluvia;