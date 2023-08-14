import React from "react";
import '../scss/Hero.scss'
import grafismo from '../assets/Logo RGB/Grafismo DNA Verde.png'
import Chart from "./Chart";

function Hero() {
    return(
        <section id='hero'>
            <div className="phrase-container">
                <div className="phrase">Data is in our</div>
                <div className="phrase large">DNA</div>
                <div className="description">Mergulhamos profundamente no mundo dos números para extrair insights significativos e impulsionar a tomada de decisões informadas. Utilizando abordagens científicas de ponta, exploramos padrões complexos e tendências ocultas nos dados, revelando oportunidades que podem transformar negócios. Nossa paixão pela ciência dos dados nos impulsiona a desvendar as histórias por trás dos números, capacitando nossos clientes a enfrentar os desafios do mercado com confiança e clareza."</div>
            </div>
            <Chart />
            
        </section>
    )
}

export default Hero

/*
<div className="chart-image">
    <img src={datascience} alt="" />
</div>
*/