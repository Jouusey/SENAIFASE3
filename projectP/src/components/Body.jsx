import React, { useState } from 'react'
import "./Body.css"
import Produto from './Produto'

function Body() {
  
    const [inputNome, setInputNome] = useState('')
    const [inputPreco, setInputPreco] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImg, setInputImg] = useState('')



    const [pontosEstado, setPontosEstado] = useState(0)
    const [engra, setEngra] = useState("")

    
    const [produtos, setProdutos] = useState([
      {
        
        id: Date.now(),
        nome: "Abacaxi ok",
        preco: 5,
        descricao: "Muito ok :|",
        img: './public/images/pngtree-pineapple-png-image_8422082.png'
      },
      {
        id: Date.now()+1,
        nome: "Abacaxi",
        preco: 25,
        descricao: "Abacaxi",
        img: './public/images/36917913006_585773fe83_b.jpg'
      },
      {
        id: Date.now()+2,
        nome: "Crocodilo",
        preco: 520,
        descricao: "Ele nada sei lá",
        img: './public/images/OIP (1).jpg'
      }
    ])


    
    function cadastrarProduto() {
          
      const produto = {
 
        id: Date.now(),
        nome: inputNome,
        preco: Number(inputPreco),
        descricao: inputDescricao,
        img: inputImg
        
      }
      
      console.log(produto)
      setProdutos([...produtos, produto])

    }
    


        function coisas() {

          let repeticoes = 0

          while( repeticoes < pontosEstado){
/* 
            alert("VOCÊ CLICOU: " + (repeticoes + 1))
 */
            repeticoes ++

            
            if(repeticoes == 1){
              setEngra("VOCÊ CLICOU: "+ (repeticoes) + " vez")
            }else{
              setEngra("VOCÊ CLICOU: "+ (repeticoes) + " vezes")
            }


          }
         


        }

  return (
    
    <div className="body-container">
        
            <div className="esquerda">

            {engra}

            </div>
            <div className="meio">
                

                <img src="./public/images/svg-spinners--blocks-wave.svg" class="icon" alt="" />

                <button className='btn' onClick={coisas}>ME CLIQUE</button>

            </div>
            <div className="direita">


            <button className='btn' onClick={() =>  setPontosEstado(pontosEstado+1) }>Pontos</button>

  <div className="showpoints">

  {pontosEstado}

  </div>

              </div>

  <div className="lista-cards">
  {produtos.map((produto) => (

  <Produto key={produto.id} nome={produto.nome} preco={produto.preco} descricao={produto.descricao}img={produto.img}/>

  ))}  
  </div>


  <div className="formCadastro">

      <div className="inputContainer">

        <label htmlFor="">Produto:</label>
        <input  className='inpt' type="text"
          value={inputNome}
          onChange={(event) => setInputNome(event.target.value)} />
          
      </div>

      <div className="inputContainer">

        <label htmlFor="">Preço:</label>
        <input className='inpt' type="text"
          value={inputPreco}
          onChange={(event) => setInputPreco(event.target.value)} />
          
      </div>

    <div className="inputContainer">

      <label htmlFor="">Imagem: </label>
      <input className='inpt' type="text"
          value={inputImg}
          onChange={(event) => setInputImg(event.target.value)} />

    </div> 
    
    <div className="inputContainer">

      <label htmlFor="">Descrição: </label>
      <input className='inpt' type="text"
          value={inputDescricao}
          onChange={(event) => setInputDescricao(event.target.value)} />

</div>

    <button onClick={cadastrarProduto} className='btn'>Cadastrar</button>




  </div>



    </div>
  )
}

export default Body