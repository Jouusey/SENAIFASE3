import React, { useState } from 'react'
import "./Journey.css"
import { FaPlayCircle } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { GiFlame } from "react-icons/gi";
import { GiAncientSword } from "react-icons/gi";
import { GiAndroidMask } from "react-icons/gi";
import { GiAngularSpider } from "react-icons/gi";
import { GiMantrap } from "react-icons/gi";
import { GiCoinsPile } from "react-icons/gi";
import { FaSkull } from "react-icons/fa";
import { GiFalling } from "react-icons/gi";
import { GiOpenTreasureChest } from "react-icons/gi";
import { GiTreasureMap } from "react-icons/gi";
import { GiSnakeTongue } from "react-icons/gi";
import { GiArabicDoor } from "react-icons/gi";

import { GiNewShoot } from "react-icons/gi";
import { GiPikeman } from "react-icons/gi";
import { GiRooster } from "react-icons/gi";
import { GiScreenImpact } from "react-icons/gi";
import { GiHamShank } from "react-icons/gi";
import { GiGalley } from "react-icons/gi";
import { GiFencer } from "react-icons/gi";
import { GiDeadWood } from "react-icons/gi";
function Journey() {

    const [conteudo,setConteudo] = useState('')
    // index                 0               1                2                  3                  4                5               6               7           8            9                         10                11                12       

    const [storyBeat,setStoryBeat] = useState('')
    const [storyBeats, setStoryBeats] = useState([<GiNewShoot />, <GiDeadWood />, <GiFencer />, <GiPikeman />, <GiGalley />, <GiHamShank />,  <GiScreenImpact />, <GiRooster />,<GiMuscleUp />,<GiFlame />,<GiAncientSword />,<GiAndroidMask />,<GiAngularSpider />,<GiMantrap />,<GiCoinsPile />,<FaSkull />,<GiFalling />,<GiOpenTreasureChest />,<GiTreasureMap />,<GiSnakeTongue />,<GiArabicDoor />])
    const [storyBeatNova, setStoryBeatNova] = useState('')
    const [contadorNovo, setContadorNovo] = useState(0)
    const [final, setFinal] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [finalBotao, setFinalBotao] = useState('btnStoryAdvance')


    function nextStoryBeat() {

      
      let mensagemEscolhida = Math.floor(Math.random()* 11)

      if(contadorNovo < 21){

        switch (mensagemEscolhida) {
          case 0:
            setMensagem("Mas...")
            break;
  
          case 1:
            setMensagem("Mas logo após...")
            break;
            
          case 2:
            setMensagem("Então...")
            break;
            
          case 3:
            setMensagem("E dai...")
            break;
            
          case 4:
            setMensagem("Mas de repente...")
            break;
  
          case 5:
            setMensagem("Após um pouco de tempo...")
            break;
            
          case 6:
            setMensagem("Uma chance...")
            break;
            
          case 7:
            setMensagem("Por um triz!...")
            break;
            
          case 9:
            setMensagem("Após muito tempo...")
            break;
            
          case 10:
            setMensagem("Condenado...")
            break;
            
          case 11:
            setMensagem("Paranóia...")
            break;
          
            
        }
  
        
      }else{
        setMensagem("")
      }
        let n = Math.floor(Math.random()* storyBeats.length)
      

        
        setConteudo(storyBeats[n])
        setStoryBeatNova(storyBeats.splice(n, 1))
       
    
        console.log(storyBeats[n])
        console.log(storyBeats)
        console.log(contadorNovo)

        
        setContadorNovo(contadorNovo => contadorNovo + 1)

        if(contadorNovo == 21){

          setFinal("PARABENS, VOCÊ CHEGOU AO FIM DE SUA JORNADA.")
          setFinalBotao('btnFinal')
        }
        
    }



  return (

    <div className="journey-container">
       
       <div className="aventura-conteiner">
    <div className="conteudo-container">
        
    {conteudo}

    <div className="final-container">
    {final}
    </div>

    </div>
    

        <label className='lblStoryAdvance' htmlFor="">{mensagem}</label>
        <button onClick={nextStoryBeat} className={finalBotao} ><FaPlayCircle /></button>
       </div>

    </div>

  )
}

export default Journey