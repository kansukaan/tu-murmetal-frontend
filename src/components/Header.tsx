import React, { useState, useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'

// Kategoriler verisi - gruplara ayrılmış
const categoryGroups = [
  {
    title: 'Borular',
    categories: [
      { title: 'Sanayi Boruları', color: '#4A90E2' },
      { title: 'Çelik Çekme Dikişsiz Borular', color: '#7B68EE' },
      { title: 'Kazan ve Yüksek Basınç Boruları', color: '#FF6B6B' },
      { title: 'Spiral Boru', color: '#4ECDC4' }
    ]
  },
  {
    title: 'Sac ve Levha',
    categories: [
      { title: 'Galvanizli Rulo Saç', color: '#96CEB4' },
      { title: 'Boyalı Rulo Saç', color: '#FFEAA7' },
      { title: 'Boyalı Levha Saçlar', color: '#DDA0DD' },
      { title: 'DKP Rulo Saç', color: '#98D8C8' },
      { title: 'Trapez Saç', color: '#85C1E9' }
    ]
  },
  {
    title: 'Profiller',
    categories: [
      { title: 'Kare ve Dikdörtgen Profiller', color: '#F7DC6F' },
      { title: 'Panel Çit Sistemleri', color: '#45B7D1' }
    ]
  },
  {
    title: 'Paneller',
    categories: [
      { title: 'Sandviç Paneller', color: '#BB8FCE' },
      { title: 'Taş Yünü Panel', color: '#F8C471' },
      { title: 'CTP Şeffaf Trapez', color: '#82E0AA' },
      { title: 'Sandviç Çatı Panelleri', color: '#F1948A' },
      { title: 'Sandviç Cephe Panelleri', color: '#85C1E9' },
      { title: 'EPS Dolgulu Paneller', color: '#D7BDE2' },
      { title: 'Alüminyum Paneller', color: '#A9DFBF' },
      { title: 'Şeffaf Sandviç Panel', color: '#F9E79F' }
    ]
  }
]

type Props = {
  onSearch?: (q: string) => void
}

const Header: React.FC<Props> = ({ onSearch }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoriesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <span>+90 532 069 71 84</span>
              <span>08:30-18:00</span>
              <span>Emekevler, Sapanca Yolu Cd. No:57/1, 41180 Kartepe/Kocaeli</span>
            </div>
            <div className="top-bar-right">
              <div className="social-icons">
                <a href="#" aria-label="Facebook" className="social-icon facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="social-icon instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="social-icon youtube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <span>🇹🇷</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}>
              <img src="/images/logo.png" alt="Timur Metal Logo" className="logo-image" />
            </a>
            
            {/* Desktop Navigation */}
            <nav className="nav">
              <a href="#products">Ürünler</a>
              <div className="nav-dropdown" ref={dropdownRef}>
                <a href="#categories" onClick={(e) => { e.preventDefault(); setCategoriesOpen(!categoriesOpen); }}>
                  Kategoriler
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="dropdown-arrow">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </a>
                {categoriesOpen && (
                  <div className="dropdown-menu">
                    {categoryGroups.map((group, groupIndex) => (
                      <div key={groupIndex} className="dropdown-group">
                        <div 
                          className="group-header"
                          onClick={() => setExpandedGroup(expandedGroup === group.title ? null : group.title)}
                        >
                          <span className="group-title">{group.title}</span>
                          <span className={`group-arrow ${expandedGroup === group.title ? 'expanded' : ''}`}>
                            ▼
                          </span>
                        </div>
                        {expandedGroup === group.title && (
                          <div className="group-categories">
                            {group.categories.map((category, categoryIndex) => (
                              <a 
                                key={categoryIndex}
                                href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`} 
                                className="category-link"
                              >
                                <span className="category-color" style={{ backgroundColor: category.color }}></span>
                                <span className="category-title">{category.title}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <a href="#contact-info">İletişim</a>
              <a href="#contact" className="btn btn-primary btn-small">Bilgi Al</a>
              <a href="/images/KATOLOK ÇALIŞMASI - İSMAİL 41.pdf" download="Timur-Metal-Katalog.pdf">Katalog</a>
            </nav>

            {/* Search Bar */}
            <div className="search-bar">
              <input type="text" placeholder="Ürün ara..." onChange={(e) => onSearch?.(e.target.value)} />
              <span className="search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </span>
            </div>

            {/* Header Actions */}
            <div className="header-actions">
              <ThemeToggle />
              {/* Mobile Hamburger - ThemeToggle yanına taşındı */}
              <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü">
                ☰
              </div>
            </div>

          </div>
      {mobileOpen && (
        <>
          <div
            className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(false)}
          />
          <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ color: 'var(--text-primary)', margin: 0 }}>Menü</h3>
              <button 
                onClick={() => setMobileOpen(false)}
                style={{ 
                  background: 'var(--bg-secondary)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '8px',
                  width: '40px',
                  height: '40px',
                  fontSize: '20px', 
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Menüyü kapat"
              >
                ×
              </button>
            </div>

            <div className="mobile-menu-list">
              <a href="#products" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>
                <span className="menu-icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                </span>
                <span className="menu-text">Ürünler</span>
              </a>
              <a href="#categories" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>
                <span className="menu-icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h18"/>
                    <path d="M3 12h18"/>
                    <path d="M3 17h18"/>
                  </svg>
                </span>
                <span className="menu-text">Kategoriler</span>
              </a>
              <a href="#contact-info" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>
                <span className="menu-icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.57 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.72-1.14a2 2 0 0 1 2.11-.45c.76.27 1.55.45 2.36.57A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <span className="menu-text">İletişim</span>
              </a>
              <a href="#contact" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>
                <span className="menu-icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/>
                  </svg>
                </span>
                <span className="menu-text">Bilgi Al</span>
              </a>
              <a href="/images/KATOLOK ÇALIŞMASI - İSMAİL 41.pdf" download="Timur-Metal-Katalog.pdf" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>
                <span className="menu-icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6"/>
                  </svg>
                </span>
                <span className="menu-text">Katalog</span>
              </a>
            </div>
          </aside>
        </>
      )}
        </div>
      </div>
    </header>
  )
}

export default Header
