import {useState, useEffect} from 'react'
import './Carrousel.css';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';



const Carrousel = () => {
    
    const slides = [slide1, slide2];
    const variedade = [
        {
            "Sabor" : "Cremoso",
            "Tipo" : "Moído",
            "Quantidade": "500ml",
            "Preço" : "24R$"
        },
        {
            "Sabor" : "Tradicional",
            "Tipo" : "Grãos",
            "Quantidade": "500g",
            "Preço" : "26R$"
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        console.log(`Este é o Index do carrousel: ${currentIndex}`)
      };
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        console.log(`Este é o Index do carrousel: ${currentIndex}`)
      };

      useEffect(() => {
        const intervalId = setInterval(nextSlide, 7000);  
        return () => clearInterval(intervalId);
    }, []);

      

    return (
        <div className="carousel-container">
            <div className="carousel">
                <div className="carousel-btn prev" onClick={prevSlide}>
                   <p id="prev-btn">&lt;</p>
                </div>
                <div className="carousel-slide" style={{ backgroundImage: `url(${slides[currentIndex]})` }}>
                        <div className="card-container">
                            <div class="card-container-top">
                                <div class="col">SABOR</div>
                                <div class="col">TIPO</div>
                                <div class="col">QUANT</div>
                                <div class="col">PREÇO</div>
                            </div>
                            <div class="card-container-bottom">
                                <div class="col">{variedade[currentIndex].Sabor}</div>
                                <div class="col">{variedade[currentIndex].Tipo}</div>
                                <div class="col">{variedade[currentIndex].Quantidade}</div>
                                <div class="col">{variedade[currentIndex].Preço}</div>
                            </div>
                        </div>
                </div>
                <div className="carousel-btn next" onClick={nextSlide}>
                <p id="next-btn">&gt;</p>
                </div>
            </div>
        </div>
    )
}

export default Carrousel


/*
<div className="carousel-slide" style={{ backgroundImage: `url(${slides[currentIndex]})` }}>
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

*/