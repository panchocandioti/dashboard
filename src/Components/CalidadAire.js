import React from 'react'
import emojiMascara from "../multimedia/emojiMascara.jpg"

function CalidadAire(props) {

    const datosTrabajo1 = props.weatherData1;
    const datosTrabajo2 = props.weatherData2;
    const hora = datosTrabajo1["current_weather"]["time"];
    const hora1 = hora.split("T")[1];
    const horaPosicion = hora1.split(":")[0];
    const calidadAire = parseInt(datosTrabajo2["hourly"]["european_aqi"][horaPosicion]);

    let claseCalidadAire = "";

    const clasificarCalidadAire = () => {
        if (calidadAire <= 20) {
            claseCalidadAire = "MUY BUENA";
        } else if (calidadAire > 20 && calidadAire <= 40) {
            claseCalidadAire = "BUENA";
        } else if (calidadAire > 40 && calidadAire <= 60) {
            claseCalidadAire = "REGULAR";
        } else if (calidadAire > 60 && calidadAire <= 80) {
            claseCalidadAire = "POBRE";
        } else if (calidadAire > 80 && calidadAire <= 100) {
            claseCalidadAire = "MUY POBRE"
        } else if (calidadAire > 100) {
            claseCalidadAire = "INSALUBRE"
        }
    }

    clasificarCalidadAire();

    return (
        <div className='subseccion'>
            <img src={emojiMascara}></img>
            <div className='elemento'>
                <p><b>Calidad del aire</b></p>
                <p style={{fontSize: "small"}}>(European AQI)</p>
            </div>
            <div className='elemento'style={{color: "darkred", backgroundColor: "lightgray"}}>
                <p><b>{claseCalidadAire}</b></p>
                <p><b>{calidadAire}</b></p>
            </div>
        </div>
    )
}

export default CalidadAire;