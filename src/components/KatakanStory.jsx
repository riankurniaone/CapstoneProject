import React from "react";
import './KatakanStory.css';
// import Pagination from '@mui/material/Pagination';


function KatakanStory(){
    return(
        <>
        <div className="story">
            <div className="header-story">
                <h1>Katakan Story</h1>
            </div>
            <div className="story-list">
                <div className="story-img">
                    <a href="https://riliv.co/rilivstory/orang-tua-jahat/">
                      <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_350,h_250/https://riliv.co/rilivstory/wp-content/uploads/2022/01/orang-tua-jahat-1-Photo-by-Irish83-on-Unsplash-350x250.jpg"/>
                    </a>    
                </div>
                <div className="story-desc">
                    <div className="story-title">
                        <a href="https://riliv.co/rilivstory/orang-tua-jahat/">
                            <h3>Orang Tua Jahat, Sikapnya Seperti Ini pada Anak</h3>
                            <p>BY<span> ELGA WINDASARI </span></p>
                        </a>
                    </div>
                    <div className="desc">
                        <p>Orang tua jahat - Apa iya ada orang tua yang bersikap jahat kepada anaknya? Hmm.. ada saja, sih. Baik disadari ...</p>
                    </div> 
                </div>
            </div>

            <div className="story-list">
                <div className="story-img">
                    <a href="https://riliv.co/rilivstory/tips-meminta-maaf-dengan-baik/">
                      <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_350,h_250/https://riliv.co/rilivstory/wp-content/uploads/2022/01/tips-meminta-maaf-dengan-baik-1-Photo-by-Vie-Studio-from-Pexels-350x250.jpg"/>
                    </a>    
                </div>
                <div className="story-desc">
                    <div className="story-title">
                        <a href="https://riliv.co/rilivstory/tips-meminta-maaf-dengan-baik/">
                            <h3>7 Tips Meminta Maaf dengan Baik, Harus Tulus!</h3>
                            <p>BY<span> ELGA WINDASARI </span></p>
                        </a>
                    </div>
                    <div className="desc">
                        <p>Tips meminta maaf dengan baik - Ada orang yang susah mengucapkan kata maaf, tapi ada juga orang yang mudah meminta ...</p>
                    </div> 
                </div>
            </div>

            <div className="story-list">
                <div className="story-img">
                    <a href="https://riliv.co/rilivstory/waktu-pas-untuk-menikah/">
                      <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_350,h_250/https://riliv.co/rilivstory/wp-content/uploads/2022/01/waktu-pas-untuk-menikah-Photo-by-mentatdgt-from-Pexels-350x250.jpg"/>
                    </a>    
                </div>
                <div className="story-desc">
                    <div className="story-title">
                        <a href="https://riliv.co/rilivstory/waktu-pas-untuk-menikah/">
                            <h3>Waktu Pas untuk Menikah, Harus Tunggu Sampai Kapan?</h3>
                            <p>BY<span> ELGA WINDASARI </span></p>
                        </a>
                    </div>
                    <div className="desc">
                        <p>Waktu pas untuk menikah - Jika saat ini kamu sedang menjalin hubungan tapi belum ingin menikah karena ingin menunggu “waktu ...</p>
                    </div> 
                </div>
            </div>


            <div className="story-list">
                <div className="story-img">
                    <a href="https://riliv.co/rilivstory/kisah-sukses-anak-berkebutuhan-khusus/">
                      <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_350,h_250/https://riliv.co/rilivstory/wp-content/uploads/2022/01/239607543_402870387837648_4267608872666647252_n-350x250.jpg"/>
                    </a>    
                </div>
                <div className="story-desc">
                    <div className="story-title">
                        <a href="https://riliv.co/rilivstory/kisah-sukses-anak-berkebutuhan-khusus/">
                            <h3>5 Kisah Sukses Anak Berkebutuhan Khusus: Inspiratif!</h3>
                            <p>BY<span> ELGA WINDASARI </span></p>
                        </a>
                    </div>
                    <div className="desc">
                        <p>Kisah sukses anak berkebutuhan khusus - Kata orang, anak berkebutuhan khusus tidak punya masa depan. Padahal, hal itu sama sekali...</p>
                    </div> 
                </div>
            </div>


            <div className="story-list">
                <div className="story-img">
                    <a href="https://riliv.co/rilivstory/mendidik-remaja-zaman-now/">
                      <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_350,h_250/https://riliv.co/rilivstory/wp-content/uploads/2022/01/pexels-angela-roma-7363769-350x250.jpg"/>
                    </a>    
                </div>
                <div className="story-desc">
                    <div className="story-title">
                        <a href="https://riliv.co/rilivstory/mendidik-remaja-zaman-now/">
                            <h3>Tips Mendidik Remaja Zaman Now: Jangan Mengekang</h3>
                            <p>BY<span> ELGA WINDASARI </span></p>
                        </a>
                    </div>
                    <div className="desc">
                        <p>Mendidik remaja zaman now - Remaja zaman sekarang berbeda dengan remaja zaman dulu. Saat ini, remaja menghabiskan banyak waktu bermain ...</p>
                    </div> 
                </div>
            </div>
         
        </div>

        {/* <div className="pagination">
            <Pagination count={5}color="primary" />
        </div> */}
        
        </>
    )
}

export default KatakanStory;