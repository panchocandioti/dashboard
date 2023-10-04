import React from 'react'

function HumedadPresion() {
  return (
    <div className='subseccion'>
        <div className='elemento' style={{color: "darkblue"}}>
            <p><b>Humedad relativa</b></p>
            <p><b>90%</b></p>
        </div>
        <div className='elemento' style={{color: "darkred"}}>
        <p><b>Presión atmosférica</b></p>
            <p><b>1014 kP</b></p>
        </div>
    </div>
  )
}

export default HumedadPresion;