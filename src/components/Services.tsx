import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
      icon: '',
      title: 'Sanayi Borular',
      description: '',
      features: [],
      video: '/images/Üretimden_Çıkmış_Boru_Videosu.mp4'
    },
    {
      icon: '',
      title: 'Sandviç Panel',
      description: '',
      features: [],
      video: '/images/Gerçekçi_Sandviç_Panel_Videosu.mp4'
    },
    {
      icon: '',
      title: 'Profiller',
      description: '',
      features: [],
      video: '/images/Düz_Kare_Metal_Profil_Videosu_Hazır.mp4'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>HİZMETLERİMİZ</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-video">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="service-video-element"
                >
                  <source src={service.video} type="video/mp4" />
                </video>
                <div className="service-video-overlay"></div>
              </div>
              <div className="service-content">
                <div className="service-icon">
                  <span className="service-emoji">{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
