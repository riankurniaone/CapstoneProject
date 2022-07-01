import React from 'react';
import '../App.css';
import './CardsAbout.css';

function CardsAbout() {
    return (
    <div className="wrapper_about">
        <section id='about'>
            <div className="column_about">
                <h2 className='judul1'>MARI MENGATAKAN APA YANG HARUS DI KATAKAN</h2>
                <p className='desc'>Katakan.id merupakan sebuah layanan edukasi dan konsultasi yang membantu kamu memahami kesehatan mental secara lebih mendalam. </p>
            </div>
        </section>
                <h2 className='judul2'>Kami Merupakan Perintis Platform Mental Health di Indonesia</h2>
                <p className='desc1'>Katakan.id sebagai sebuah platform kesehatan di bidang mental health,
                memiliki tujuan memberikan kemudahan bagi penderita kesehatan mental untuk mencari informasi tentang mental dan berkonsultasi langsung dengan psikolog professional. </p>
                <h2 className='judul3'>Semua Berawal dari ...</h2>
                <p className='desc2'>Katakan.id berawal hadir dari keresahan para founder yang merasa bahwa tingginya kasus penyakit kesehatan mental di Indonesia terutama
                di kalangan remaja sehingga tercetuslah aplikasi Katakan.id dan berharap melalui platform Katakan.id ini, para remaja dan semua berbagai kalangan masyarakat 
                lebih aware terhadap kesehatan mental dirinya sendiri dan orang sekitarnya sehingga para penderita penyakit kesehatan mental ini menjadi sehat kembali baik sehat fisik maupun batinnya. </p>
            <section id='about'>
            <div className="column_about">
            <h2 className='judul_tim'>Perkenalkan Tim Kami</h2>
            <p className='desc_tim'>Kami adalah anak muda Indonesia yang percaya dapat memberikan dampak perubahan yang positif terhadap mental health Indonesia.</p>
            </div>            
            </section>

            <div className='tim-list'>
                <div className='tim-img'>
                    <img src='https://th.bing.com/th/id/OIP.On_Q3uIJWEDtaYDCbe3NBwHaG7?pid=ImgDet&rs=1' alt=''/>
                    <p>Angela Tiurma</p>
                </div>
                <div className='tutors-img'>
                    <img src='/images/PaDokter1.png' alt=''/>
                    <p>Achmad Miftahudin</p>
                </div>
                <div className='tutors-img'>
                    <img src='/images/PaDokter1.png' alt=''/>
                    <p>Randy Rizki Fadhillah</p>
                </div>
                <div className='tutors-img'>
                    <img src='/images/PaDokter1.png' alt=''/>
                    <p>Rian Kurniawan</p>
                </div>
                <div className='tutors-img'>
                    <img src='/images/PaDokter1.png' alt=''/>
                    <p>Fildzah Hashifah</p>
                </div>
                </div>
        </div>   
    );
}

export default CardsAbout;
