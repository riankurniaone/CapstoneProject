import React from 'react';
import './Footer.css';


function Footer() {
    return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className='footer'>
        <div className='footer-section'>
            <img src='./images/katakan.id.png'/>
        </div>
        <div className='footer-section'>
            <h3>Layanan Kami</h3>
            <ul>
                <li>Konsultasi</li>
                <li>Meditasi</li>
            </ul>
        </div>
        <div className='footer-section'>
            <h3>Contact</h3>
            <p className='contact-footer'><i class="fa-solid fa-location-dot"></i>JL.Temanggung Gang Bawal II Margadana Kota Tegal Jawa Tengah Indonesia</p>
        </div>
        <div className='footer-section'>
            <h3>Sosial Media</h3>
            <ul>
                <li><a href=''><i class="fa-brands fa-instagram"></i>Instagram</a></li>
                <li><a href=''><i class="fa-brands fa-youtube"></i>YouTube</a></li>
                <li><a href=''><i class="fa-brands fa-facebook"></i>Facebook</a></li>
                <li><a href=''><i class="fa-brands fa-twitter"></i>Twiter</a></li>
            </ul>
        </div>
    </div>
    </>
    );
}

export default Footer;
