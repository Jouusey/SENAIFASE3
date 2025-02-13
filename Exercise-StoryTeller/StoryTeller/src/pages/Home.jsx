import React from 'react'
import "./Home.css"
import Header from '../components/Header'
import Choices from '../components/Choices'
import Journey from '../components/Journey'
function Home() {
  return (

    <div className="home-container">
      <Header/>
      <Choices/>
      <Journey/>
    </div>
    
    
  )
}

export default Home