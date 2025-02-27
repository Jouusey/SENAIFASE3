import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="container-card">

        <h1> Nome: {props.nome} Especialidade: {props.especialidade} Idade: {props.idade}</h1>

    </div>
  )
}

export default Card