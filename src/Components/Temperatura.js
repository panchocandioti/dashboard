import React from 'react'

function Temperatura(props) {

    const datosTrabajo1 = props.weatherData1;
    const temperatura = datosTrabajo1["current_weather"]["temperature"];

    return (
        <div className='subseccion'>
            <div className='elemento' style={{ borderRadius: "10px", backgroundColor: "orange" }}>
                <p><b>Temperatura:</b></p>
                <p style={{ fontSize: "110%" }}><b>{temperatura} °C</b></p>
            </div>
        </div>
    )
}

export default Temperatura