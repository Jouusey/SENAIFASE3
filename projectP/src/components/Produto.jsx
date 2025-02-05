import React, { useState } from 'react'
import "./Produto.css"
import { GiPineapple } from "react-icons/gi";
function Produto(props) {
  return (

    <div className="container-produto">
        
        <img src={props.img} alt=""  className='imgAba' />
        <h2>{props.nome}</h2>
        <h3>R${props.preco.toFixed(2)}</h3>
        <h4>{props.descricao}</h4>


        {props.preco<100 && 
<div className="promo">

<p>PROMOÇÃO!</p><GiPineapple />
    
</div>
}
        

    </div>
  )
}

export default Produto