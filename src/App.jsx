import { useState } from 'react'
import './App.css'
import Carrousel from './components/Carrousel'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
          <div className="logo">
          </div>
      </header>
      <div className="line"></div>
      <div className="title">
          <div className="coffe-img"> 
              <h2>Descubra o sabor único do nosso café Gourmet!</h2>
          </div>
      </div>
      <div className="line"></div>
      
      <div className="description">
          <h3>Produzido com grãos selecionados, nosso café é ideal para quem busca qualidade em um sabor suave  e autenticidade  incomparável!</h3>
      </div>
      <div className="line"></div>
      <div className="test"></div>
      <div className="line"></div>
      <div className="buy">
          
      </div>
      <div className="line"></div>
      <Carrousel />
      
          
    </>
  )
}

export default App
