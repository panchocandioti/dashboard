import React from 'react'
import emojiAnteojosNegros from "../multimedia/emojiAnteojosNegros.jpg"

function UVIndex(props) {

    const datosTrabajo1 = props.weatherData1;
    const hora = datosTrabajo1["current_weather"]["time"];
    const hora1 = hora.split("T")[1];
    const horaPosicion = parseInt(hora1.split(":")[0]);
    const indiceUV = datosTrabajo1["hourly"]["uv_index"][horaPosicion];
    const esDiaNumero = datosTrabajo1["current_weather"]["is_day"];

    let claseUVIndex = "";

    const clasificarUVIndex = () => {
        if (indiceUV <= 0 || esDiaNumero === 0) {
            claseUVIndex = "SIN RIESGO";
        } else if (indiceUV > 0 && indiceUV <= 2 && esDiaNumero === 1) {
            claseUVIndex = "RIESGO BAJO";
        } else if (indiceUV >2 && indiceUV <= 5 && esDiaNumero === 1) {
            claseUVIndex = "RIESGO MODERADO";
        } else if (indiceUV > 5 && indiceUV <= 7 && esDiaNumero === 1) {
            claseUVIndex = "RIESGO ALTO";
        } else if (indiceUV > 7 && indiceUV <= 10 && esDiaNumero === 1) {
            claseUVIndex = "RIESGO MUY ALTO";
        } else if (indiceUV > 10 && esDiaNumero === 1) {
            claseUVIndex = "RIESGO EXTREMO";
        }
    }

    clasificarUVIndex();

    return (
        <div className='subseccion'>
            <img src={emojiAnteojosNegros}></img>
            <div className='elemento'>
                <p><b>UV Index</b></p>
                <p style={{fontSize: "small"}}>(EPA USA)</p>
            </div>
            <div className='elemento' style={{color: "darkred", backgroundColor: "lightgray"}}>
                <p><b>{claseUVIndex}</b></p>
                <p><b>{indiceUV}</b></p>
            </div>
        </div>
    )
}

export default UVIndex;