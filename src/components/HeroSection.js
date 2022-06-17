import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
    <div className='hero-container'>
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        <img className="budoctor" src="/images/BuDokter.png" alt="" />
        <img className="pakdoctor" src="/images/PakDokter.png" alt="" />
        <h2>MARI SEHATKAN MENTAL KITA SEJAK MUDA</h2>
        <p>Katakan.id merupakan sebuah layanan edukasi dan konsultasi yang membantu
            kamu memahami kesehatan mental secara lebih dalam.
        </p>
        <div className='hero-btns'>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
            Konsultasi Sekarang
        </Button>
        </div>
    </div>
    );
}

export default HeroSection;
