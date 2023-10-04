import React from 'react'
import emojiMascara from "../multimedia/emojiMascara.jpg"

function CalidadAire() {
    return (
        <div className='subseccion'>
            <img src={emojiMascara}></img>
            <div className='elemento'>
                <p><b>Calidad del aire</b></p>
                
            </div>
            <div className='elemento'style={{color: "darkred", backgroundColor: "lightgray"}}>
                <p><b>INSALUBRE</b></p>
                <p><b>105</b></p>
            </div>
        </div>
    )
}

export default CalidadAire;