import React, { useState } from 'react'
import "./Body.css"
function Body() {
    const [pontosEstado, setPontosEstado] = useState(0)


        function coisas() {
        alert("HAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHA")
        }

  return (
    
    <div className="body-container">
        
            <div className="esquerda"></div>
            <div className="meio">
                

                <img src="./public/images/svg-spinners--blocks-wave.svg" class="icon" alt="" />

                <button className='btn' onClick={coisas}>ME CLIQUE</button>

            </div>
            <div className="direita">

            <button onClick={() =>  setPontosEstado(pontosEstado+1)}>Pontos</button>

            {pontosEstado}

            </div>

    </div>
  )
}

export default Body