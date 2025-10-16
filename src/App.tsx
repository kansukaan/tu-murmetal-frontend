import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import FeaturedProducts from './components/FeaturedProducts'
import Statistics from './components/Statistics'
import CompanyInfo from './components/CompanyInfo'
import References from './components/References.tsx'
import Footer from './components/Footer'
import AdminPanel from './components/AdminPanel'
import { useState } from 'react'

function App() {
  const [selectedCategory] = useState<string | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showAdmin, setShowAdmin] = useState(false)

  // Check if admin panel should be shown
  const isAdminRoute = window.location.pathname === '/admin'

  if (isAdminRoute) {
    return <AdminPanel />
  }

  return (
    <div className="App">
      <Header onSearch={setSearchQuery} />
      <Hero />
      <Services />
      <FeaturedProducts selectedCategory={selectedCategory} searchQuery={searchQuery} />
      <Statistics />
      <CompanyInfo />
      <References />
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-title">
            <h2>BİZİMLE İLETİŞİME GEÇİN</h2>
            <p>Projeleriniz için en uygun çözümleri sunmak için buradayız</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-form">
              <h3>Bilgi Alın</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Talebiniz alındı. En kısa sürede sizi arayacağız.'); }}>
                <div className="form-row">
                  <input required placeholder="Ad Soyad" />
                  <input required type="tel" placeholder="Telefon" />
                </div>
                <input required type="email" placeholder="E-posta" />
                <select required>
                  <option value="">Ürün Kategorisi Seçin</option>
                  <option value="sanayi-borulari">Sanayi Boruları</option>
                  <option value="celik-borular">Çelik Çekme Dikişsiz Borular</option>
                  <option value="kazan-borular">Kazan ve Yüksek Basınç Boruları</option>
                  <option value="spiral-boru">Spiral Boru</option>
                  <option value="panel-cit">Panel Çit Sistemleri</option>
                  <option value="galvanizli-sac">Galvanizli Rulo Saç</option>
                  <option value="boyali-sac">Boyalı Rulo Saç</option>
                  <option value="boyali-levha">Boyalı Levha Saçlar</option>
                  <option value="dkp-sac">DKP Rulo Saç</option>
                  <option value="kare-profil">Kare ve Dikdörtgen Profiller</option>
                  <option value="sandvic-panel">Sandviç Paneller</option>
                  <option value="trapez-sac">Trapez Saç</option>
                  <option value="tas-yunu">Taş Yünü Panel</option>
                  <option value="ctp-trapez">CTP Şeffaf Trapez</option>
                  <option value="sandvic-cati">Sandviç Çatı Panelleri</option>
                  <option value="sandvic-cephe">Sandviç Cephe Panelleri</option>
                  <option value="eps-panel">EPS Dolgulu Paneller</option>
                  <option value="aluminyum-panel">Alüminyum Paneller</option>
                  <option value="seffaf-panel">Şeffaf Sandviç Panel</option>
                </select>
                <textarea required placeholder="Proje detaylarınızı yazın..." rows={4}></textarea>
                <button className="btn btn-primary" type="submit">Bilgi Al</button>
              </form>
            </div>
            
            <div className="contact-map">
              <h3>Konumumuz</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1234567890!2d28.1234567890!3d41.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA3JzI0LjQiTiAyOMKwMDcnMjQuNCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Timur Metal Konumu"
                ></iframe>
                <div className="map-overlay">
                  <a 
                    href="https://maps.app.goo.gl/1sccqDRuGuby8FBv5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    <span className="map-link-icon">🗺️</span>
                    <span>Haritada Aç</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-bottom" id="contact-info">
            <div className="contact-info-small">
              <div className="contact-card-small">
                <div className="contact-icon-small">📞</div>
                <div className="contact-details">
                  <h4>Telefon</h4>
                  <p>+90 532 069 71 84</p>
                  <span>08:30 - 18:00</span>
                </div>
              </div>
              
              <div className="contact-card-small">
                <div className="contact-icon-small">💬</div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <p>Hızlı mesaj</p>
                  <span>Anında yanıt</span>
                </div>
              </div>
              
              <div className="contact-card-small">
                <div className="contact-icon-small">📧</div>
                <div className="contact-details">
                  <h4>E-posta</h4>
                  <p>info@timurmetal.com</p>
                  <span>7/24 yanıt</span>
                </div>
              </div>
              
              <div className="contact-card-small">
                <div className="contact-icon-small">📍</div>
                <div className="contact-details">
                  <h4>Adres</h4>
                  <p>İstanbul, Türkiye</p>
                  <span>Detaylı adres için arayın</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <a className="floating-phone" href="tel:+905320697184" aria-label="Telefon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>
      <a className="floating-whatsapp" href="https://wa.me/905555555555" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </div>
  )
}


export default App
