import React, { useState } from 'react'
import "./PcStats.css"

import { FaDiceOne } from "react-icons/fa";
import { FaDiceTwo } from "react-icons/fa6";
import { FaDiceThree } from "react-icons/fa6";
import { FaDiceFour } from "react-icons/fa";
import { FaDiceFive } from "react-icons/fa";
import { FaDiceSix } from "react-icons/fa";
import { FaDiceD6 } from "react-icons/fa";

function PcStats() {

  

  let bodybuilder = 1

  const [classe, setClasse] = useState(0)
  const [hp, setHp] = useState (<FaDiceD6 />)
  const [str, setStr] = useState (<FaDiceD6 />)
  const [agi, setAgi] = useState (<FaDiceD6 />)
  const [contadorHp, setContadorHp] = useState(0)
  const [contadorStr, setContadorStr] = useState(0)
  const [contadorAgi, setContadorAgi] = useState(0)

  const dados = [<FaDiceOne />, <FaDiceTwo />, <FaDiceThree />, <FaDiceFour />, <FaDiceFive />, <FaDiceSix />]
  const [dadosNovos, setDadosNovos] = useState('')
  const [dadoMostrar, setDadoMostrar] = useState('')

  function rollHp() {

    if(contadorHp < 1){

    let vida = Math.floor(Math.random()* 7)


    if(classe == 1 ){

      setHp(vida = vida +2)
      
      console.log(vida)

    }else{
      setHp(vida+1)

    }

    setContadorHp(1)
    }
  }

  function rollStr() {

    if(contadorStr < 1){

    let forca = Math.floor(Math.random()* 7)


    if(classe == 1){

      setStr(forca+2)

    }else{
      setStr(forca)
    }
    
    setContadorStr(1)
    }
  }

  function rollAgi() {

    if(contadorAgi < 1){

    let agilidade = Math.floor(Math.random()* 7)
    
    if(classe == 1){

      setAgi(agilidade)

    }else{
      setAgi(agilidade+3)
    }

    setContadorAgi(1)
    }
    
  }
  
  function novoDado() {

    
      let n = Math.floor(Math.random()* 6)
    

      setDadoMostrar(dados[n])
     
  
      console.log(dados[n])
      console.log(dados)


    }


  return (
   <div className="pcStats-container">

    
    <div className="pcImage">
      
    <div className="aventura"></div>
    </div>
   

    <div className="pcStats-dice">


    <button onClick={() => (setClasse(bodybuilder))} className='btnClassChoice' >BODYBUILDER</button> <button onClick={() => (setClasse(explorador))}  className='btnClassChoice'>EXPLORADOR</button>

        <label htmlFor="">VIDA</label>
        <button onClick={rollHp} className='btnPcStatsDice' >{hp}</button>
        <label htmlFor="">FORÇA</label>
        <button onClick={rollStr} className='btnPcStatsDice' >{str}</button>
        <label htmlFor="">AGILIDADE</label>
        <button onClick={rollAgi} className='btnPcStatsDice' >{agi}</button>


        <div className="dados">
{dadoMostrar}
<button className='btnAvance' onClick={novoDado} >Use a sua força</button>
<button className='btnAvance' onClick={novoDado} >Use sua agilidade</button>
        </div>

    </div>

    



   </div>
   
  )
}

export default PcStats