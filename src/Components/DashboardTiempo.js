import React from "react";
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
            <div className="seccion" id="uv">
                <UVIndex />
            </div>
            <div className="seccion" id="viento">
                <Viento />
            </div>
            <div className="seccion" id="sol">
                <SalidaPuesta />
            </div>
            <div className="seccion" id="maxmin">
                <MaxMin />
            </div>
            <div className="seccion" id="humpresion">
                <HumedadPresion />
            </div>
            <div className="seccion" id="lluvia">
                <Lluvia />
            </div>
            <div className="seccion" id="visi">
                <Visibilidad />
            </div>
            <div className="seccion" id="aire">
                <CalidadAire />
            </div>
        </div>
    );
};

export default DashboardTiempo;