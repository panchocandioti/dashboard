import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { datosTrabajo1 } from './Datos';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function HoraPorHora() {

    const data = {
        labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm", "12am"],
        datasets: [{
            label: "Temperatura por hora (°C)",
            data: [14, 12, 11, 13, 18, 25, 23, 17, 15],
            backgroundColor: "orange",
            borderColor: "black",
            borderWidth: 2,
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div style={{ position: "relative", height: "28vh" }}>
            <Bar data={data} options={options}></Bar>
        </div>
    )
}

export default HoraPorHora;