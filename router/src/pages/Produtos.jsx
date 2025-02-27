import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import "./Produtos.css"

function Produtos() {


    const [produtoss,setProdutoss] = useState([
        { id:'key', nome: 'Jóruabe', especialidade: 'Barco', idade: 86},
        { id:'key2', nome: 'Aderbal', especialidade: 'Corda', idade: 72 },
        { id:'key3', nome: 'Cidinho', especialidade: 'Rede', idade: 53 },
        { id:'key4', nome: 'Doralice', especialidade: 'Remo', idade: 68 },
        { id:'key5', nome: 'Firmino', especialidade: 'Vela', idade: 47 }
    ])

  return (
    <div className='container-produto' >

<Navbar/>
        <div className="bah">

        {produtoss.map((produto) => (

            <Card key={produto.id} nome={produto.nome} especialidade={produto.especialidade} idade={produto.idade} />

        ))}
        {produtoss.map((produto) => (

            <Card key={produto.id} nome={produto.nome} especialidade={produto.especialidade} idade={produto.idade} />

        ))}
        {produtoss.map((produto) => (

            <Card key={produto.id} nome={produto.nome} especialidade={produto.especialidade} idade={produto.idade} />

        ))}
        

        </div>

    </div>
  )
}

export default Produtos