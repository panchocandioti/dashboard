import React, {useState} from 'react'

function Temperatura() {

    const [temperatura, setTemperatura] = useState(25);
    const [localidad, setLocalidad] = useState("CÓRDOBA");
    const [hora, setHora] = useState("17:00")



  return (
    <div className='subseccion'>
        <div className='elemento'>
            <p><b>Localidad: </b></p>
            <p>{localidad}</p>
        </div>
        <div className='elemento'>
            <p><b>Temperatura:</b></p>
            <p><b>{temperatura} °C</b></p>
        </div>
        <div className='elemento'>
            <p><b>Hora: </b></p>
            <p>{hora}</p>
        </div>
    </div>
  )
}

export default Temperatura