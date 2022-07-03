import React from "react";
import './KonsultasiSection.css';


function Konsultasi(){
    return(
        <>
            <div className="konsultasi-section">
                <div className="header-konsultasi">
                     <h2>Mulai konseling untuk mendapatkan perspektif profesional</h2>
                </div>
                <div class="card-konsultasi">
                <div class="konsultasi-desc">
                    <h4>Pilih Jenis Layanan & Topik Konseling</h4> 
                    <hr></hr>
                    <ul>
                        <li><i class="fa-solid fa-check"></i>  Katakan masalahmu dan Selesaikan</li>
                        <li><i class="fa-solid fa-check"></i>  Lebih ahli dan berpengalaman</li>
                    </ul> 
                    <div className="konsultasi-select">
                        <h4>Mau diskusi tentang apa?</h4>
                        <form>
                            <select id="konsult-list" name="konsult-list">
                                <option value="kendali_emosi">Kendali Emosi</option>
                                <option value="percintaan">Percintaan</option>
                                <option value="pekerjaan">Pekerjaan</option>
                                <option value="keluarga">Keluarga</option>
                                <option value="sosial">Sosial</option>
                                <option value="lain-lainya">Lain-lainnya</option>
                            </select>
                            <a href="https://meet.google.com/gut-vhtj-cix" type="submit" className="btn-konsultasi">
                                 Mulai Konsultasi
                            </a>
                        </form>  
                    </div>
                </div>
                </div>

            </div>
        </>
    )
}

export default Konsultasi;                                                                                                                         