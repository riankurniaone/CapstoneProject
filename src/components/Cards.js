import React from 'react';
import './Cards.css';


function Cards() {
    return (
    <>
    <section id='tutors'>
        <div className='tengah'>
            <div className='kolom'>
                <h2>Apa Permasalahan Anda ?</h2>
                <p>Mereka siap mendengarkan ceritamu dan memberikan solusi terkait masalah</p>
            </div>
            <div className='tutors-list'>
                <div className='tutors-img'>
                    <img src='https://th.bing.com/th/id/OIP.On_Q3uIJWEDtaYDCbe3NBwHaG7?pid=ImgDet&rs=1' alt=''/>
                    <p>Pak Dokter 1</p>
                </div>
                <div className='tutors-img'>
                    <img src='/images/PaDokter1.png' alt=''/>
                    <p>Pak Dokter 1</p>
                </div>
                <div className='tutors-img'>
                    <img src='/images/PaDokter1.png' alt=''/>
                    <p>Pak Dokter 1</p>
                </div>
                <div className='tutors-img'>
                    <img src='/images/PaDokter1.png' alt=''/>
                    <p>Pak Dokter 1</p>
                </div>
            </div>
        </div>
    </section>


    <div className='container-fitur'>
    <div className='header-fitur'>
        <h2>Mengenal Psikolog dan Konselor Katakan.id</h2>
        <p>Semua psikolog dan konselor terbaik Katakan.id telah berlisensi dan diakui oleh HIMPSI. Mereka siap mendengarkan ceritamu dan memberikan solusi terkait masalah</p>
    </div>
    <div className='fitur'>
        <div class="card-fitur">
        <img src='https://i.pinimg.com/564x/fa/45/8c/fa458c2240ffb0c84bf3ef869e172a51.jpg' alt=''/>
        <div class="list-fitur">
            <h4><b>LOVE</b></h4>  
        </div>
        </div> 
        <div class="card-fitur">
        <img src='https://i.pinimg.com/564x/fa/45/8c/fa458c2240ffb0c84bf3ef869e172a51.jpg' alt=''/>
        <div class="list-fitur">
            <h4><b>WORK</b></h4>  
        </div>
        </div> 
        <div class="card-fitur">
        <img src='https://i.pinimg.com/736x/92/3d/e0/923de0fa9aa7d7abe2f68e34ddcb5812.jpg' alt=''/>
        <div class="list-fitur">
            <h4><b>FAMILY</b></h4>  
        </div>
        </div> 
    </div>

    <div className='fitur'>
        <div class="card-fitur">
        <img src='https://i.pinimg.com/564x/ad/0e/f8/ad0ef821573ac75f4bfa533d2b4cabc7.jpg' alt=''/>
        <div class="list-fitur">
            <h4><b>EMOTIONAL</b></h4> 
        </div>
        </div> 
        <div class="card-fitur">
        <img src='https://i.pinimg.com/564x/1b/34/97/1b3497f464044048aa2d4a0b3a986b92.jpg' alt=''/>
        <div class="list-fitur">
            <h4><b>SOCIETY</b></h4> 
        </div>
        </div> 
        <div class="card-fitur">
        <img src='https://i.pinimg.com/564x/ac/0d/c0/ac0dc0252fe11d4aeb12f4794b477ece.jpg' alt=''/>
        <div class="list-fitur">
            <h4><b>OTHERS</b></h4>  
        </div>
        </div> 
    </div>
    
    </div>



        <div className='header-call'>
            <h2>Kamu Bebas Pilih yang Paling Nyaman</h2>
            <p>Konseling lebih mudah dengan banyak pilihan sesuai kebutuhan</p>
        </div>
        <div className='call'>
            <div className='card-call'>
                <a href='https://riliv.co/'>
                <img src='https://riliv.co/img-homepage/text-icon.svg' alt=''/>
                </a>
                <p>Text</p>
            </div>
            <div className='card-call'>
                <a href='https://riliv.co/'>
                <img src='https://riliv.co/img-homepage/call-icon.svg' alt=''/>
                </a>
                <p>Call</p>
            </div>
            <div className='card-call'>
            <a href='https://riliv.co/'>
                <img src='https://riliv.co/img-homepage/video%20call-icon.svg' alt=''/>
                </a>
                <p>Vidio Call</p>
            </div>
        </div>    

    </>
    );
}

export default Cards;
