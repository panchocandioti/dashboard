import React from 'react'
import telescopio from "../multimedia/telescopio.jpg"

function Visibilidad(props) {

    const datosTrabajo1 = props.weatherData1;
    const hora = datosTrabajo1["current_weather"]["time"];
    const hora1 = hora.split("T")[1];
    const horaPosicion = parseInt(hora1.split(":")[0]);
    const visibilidadMetros = datosTrabajo1["hourly"]["visibility"][horaPosicion];
    const visibilidadKm = parseInt(visibilidadMetros/1000);

    let claseVisibilidad = "";

    const clasificarVisibilidad = () => {
        if (visibilidadKm <= 2) {
            claseVisibilidad = "MUY BAJA";
        } else if (visibilidadKm >2 && visibilidadKm <= 4) {
            claseVisibilidad = "REDUCIDA";
        } else if (visibilidadKm > 4 && visibilidadKm <= 10) {
            claseVisibilidad = "MODERADA";
        } else if (visibilidadKm > 10 && visibilidadKm <= 20) {
            claseVisibilidad = "NORMAL";
        } else if (visibilidadKm > 20) {
            claseVisibilidad = "MUY BUENA";
        }
    }

    clasificarVisibilidad();

    return (
        <div className='subseccion'>
            <img src={telescopio}></img>
            <div className='elemento'>
                <p><b>Visibilidad</b></p>
            </div>
            <div className='elemento' style={{color: "darkred", backgroundColor: "lightgray"}}>
                <p><b>{claseVisibilidad}</b></p>
                <p><b>{visibilidadKm} km</b></p>
            </div>
        </div>
    )
}

export default Visibilidad;