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
                    <img src='/images/PaDokter1.png' alt=''/>
                    <p>Pak Dokter 1</p>
                </div>
                <div className='tutors-img'>
                    <img src='/images/PaDokter2.png' alt=''/>
                    <p>Pak Dokter 1</p>
                </div>
                <div className='tutors-img'>
                    <img src='/images/PaDokter3.png' alt=''/>
                    <p>Pak Dokter 1</p>
                </div>
            </div>
        </div>
    </section>



    <div className='container-fitur'>
    <div className='header-fitur'>
        <h2>Mengenal Psikolog dan Konselor Katakan.id</h2>
    </div>
    <div className='fitur'>
        <div class="card-fitur">
            <img src='https://i.pinimg.com/564x/3e/fd/48/3efd4856787e5df62996d3964371ba3f.jpg' alt=''/>
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
            <img src='https://i.pinimg.com/564x/a4/07/7b/a4077bcdee6fc65c77aaa3a40d5c03fa.jpg' alt=''/>
            <div class="list-fitur">
                <h4><b>FAMILY</b></h4>  
            </div>
        </div> 
    </div>

    <div className='fitur'>
        <div class="card-fitur">
            <img src='https://i.pinimg.com/564x/7c/31/80/7c31803afb3ae89a46ad989f7c8b7b1c.jpg' alt=''/>
            <div class="list-fitur">
                <h4><b>EMOTIONAL</b></h4> 
            </div>
        </div> 
        <div class="card-fitur">
            <img src='https://i.pinimg.com/564x/b2/eb/c9/b2ebc9bdc34fe6d386535fe4312a7b24.jpg' alt=''/>
            <div class="list-fitur">
                <h4><b>SOCIETY</b></h4> 
            </div>
        </div> 
        <div class="card-fitur">
            <img src='https://i.pinimg.com/564x/3c/ca/32/3cca32c1a6029c34ade00a217fdab6af.jpg' alt=''/>
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


    
    <div className='header-partner'>
        <h1>Didukung Oleh</h1>
    </div>
    <div className='partner'>
        <div className='partner-list'>
            <img src='https://lelogama.go-jek.com/yabb/media/user_media/yabb_horizontal_logo_optimized.png'/>
        </div>
    </div> 
   
    </>
    );
}

export default Cards;
