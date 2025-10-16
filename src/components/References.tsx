import React from 'react'

const References: React.FC = () => {
  const references = [
    {
      id: 1,
      name: 'Yılmaz İnşaat',
      logo: '/images/steel-industry1.jpg',
      project: 'Endüstriyel Tesis Projesi',
      description: '15.000 m² kapalı alan, çelik konstrüksiyon ve sandviç panel uygulaması',
      year: '2023'
    },
    {
      id: 2,
      name: 'Demir Yapı',
      logo: '/images/trapez-sac-198.jpg',
      project: 'Fabrika Çatı Sistemi',
      description: '8.500 m² trapez sac çatı kaplama ve yalıtım uygulaması',
      year: '2023'
    },
    {
      id: 3,
      name: 'Kaya Metal',
      logo: '/images/cati-sandvic-panel-timas.jpg',
      project: 'Depo Kompleksi',
      description: '12.000 m² depo yapısı, galvanizli saç ve profil uygulaması',
      year: '2022'
    },
    {
      id: 4,
      name: 'Özkan İnşaat',
      logo: '/images/BHK-30x40x2-5-mm-Siyah-Demir-Kutu-Profil-2-Metre-resim-762.jpg',
      project: 'Ofis Kompleksi',
      description: '6.500 m² ofis binası, alüminyum cephe ve çatı sistemi',
      year: '2022'
    },
    {
      id: 5,
      name: 'Metal Pro',
      logo: '/images/soguk-haddelenmis-rulo-ve-paket-sac-dkp-2890.jpg',
      project: 'Endüstriyel Boru Hattı',
      description: '2.5 km çelik boru hattı, yüksek basınç sistem uygulaması',
      year: '2023'
    },
    {
      id: 6,
      name: 'Çelik Grup',
      logo: '/images/panel-cit-sistemleri-ar-spor-007a8a31.jpg',
      project: 'Hangar Yapısı',
      description: '3.000 m² hangar yapısı, çelik konstrüksiyon ve panel uygulaması',
      year: '2021'
    }
  ]

  return (
    <section className="references">
      <div className="container">
        <div className="section-title">
          <h2>REFERANSLARIMIZ</h2>
          <p>Güvenilir müşterilerimizle gerçekleştirdiğimiz başarılı projeler</p>
        </div>

        <div className="references-grid">
          {references.map((reference) => (
            <div key={reference.id} className="reference-card">
              <div className="reference-content">
                <h3>{reference.name}</h3>
                <h4>{reference.project}</h4>
                <p>{reference.description}</p>
                <div className="reference-year">{reference.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default References