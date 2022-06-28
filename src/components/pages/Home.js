import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Chatbot from '../chatbot';

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
