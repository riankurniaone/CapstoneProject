import React from 'react';
import '../App.css';
import Cards from '../components/Cards/Cards';
import HeroSection from '../components/Section/HeroSection';
import Footer from '../components/Footer/Footer';
import Chatbot from '../components/Chatbot/Chatbot';


function Home() {
    return (
    <>
        <Chatbot/>
        <HeroSection />
        <Cards />
        <Footer />
    </>
    );
}

export default Home;
