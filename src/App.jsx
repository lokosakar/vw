import React from 'react';
import './App.css'; 

const ImageDisplay = () => {
  return (
    <>    
    <div className="latar-belakang">
      <div className="kotak-rezeki1 pc">
        <div className='kotak-kiri'>
          <p className="judul">Kecerdasan Visual</p>
          <p className='judul2'>Lihat dunia<br/> lensa yang baru.</p>
          <p className='text'>Gunakan <span>kecerdasan visual</span><br/>
            melalui Kontrol Kamera untuk<br/>
            langsung mempelajari tentang<br/>
            semua hal yang Anda liat.<br/>
            Cukup <span>arahkan iPhone 16 Pro<br/>
            Anda untuk menemukan lebih</span><br/>
            atau berinteraksi dengan<br/>
            sesuatu di depan Anda. Cari<br/>
            tahu di mana tempat membeli<br/>
            barang baru yang Anda lihat,<br/>
            identifikasikan tanaman dan hewan, dan<br/>
            banyak lagi.
          </p>
        </div>
        <div className="kotak-kanan">
          <img src="rusuh.png" alt="" />
        </div>
      </div>
      <div className="kotak-rezeki2 mb">
        <div className='kotak-kiri'>
          <p className="judul">Kecerdasan Visual</p>
          <p className='judul2'>Lihat dunia<br/> lensa yang baru.</p>
          <p className='text'>Gunakan <span>kecerdasan visual</span><br/>
            melalui Kontrol Kamera untuk<br/>
            langsung mempelajari tentang<br/>
            semua hal yang Anda liat.<br/>
            Cukup <span>arahkan iPhone 16 Pro<br/>
            Anda untuk menemukan lebih</span><br/>
            atau berinteraksi dengan<br/>
            sesuatu di depan Anda. Cari<br/>
            tahu di mana tempat membeli<br/>
            barang baru yang Anda lihat,<br/>
            identifikasikan tanaman dan hewan, dan<br/>
            banyak lagi.
          </p>
        </div>
        <div className="kotak-kanan2">
          <img src="rusuh.png" alt="" />
        </div>
      </div>
   
    </div>
    </>
  );
};

export default ImageDisplay;