import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { datosTrabajo1 } from './Datos';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function MaxMin() {

    const data = {
        labels: ["Temp. Máxima (°C)", "Temp. Mínima (°C)"],
        datasets: [{
            label: "",
            data: [datosTrabajo1["daily"]["temperature_2m_max"][0], datosTrabajo1["daily"]["temperature_2m_min"][0]],
            backgroundColor: ["red", "blue"],
            borderColor: "black",
            borderWidth: 2,            
        }]
    }

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false,
            },
          },
    }

    return (
        <div style={{ position: "relative", height: "15vh"}}>
            <Bar data={data} options={options}></Bar>
        </div>
    )
}

export default MaxMin