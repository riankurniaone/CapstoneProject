import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';

function Cards() {
    return (
    <div className='cards'>
        <h1>Apa Permasalahan Anda ?</h1>
        <p>Mereka siap mendengarkan ceritamu dan memberikan solusi terkait masalah : </p>
        <div className='cards__container'>
        <div className='cards__wrapper'>
        <img className='budokter1' src="https://i.pinimg.com/564x/7c/23/13/7c2313f8d49ff41e48982af55d5938f9.jpg" alt="" />
        <img className='padokter1' src="images/padokter1.png" alt="" />
        <img className='padokter2' src="images/padokter2.png" alt="" />
        <img className='padokter3' src="images/padokter3.png" alt="" />
        <img className='budokter2' src="https://i.pinimg.com/564x/7c/23/13/7c2313f8d49ff41e48982af55d5938f9.jpg" alt="" />
        <p className='nama1'>Fildzah Hashifah, M.Psi.</p>
        <p className='nama2'>Achmad Miftahudin, M.Psi.</p>
        <p className='nama3'>Randy Rizki Fadillah, M.Psi.</p>
        <p className='nama4'>Rian Kurniawan, M.Psi.</p>
        <p className='nama5'>Angela Tiurma, M.Psi.</p>
            <ul className='cards__items'>
            <CardItem
                src='images/selflove.webp'
                label='Love'
                path='/services'
            />
            <CardItem
                src='images/work.jpg'
                label='Work'
                path='/services'
            />
            <CardItem
                src='images/keluarga.jpg'
                label='Family'
                path='/services'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src='images/emosional.webp'
                label='Emotional'
                path='/services'
            />
            <CardItem
                src='images/society.webp'
                label='Society'
                path='/services'
            />
            <CardItem
                src='images/other.webp'
                label='Others'
                path='/services'
            />
            </ul>
            <h1>Kamu Bebas Pilih Yang Paling Nyaman</h1>
        <p>Konseling lebih mudah dengan banyak pilihan sesuai kebutuhan</p>
        <img className='chat' src="images/chatt.webp" alt="" />
        <img className='call' src="images/call.jpg" alt="" />
        <img className='videocall' src="images/videocall.webp" alt="" />
        <p className='textchat'>Chat</p>
        <p className='textcall'>Call</p>
        <p className='textvideocall'>Video Call</p>
        <div className='hero-btns'>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
            Mulai Konsultasi
        </Button>
        </div>
        </div>
        </div>
    </div>
    );
}

export default Cards;
