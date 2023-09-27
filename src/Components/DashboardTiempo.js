import React from "react";
import Temperatura from "./Temperatura"
import HoraPorHora from "./HoraPorHora";
import MaxMin from "./MaxMin";
import TiempoActual from "./TiempoActual";
import SalidaPuesta from "./SalidaPuesta";

function DashboardTiempo() {
    return (
        <div className="containerTiempo">
            <div className="seccion" id="temp">
                <Temperatura />
            </div>
            <div className="seccionDoble" id="hora">
                <HoraPorHora />
            </div>
            <div className="seccion" id="tiempo">
                <TiempoActual />
            </div>
            <div className="seccion" id="uv">UV</div>
            <div className="seccion" id="viento">VIENTO</div>
            <div className="seccion" id="sol">
                <SalidaPuesta />
            </div>
            <div className="seccion" id="maxmin">
                <MaxMin />
            </div>
            <div className="seccion" id="hum">HUMEDAD</div>
            <div className="seccion" id="presion">PRESIÓN</div>
            <div className="seccion" id="visi">VISIBILIDAD</div>
            <div className="seccion" id="aire">CALIDAD AIRE</div>
        </div>
    );
};

export default DashboardTiempo;