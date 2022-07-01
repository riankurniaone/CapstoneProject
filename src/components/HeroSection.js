import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
    <div className="wrapper">
        <section id='home'>
            <img className='img-header' src="https://i.pinimg.com/564x/da/c4/39/dac439308b5904d1d754182de3d6ffb4.jpg" alt="" />
            <div className="column">
                <h4>MARI SEHATKAN MENTAL KITA SEJAK MUDA</h4>
                <p className='description'>KATAKAN.ID merupakan sebuah layanan edukasi dan konsultasi yang membantu kamu memahami kesehatan mental secara lebih dalam</p>
                <a href="" className='button'>Konsultasi Sekarang</a>
            </div>
        </section>
    </div>
    );
}

export default HeroSection;
