import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Abouts from './pages/Abouts';
import Consultation from './pages/Consultation';

function App() {
    return (
    <>
        <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/abouts' component={Abouts} />
            <Route path='/konsultasi' component={Consultation } />
        </Switch>
        </Router>
    </>
    );
}

export default App;
