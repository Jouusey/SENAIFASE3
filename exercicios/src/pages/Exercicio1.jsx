import React, { useState } from 'react'
import "./Exercicio1.css"
import Button from '../components/Button'
import Tempera from '../components/Tempera'

function Exercicio1() {

  const [mensagem, setMensagem] = useState('Botão avisador')
  const [contador, setContador] = useState(0)
  const [btnShowOn, setBtnShowOn] = useState(false) 
  const [btnShowOnTemp, setBtnShowOnTemp] = useState(false) 

    function mostrarBtnAvisador() {


      if(btnShowOn){

        setBtnShowOnTemp(false)
        setBtnShowOn(false)

      }else{
        
        setBtnShowOnTemp(false)
        setBtnShowOn(true)

      }

    } 
    function mostrarBtnTemperatura() {


      if(btnShowOnTemp){

        setBtnShowOn(false)
        setBtnShowOnTemp(false)

      }else{
        
        setBtnShowOn(false)
        setBtnShowOnTemp(true)

      }

    }



  return (
    

    <div className="exercicio-container">



      <div className="exercicio-escolha">
        
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnTemperatura}>
        Temperatura
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Moedas
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Distância
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Imc
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Cronometro
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Palavras
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Tempo
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Juros
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>

      </div>

      <div className="exercicio-playspace">

      { btnShowOn && <Button/> }
      { btnShowOnTemp && <Tempera/>}

      </div>



    </div>
    
    
    
    
    
    
  )
}

export default Exercicio1