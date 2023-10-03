import React from 'react'

function Lluvia() {
  return (
    <div className='subseccion'>
        <div className='elemento' style={{border: "solid black 2px", backgroundColor: "lightblue"}}>
            <p><b>Precipitación:</b></p>
            <p><b>25 mm</b></p>
        </div>
        <div className='elemento'style={{border: "solid black 2px", backgroundColor: "lightblue"}}>
        <p><b>Probabilidad:</b></p>
            <p><b>75%</b></p>
        </div>
    </div>
  )
}

export default Lluvia;