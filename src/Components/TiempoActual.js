import React from 'react'
import despejadoDia from '../multimedia/IconosClima/dia/despejadoDia.jpg'
import lluviaDia from '../multimedia/IconosClima/dia/lluviaDia.jpg'
import nieveDia from '../multimedia/IconosClima/dia/nieveDia.jpg'
import nubladoDia from '../multimedia/IconosClima/dia/nubladoDia.jpg'
import nubladoParcialDia from '../multimedia/IconosClima/dia/nubladoParcialDia.jpg'
import despejadoNoche from '../multimedia/IconosClima/noche/despejadoNoche.jpg'
import lluviaNoche from '../multimedia/IconosClima/noche/lluviaNoche.jpg'
import nieveNoche from '../multimedia/IconosClima/noche/nieveNoche.jpg'
import nubladoNoche from '../multimedia/IconosClima/noche/nubladoNoche.jpg'
import nubladoParcialNoche from '../multimedia/IconosClima/noche/nubladoParcialNoche.jpg'
import { datosTrabajo1 } from './Datos'


function TiempoActual() {

    const esDiaNumero = datosTrabajo1["current_weather"]["is_day"];
    const weatherCode = datosTrabajo1["current_weather"]["weathercode"];

    let tiempoAhora = "";
    let dibujo;

    const convertirCodigoTiempo = () => {
        if (weatherCode == 0) {
            tiempoAhora = "Despejado";
            dibujo = 0;
        } else if (weatherCode == 1) {
            tiempoAhora = "Mayormente despejado";
            dibujo = 0;
        } else if (weatherCode == 2) {
            tiempoAhora = "Parcialmente nublado";
            dibujo = 1;
        } else if (weatherCode == 3) {
            tiempoAhora = "Nublado";
            dibujo = 2;
        } else if (weatherCode == 45 || weatherCode == 48) {
            tiempoAhora = "Niebla";
            dibujo = 2;
        } else if (weatherCode >= 51 && weatherCode <= 55) {
            tiempoAhora = "Llovizna";
            dibujo = 3;
        } else if (weatherCode == 56 || weatherCode == 57) {
            tiempoAhora = "Llovizna fría";
            dibujo = 3;
        } else if (weatherCode >= 61 && weatherCode <= 65) {
            tiempoAhora = "Lluvia"
        } else if (weatherCode == 66 || weatherCode == 67) {
            tiempoAhora = "Aguanieve";
            dibujo = 4;
        } else if (weatherCode >= 71 && weatherCode <= 77) {
            tiempoAhora = "Nieve";
            dibujo = 4;
        } else if (weatherCode >= 80 && weatherCode <= 82) {
            tiempoAhora = "Chubasco";
            dibujo = 3;
        } else if (weatherCode == 85 || weatherCode == 86) {
            tiempoAhora = "Nevada intensa";
            dibujo = 4;
        } else if (weatherCode >= 95 && weatherCode <= 99) {
            tiempoAhora = "Tormenta eléctrica";
            dibujo = 3;
        }
    }

    convertirCodigoTiempo();

    let diaNoche;

    const convertirEsDiaNumero = () => {
        if (esDiaNumero == 0) {
            diaNoche = "NOCHE";
        } else if (esDiaNumero == 1) {
            diaNoche = "DÍA";
        }
    }

    convertirEsDiaNumero();

    return (
        <div className='subseccion'>
            {esDiaNumero == 1 && dibujo == 0 && (<img className="elemento" src={despejadoDia}></img>)}
            {esDiaNumero == 0 && dibujo == 0 && (<img className="elemento" src={despejadoNoche}></img>)}
            {esDiaNumero == 1 && dibujo == 1 && (<img className="elemento" src={nubladoParcialDia}></img>)}
            {esDiaNumero == 0 && dibujo == 1 && (<img className="elemento" src={nubladoParcialNoche}></img>)}
            {esDiaNumero == 1 && dibujo == 2 && (<img className="elemento" src={nubladoDia}></img>)}
            {esDiaNumero == 0 && dibujo == 2 && (<img className="elemento" src={nubladoNoche}></img>)}
            {esDiaNumero == 1 && dibujo == 3 && (<img className="elemento" src={lluviaDia}></img>)}
            {esDiaNumero == 0 && dibujo == 3 && (<img className="elemento" src={lluviaNoche}></img>)}
            {esDiaNumero == 1 && dibujo == 4 && (<img className="elemento" src={nieveDia}></img>)}
            {esDiaNumero == 0 && dibujo == 4 && (<img className="elemento" src={nieveNoche}></img>)}
            <div className='elemento'>
                <p><b>{tiempoAhora}</b></p>
                <p><b>{diaNoche}</b></p>
            </div>
        </div>
    )
}

export default TiempoActual;