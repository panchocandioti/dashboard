import React from 'react'

function HumedadPresion(props) {

  const datosTrabajo1 = props.weatherData1;
  const hora = datosTrabajo1["current_weather"]["time"];
  const hora1 = hora.split("T")[1];
  const horaPosicion = parseInt(hora1.split(":")[0]);
  const humedad = datosTrabajo1["hourly"]["relativehumidity_2m"][horaPosicion];
  const presion = Math.round(datosTrabajo1["hourly"]["surface_pressure"][horaPosicion]);


  return (
    <div className='subseccion'>
        <div className='elemento' style={{color: "darkblue"}}>
            <p><b>Humedad relativa</b></p>
            <p style={{color: "white", backgroundColor: "darkblue"}}><b>{humedad}%</b></p>
        </div>
        <div className='elemento' style={{color: "darkred"}}>
        <p><b>Presión atmosférica</b></p>
            <p style={{color: "white", backgroundColor: "darkred"}}><b>{presion} hPa</b></p>
        </div>
    </div>
  )
}

export default HumedadPresion;