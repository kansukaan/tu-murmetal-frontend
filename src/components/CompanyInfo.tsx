import React from 'react'

const CompanyInfo: React.FC = () => {
  return (
    <section className="company-info" id="about">
      <div className="container">
        {/* GÜÇTEN İLHAM ALANLAR Section */}
        <div className="info-grid" style={{ marginBottom: '80px' }}>
          <div className="info-content">
            <h2>GÜÇTEN İLHAM ALANLAR</h2>
            <p>30 yıllık deneyimimizle metal imalat sektöründe güvenilir çözümler sunuyoruz. Sanayi borularından çatı panellerine kadar geniş ürün yelpazemizle projelerinize değer katıyoruz.</p>
            <p>Kaliteli malzeme, uzman ekibimiz ve modern üretim tesislerimizle müşteri memnuniyetini ön planda tutuyoruz.</p>
            <a href="#contact" className="btn btn-primary">HEMEN İNCELE</a>
          </div>
          <div className="info-image">
            <div style={{
              width: '100%',
              height: '300px',
              backgroundImage: 'url(/images/steel-industry1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(113, 128, 150, 0.1), rgba(74, 85, 104, 0.1))'
              }}></div>
            </div>
          </div>
        </div>

        {/* TEKNOLOJİ VE İNOVASYON Section */}
        <div className="info-grid" style={{ marginBottom: '80px' }}>
          <div className="info-image">
            <div style={{
              width: '100%',
              height: '300px',
              backgroundImage: 'url(/images/tekno.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'var(--accent)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                zIndex: 2
              }}>
                MODERN TEKNOLOJİ
              </div>
            </div>
          </div>
          <div className="info-content">
            <h2>TEKNOLOJİ VE İNOVASYON</h2>
            <p>En son teknoloji ile donatılmış üretim tesislerimizde, CNC makineler ve otomatik sistemlerle yüksek kaliteli ürünler üretiyoruz.</p>
            <div className="technology-grid">
              <div className="tech-item">
                <div className="tech-icon">CNC</div>
                <span>CNC Makineler</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">AUTO</div>
                <span>Otomatik Sistemler</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">QC</div>
                <span>Kalite Kontrol</span>
              </div>
            </div>
            <p>Dijital dönüşüm ve sürdürülebilir üretim anlayışımızla geleceğin metal imalatını şekillendiriyoruz.</p>
            <a href="#contact" className="btn btn-primary">TEKNOLOJİMİZİ KEŞFET</a>
          </div>
        </div>

        {/* DENEYİM+ Section */}
        <div className="info-grid">
          <div className="info-content">
            <h2>DENEYİM+</h2>
            <p>Yaratıcı ol, duyur, paylaş. Metal imalat sektöründe yenilikçi çözümlerle müşterilerimizin ihtiyaçlarını karşılıyoruz.</p>
            <p>Uzman ekibimiz ve modern teknolojimizle projelerinizi hayata geçiriyoruz.</p>
            <a href="#contact" className="btn btn-primary">Bilgi Al</a>
          </div>
          <div className="info-image">
            <div style={{
              width: '100%',
              height: '300px',
              backgroundImage: 'url(/images/tekiz-sandvic-panel.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(113, 128, 150, 0.1), rgba(74, 85, 104, 0.1))'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo
