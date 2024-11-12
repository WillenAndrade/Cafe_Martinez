import { useState } from 'react'
import './App.css'
import Carrousel from './components/Carrousel'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="line"></div>
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
      <Carrousel />
      <div className="line"></div>
      <div className="description">
          <h3>O preço por embalagem cai a partir de 2 unidades!</h3>
      </div>
      <div className="test"></div>
      <div className="buy">
        <button>Garanta já o seu!</button>
      </div>
                
    </>
  )
}

export default App
