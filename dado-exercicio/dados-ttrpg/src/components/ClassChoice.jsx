import React, { useState } from 'react'
import "./ClassChoice.css"

function ClassChoice() {

 

  let bodybuilder = 1
  let explorador = 0
  const [classe, setClasse] = useState(0)
  return (
    <div className="classChoice-container">

        <button onClick={() => (setClasse(bodybuilder))} className='btnClassChoice' >BODYBUILDER</button> <button onClick={() => (setClasse(explorador))}  className='btnClassChoice'>EXPLORADOR</button>


    </div>
  )
}

export default ClassChoice
