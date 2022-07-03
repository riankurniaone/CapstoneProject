import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [IsActivityNavbar, setIsActivityNavbar] = useState(false);
    const [button, setButton] = useState(true);

    const handleIsActivityNavbar = () => setIsActivityNavbar(!IsActivityNavbar);
    const closeMobileMenu = () => setIsActivityNavbar(false);

    const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
    };

    useEffect(() => {
    showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            <i class='fab fa-typo3' />
            <img className="katakanlogo" src="/images/Katakan.id.png" alt="" />
            </Link>
            <div className='menu-icon' onClick={handleIsActivityNavbar}>
            <i className={IsActivityNavbar ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={IsActivityNavbar ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Beranda
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                Katakan Story
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/abouts'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                About
                </Link>
            </li>

           
            </ul>
            
        </div>
        </nav>
    </>
    );
}

export default Navbar;
