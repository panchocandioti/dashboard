import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function HoraPorHora(props) {

    const datosTrabajo1 = props.weatherData1;
    
    const data = {
        labels: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00","22:00", "23:00"],
        datasets: [{
            label: "Temperatura por hora (°C)",
            data: datosTrabajo1["hourly"]["temperature_2m"],
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