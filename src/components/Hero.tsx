import React from 'react'

const Hero: React.FC = () => {

  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero-video">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          poster="/images/steel-industry1.jpg"
          className="hero-video-element"
        >
          <source src="/images/Kaynakçı_Videosu_İsteği_ve_Oluşturulması.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>TIMUR METAL İLE<br />SANAYİDE GÜÇ</h1>
            <p>Sanayi boruları, profiller, sandviç paneller ve sac gruplarında geniş stok, hızlı teslimat ve uzman destek.</p>
            
            <div className="hero-badges">
              <div className="badge">Geniş Stok</div>
              <div className="badge">Hızlı Teslimat</div>
              <div className="badge">Uygun Fiyat</div>
            </div>

            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">ÜRÜNLERİ İNCELE</a>
              <a href="#contact" className="btn btn-outline">İLETİŞİME GEÇ</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero