import { useState } from 'react'
import './App.css'

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
          <div className="card-container">
                  <div class="card-container-top">
                      <div class="col">SABOR</div>
                      <div class="col">AROMA</div>
                      <div class="col">ACIDEZ</div>
                      <div class="col">CORPO</div>
                  </div>
                  <div class="card-container-bottom">
                    <div class="col">Cremoso</div>
                    <div class="col">Intenso</div>
                    <div class="col">Média</div>
                    <div class="col">Encorpado</div>
                 </div>
           </div>
      </div>
      <div className="line"></div>
      
          
    </>
  )
}

export default App
