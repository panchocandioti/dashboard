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
import { geoData } from "./GeoDataArg";

function DashboardTiempo() {

    const [weatherData1, setWeatherData1] = useState({});
    const [weatherData2, setWeatherData2] = useState({});
    const [cargando, setCargando] = useState(true);

    const [provincia, setProvincia] = useState("Santa Fe");
    const [municipio, setMunicipio] = useState("Candioti");
    const [lat, setLat] = useState(-31.3997);
    const [long, setLong] = useState(-60.7508)
    const [datosMunicipios, setDatosMunicipios] = useState([]);
    const [listaMunicipios, setListaMunicipios] = useState([]);
    const [datosLocalidad, setDatosLocalidad] = useState([]);

    const datosDropDown1 = (geoData.map(item => item.provincia_nombre));
    const datosDropDown2 = datosDropDown1.sort((a, b) => a.localeCompare(b));
    const datosDropDown3 = [...new Set(datosDropDown2)];

    const fetchWeatherData1 = async () => {
        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,weathercode,surface_pressure,visibility,windspeed_10m,winddirection_10m,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_probability_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1`);
            const data = await response.json();
            setWeatherData1(data);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchWeatherData2 = async () => {
        try {
            const response = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${long}&hourly=european_aqi&timezone=America%2FSao_Paulo`);
            const data = await response.json();
            setWeatherData2(data);
        } catch (error) {
            console.error(error);
        };
    };

    useEffect(() => {
        fetchWeatherData1();
        fetchWeatherData2();
    }, [lat, long]);

    useEffect(() => {
        async function fetchData() {
            await fetchWeatherData1();
            await fetchWeatherData2();
            setCargando(false);
        };
        fetchData();
    }, []);

    const handleSelectProvincia = (event) => {
        const selectedProvincia = event.target.value
        setProvincia(selectedProvincia);
    };

    useEffect(() => {
        setDatosMunicipios(geoData.filter(item => item.provincia_nombre === provincia));
    }, [provincia]);

    useEffect(() => {
        setListaMunicipios((datosMunicipios.map(item => item.nombre)).sort((a, b) => a.localeCompare(b)));
    }, [datosMunicipios]);


    const handleSelectMunicipio = (event) => {
        const selectedMunicipio = event.target.value;
        setMunicipio(selectedMunicipio);
    };

    useEffect(() => {
        setDatosLocalidad(datosMunicipios.filter(item => item.nombre === municipio))
    }, [municipio]);

    useEffect(() => {
        setLat(datosLocalidad.map(item => item.centroide_lat));
        setLong(datosLocalidad.map(item => item.centroide_lon));
        console.log(lat);
        console.log(long);
    }, [datosLocalidad]);

    return (
        <div>
            {cargando === true && (<div className="texto-con-movimiento">CARGANDO DATOS METEOROLÓGICOS</div>)}
            {cargando === false && (<div className="containerTiempo">
                <div className="seccion" id="temp">
                    <div className="selector-localidad">
                    <p><b>LUGAR DE ARGENTINA</b></p>
                        <p>(Provincia y localidad)</p>
                        <select id="opcionesDropdown" value={provincia} onChange={handleSelectProvincia}>
                            <option value="provincia">Selecciona una provincia</option>
                            {datosDropDown3.map((provincia) => (
                                <option value={provincia}>
                                    {provincia}
                                </option>))}
                        </select>
                        <select id="opcionesDropdown" value={municipio} onChange={handleSelectMunicipio}>
                            <option value="provincia">Selecciona una localidad</option>
                            {listaMunicipios.map((municipio) => (
                                <option value={municipio}>
                                    {municipio}
                                </option>))}
                        </select>
                    </div>
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