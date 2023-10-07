import React from 'react'
import emojiAnteojosNegros from "../multimedia/emojiAnteojosNegros.jpg"
import { datosTrabajo1 } from './Datos';

function UVIndex() {

    const hora = datosTrabajo1["current_weather"]["time"];
    const hora1 = hora.split("T")[1];
    const horaPosicion = hora1.split(":")[0];
    const indiceUV = datosTrabajo1["hourly"]["uv_index"][horaPosicion];

    let claseUVIndex = "";

    const clasificarUVIndex = () => {
        if (indiceUV <= 2) {
            claseUVIndex = "RIESGO BAJO";
        } else if (indiceUV >2 && indiceUV <= 5) {
            claseUVIndex = "RIESGO MODERADO";
        } else if (indiceUV > 5 && indiceUV <= 7) {
            claseUVIndex = "RIESGO ALTO";
        } else if (indiceUV > 7 && indiceUV <= 10) {
            claseUVIndex = "RIESGO MUY ALTO";
        } else if (indiceUV > 10) {
            claseUVIndex = "RIESGO EXTREMO";
        }
    }

    clasificarUVIndex();

    return (
        <div className='subseccion'>
            <img src={emojiAnteojosNegros}></img>
            <div className='elemento'>
                <p><b>UV Index</b></p>
            </div>
            <div className='elemento' style={{color: "darkred", backgroundColor: "lightgray"}}>
                <p><b>{claseUVIndex}</b></p>
                <p><b>{indiceUV}</b></p>
            </div>
        </div>
    )
}

export default UVIndex;