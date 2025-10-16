import React, { useRef } from 'react'

type Props = {
  onSelect: (category: string) => void
}

const Categories: React.FC<Props> = ({ onSelect }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  const allCategories = [
    { title: 'Sanayi Boruları', color: '#4A90E2' },
    { title: 'Çelik Çekme Dikişsiz Borular', color: '#7B68EE' },
    { title: 'Kazan ve Yüksek Basınç Boruları', color: '#FF6B6B' },
    { title: 'Spiral Boru', color: '#4ECDC4' },
    { title: 'Panel Çit Sistemleri', color: '#45B7D1' },
    { title: 'Galvanizli Rulo Saç', color: '#96CEB4' },
    { title: 'Boyalı Rulo Saç', color: '#FFEAA7' },
    { title: 'Boyalı Levha Saçlar', color: '#DDA0DD' },
    { title: 'DKP Rulo Saç', color: '#98D8C8' },
    { title: 'Kare ve Dikdörtgen Profiller', color: '#F7DC6F' },
    { title: 'Sandviç Paneller', color: '#BB8FCE' },
    { title: 'Trapez Saç', color: '#85C1E9' },
    { title: 'Taş Yünü Panel', color: '#F8C471' },
    { title: 'CTP Şeffaf Trapez', color: '#82E0AA' },
    { title: 'Sandviç Çatı Panelleri', color: '#F1948A' },
    { title: 'Sandviç Cephe Panelleri', color: '#85C1E9' },
    { title: 'EPS Dolgulu Paneller', color: '#D7BDE2' },
    { title: 'Alüminyum Paneller', color: '#A9DFBF' },
    { title: 'Şeffaf Sandviç Panel', color: '#F9E79F' }
  ]

  return (
    <section className="categories-stories" id="categories">
      <div className="container">
        <div className="section-title">
          <h2>Kategoriler</h2>
          <p>Ürün kategorilerimizi keşfedin</p>
        </div>
        <div className="categories-wrapper">
          <button className="scroll-arrow scroll-left" onClick={scrollLeft} aria-label="Sol">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          
          <div className="stories-container" ref={scrollContainerRef}>
            {allCategories.map((category, index) => (
              <div key={index} className="story-item" onClick={() => onSelect(category.title)}>
                <div className="story-circle" style={{ backgroundColor: category.color }}>
                  <span className="story-icon">•</span>
                </div>
                <span className="story-title">{category.title}</span>
              </div>
            ))}
          </div>
          
          <button className="scroll-arrow scroll-right" onClick={scrollRight} aria-label="Sağ">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Categories