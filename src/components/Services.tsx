import React, { useEffect, useRef } from 'react'

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
      description: 'Beyaz, bordo ve isteğe bağlı renk seçenekleri mevcuttur.',
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

  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const videos = Array.from(container.querySelectorAll('video'))
    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const vid = entry.target as HTMLVideoElement
        if (entry.isIntersecting) {
          // Start loading source lazily when in view
          const source = vid.querySelector('source') as HTMLSourceElement | null
          if (source && source.dataset.src && source.src !== source.dataset.src) {
            source.src = source.dataset.src
            vid.load()
          }
          vid.play().catch(() => {})
        } else {
          vid.pause()
        }
      })
    }

    const observer = new IntersectionObserver(onIntersect, { rootMargin: '200px 0px', threshold: 0.1 })
    videos.forEach((v) => observer.observe(v))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>HİZMETLERİMİZ</h2>
        </div>
        
        <div className="services-grid" ref={containerRef}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-video">
                <video 
                  muted 
                  loop 
                  playsInline
                  preload="none"
                  poster="/images/steel-industry1.jpg"
                  className="service-video-element"
                >
                  <source data-src={service.video} type="video/mp4" />
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
