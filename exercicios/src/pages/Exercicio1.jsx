import React, { useState } from 'react'
import "./Exercicio1.css"
import Button from '../components/Button'

function Exercicio1() {

  const [mensagem, setMensagem] = useState('Botão avisador')
  const [contador, setContador] = useState(0)
  const [btnShowOn, setBtnShowOn] = useState(false) 

    function mostrarBtnAvisador() {


      if(btnShowOn){

        setBtnShowOn(false)

      }else{
        
        setBtnShowOn(true)

      }

    }



  return (
    

    <div className="exercicio-container">



      <div className="exercicio-escolha">
        
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
        Avisador
      </button>  
      <button className='btnShowAvisador' onClick={mostrarBtnAvisador}>
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

      </div>



    </div>
    
    
    
    
    
    
  )
}

export default Exercicio1