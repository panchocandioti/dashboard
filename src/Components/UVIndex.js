import React from 'react'
import emojiAnteojosNegros from "../multimedia/emojiAnteojosNegros.jpg"

function UVIndex() {
    return (
        <div className='subseccion'>
            <img src={emojiAnteojosNegros}></img>
            <div className='elemento'>
                <p><b>UV Index</b></p>
            </div>
            <div className='elemento' style={{color: "darkred", backgroundColor: "lightgray"}}>
                <p><b>NORMAL</b></p>
                <p><b>6.5</b></p>
            </div>
        </div>
    )
}

export default UVIndex;