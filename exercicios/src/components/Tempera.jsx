import React, { useState } from 'react'

function Tempera() {

  const[tempUmInput, setTempUmInput] = useState('') 
  const[userInput, setUserInput] = useState(0)
  var formula
  const[tempDoisInput, setTempDoisInput] = useState('') 
  const[resultado, setResultado] = useState('') 

  function calcular(){
    switch (true) {

      case tempUmInput == '1' && tempDoisInput == '5': //? Celsius para Fahrenheit
        formula = userInput * 1.8 + 32
        setResultado(formula)
        break;

      case tempUmInput == '1' && tempDoisInput == '6': //* Celsius para Kelvin
        formula = userInput + 273.15
        setResultado(formula)
        break;
        
      case tempUmInput == '2' && tempDoisInput == '4': //! Fahrenheit para Celsius
        formula = (userInput - 32) / 1.8
        setResultado(formula)
        break;

      case tempUmInput == '2' && tempDoisInput == '6': //? Fahrenheit para Kelvin
        formula = (userInput - 32) / 1.8 + 273.15
        setResultado(formula)
        break;

      case tempUmInput == '3' && tempDoisInput == '4': //* Kelvin para Celsius
        formula = userInput - 273.15
        setResultado(formula)
        break;

      case tempUmInput == '3' && tempDoisInput == '5': //! Kelvin para Fahrenheit
        formula = (userInput - 273.15) * 1.8 + 32
        setResultado(formula)
        break;
        
      default:
        setResultado('Conversão inválida')
        break;
    }
  }

  return (
    <div>

      <select
     onChange={(event) => setTempUmInput(event.target.value)}  name="hello" id="">
        
        <option value=''>Selecione</option>
        <option value='1'>Celcius</option>
        <option value='2' >Fahrenheit</option>
        <option value='3'>Kelvin</option>

      </select>
      <label htmlFor="">Para:</label>

      <select
     onChange={(event) => setTempDoisInput(event.target.value)}  name="hello" id="">
       
       <option value=''>Selecione</option>
        <option value='4'>Celcius</option>
        <option value='5' >Fahrenheit</option>
        <option value='6'>Kelvin</option>

      </select>

      <label htmlFor="">Temperatura atual:</label>
        <input value={userInput} type="number" name="" id=""
        onChange={(event) => setUserInput(event.target.value)} />
        <button onClick={calcular} >Calcular</button>

        {resultado}

    </div>
  )
}

export default Tempera
