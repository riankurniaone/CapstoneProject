import React from "react";
import './about-section.css';

function About(){
    return(
        <>
        <div className="about-store-one">
            <div className="about-img">
                <img src="https://riliv.co/img-about/sec-1-2x.webp"/>
            </div>
            <div className="about-desc">
                <h2>Mari Mengatakan Apa Yang Harus Dikatakan</h2>
                <p>Katakan.id merupakan sebuah layanan edukasi dan konsultasi yang membantu kamu memahami kesehatan mental secara lebih mendalam. </p>
            </div>
        </div>

        <div className="about-store-two">
        <div className="about-desc">
                <h2>Kami Merupakan Perintis Platform Mental Health di Indonesia</h2>
                <p>Katakan.id sebagai sebuah platform kesehatan di bidang mental health,
                memiliki tujuan memberikan kemudahan bagi penderita kesehatan mental untuk mencari informasi tentang mental dan berkonsultasi langsung dengan psikolog professional.</p>
            </div>
            <div className="about-img">
                <img src="https://riliv.co/img-about/sec-1-2x.webp"/>
            </div> 
        </div>     

         <div className="team">
            <div className="team-header">
                <h1>Yang Mengawali Langkah Kecil Ini</h1>
                <p>Perkenalkan, kami adalah pemuda-pemudi Indonesia yang percaya bahwa langkah kecil yang kami lakukan dapat membawa perubahan besar, seperti kualitas mental Anda yang lebih sehat.</p>
            </div>

            <div className="card-team-list">
            <div className="team-card">
                <img src="./images/mifta1.png"/>
                <div className="team-name">
                    <h5>Achmad Miftahudin</h5>
                </div>
            </div>
            <div className="team-card">
                <img src="./images/mifta1.png"/>
                <div className="team-name">
                    <h5>Angela Tiurma</h5>
                </div>
            </div>
            <div className="team-card">
                <img src="./images/mifta1.png"/>
                <div className="team-name">
                    <h5>Randy Rizki Fadhillah</h5>
                </div>
            </div>
            <div className="team-card">
                <img src="./images/mifta1.png"/>
                <div className="team-name">
                    <h5>Rian Kurniawan</h5>
                </div>
            </div>
            <div className="team-card">
                <img src="./images/mifta1.png"/>
                <div className="team-name">
                    <h5>Rian Kurniawan</h5>
                </div>
            </div>
            </div>
            

         </div>
        </>
    )
}

export default About;