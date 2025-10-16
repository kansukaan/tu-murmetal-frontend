import React from 'react'

const Statistics: React.FC = () => {
  const stats = [
    {
      number: '30+',
      description: 'Yıllık Deneyim',
      color: '#4A5568'
    },
    {
      number: '500+',
      description: 'Tamamlanan Proje',
      color: '#4A5568'
    },
    {
      number: '98%',
      description: 'Müşteri Memnuniyeti',
      color: '#4A5568'
    },
    {
      number: '24/7',
      description: 'Teknik Destek',
      color: '#4A5568'
    }
  ]

  return (
    <section className="statistics-section">
      <div className="container">
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-circle">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-dot"></div>
              </div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
