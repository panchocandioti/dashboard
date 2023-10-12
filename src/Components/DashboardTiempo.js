import React, { useState, useEffect } from "react";
import Temperatura from "./Temperatura"
import HoraPorHora from "./HoraPorHora";
import MaxMin from "./MaxMin";
import TiempoActual from "./TiempoActual";
import SalidaPuesta from "./SalidaPuesta";
import HumedadPresion from "./HumedadPresion";
import Lluvia from "./Lluvia";
import Viento from "./Viento"
import CalidadAire from "./CalidadAire";
import Visibilidad from "./Visibilidad";
import UVIndex from "./UVIndex";


function DashboardTiempo() {

    const [weatherData1, setWeatherData1] = useState({});
    const [weatherData2, setWeatherData2] = useState({});
    const [cargando, setCargando] = useState(true);

    const fetchWeatherData1 = async () => {
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.3997&longitude=-60.7508&hourly=temperature_2m,relativehumidity_2m,weathercode,surface_pressure,visibility,windspeed_10m,winddirection_10m,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_probability_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1');
            const data = await response.json();
            setWeatherData1(data);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchWeatherData2 = async () => {
        try {
            const response = await fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-31.3997&longitude=-60.7508&hourly=european_aqi&timezone=America%2FSao_Paulo');
            const data = await response.json();
            setWeatherData2(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        async function fetchData() {
            await fetchWeatherData1();
            await fetchWeatherData2();
            setCargando(false);
        }

        fetchData();
    }, []);

    console.log(weatherData1);
    console.log(weatherData2)

    return (
        <div>
            {cargando === true && (<div className="texto-con-movimiento">CARGANDO DATOS METEOROLÓGICOS</div>)}
            {cargando === false && (<div className="containerTiempo">
                <div className="seccion" id="temp">
                    <Temperatura weatherData1={weatherData1} />
                </div>
                <div className="seccionDoble" id="hora">
                    <HoraPorHora weatherData1={weatherData1} />
                </div>
                <div className="seccion" id="tiempo">
                    <TiempoActual weatherData1={weatherData1} />
                </div>
                <div className="seccion" id="uv">
                    <UVIndex weatherData1={weatherData1} />
                </div>
                <div className="seccion" id="viento">
                    <Viento weatherData1={weatherData1} />
                </div>
                <div className="seccion" id="sol">
                    <SalidaPuesta weatherData1={weatherData1} />
                </div>
                <div className="seccion" id="maxmin">
                    <MaxMin weatherData1={weatherData1} />
                </div>
                <div className="seccion" id="humpresion">
                    <HumedadPresion weatherData1={weatherData1} />
                </div>
                <div className="seccion" id="lluvia">
                    <Lluvia weatherData1={weatherData1} />
                </div>
                <div className="seccion" id="visi">
                    <Visibilidad weatherData1={weatherData1} />
                </div>
                <div className="seccion" id="aire">
                    <CalidadAire weatherData1={weatherData1} weatherData2={weatherData2} />
                </div>
            </div>)}
        </div>
    );
};

export default DashboardTiempo;