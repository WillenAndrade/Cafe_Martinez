import { useEffect, useState } from 'react'
import './App.css'
import Carrousel from './components/Carrousel'
import { Link } from 'react-router-dom'

function App() {

    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(nextPromotionMessage, 5000);  
      return () => clearInterval(intervalId);
  }, []);

  const nextPromotionMessage = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % promotionMessage.length);
    console.log(`Este é o Index do promotionMessage: ${messageIndex}`)
  }

  const promotionMessage = [
    { message: "Tem promoção a partir da segunda unidade!",
      style: "description-p-one"
    },
    { message: "Entregamos na porta de sua casa!",
      style: "description-p-two"
    }
  ]

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

      <div className="buy">
        {/* <button>Garanta já o seu!</button>*/}
      </div>   
      <div className="line"></div>
      <div className="description-two">
          <p className={promotionMessage[messageIndex].style}>{promotionMessage[messageIndex].message}</p>
      </div>
      <div className="line"></div>
      <Carrousel />
      <div className="line"></div>
      <div className="test">
          <button>Peça seu café aqui!</button>
      </div>
      <div className="line"></div>
    </>
  )
}

export default App
