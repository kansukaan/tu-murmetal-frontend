import React, { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    company: 'Yılmaz İnşaat',
    rating: 5,
    text: 'Timur Metal ile çalışmak harika bir deneyim. Kaliteli ürünler ve hızlı teslimat. Kesinlikle tavsiye ederim.',
    avatar: '👨‍💼'
  },
  {
    id: 2,
    name: 'Fatma Demir',
    company: 'Demir Yapı',
    rating: 5,
    text: 'Profesyonel hizmet ve uygun fiyatlar. Projelerimizde her zaman ilk tercihimiz.',
    avatar: '👩‍💼'
  },
  {
    id: 3,
    name: 'Mehmet Kaya',
    company: 'Kaya Metal',
    rating: 4,
    text: 'Geniş ürün yelpazesi ve kaliteli malzemeler. Müşteri hizmetleri çok iyi.',
    avatar: '👨‍🔧'
  },
  {
    id: 4,
    name: 'Ayşe Özkan',
    company: 'Özkan İnşaat',
    rating: 5,
    text: '30 yıllık deneyimleri gerçekten hissediliyor. Her projede yanımızda oldular.',
    avatar: '👩‍🏗️'
  }
]

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>MÜŞTERİ YORUMLARI</h2>
          <p>Memnun müşterilerimizin deneyimleri</p>
        </div>

        <div className="testimonial-card glassmorphism">
          <div className="testimonial-content">
            <div className="testimonial-avatar">
              {currentTestimonial.avatar}
            </div>
            <div className="testimonial-text">
              <p>"{currentTestimonial.text}"</p>
              <div className="testimonial-rating">
                {'★'.repeat(currentTestimonial.rating)}
                {'☆'.repeat(5 - currentTestimonial.rating)}
              </div>
              <div className="testimonial-author">
                <h4>{currentTestimonial.name}</h4>
                <span>{currentTestimonial.company}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
