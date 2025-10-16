import React, { useMemo, useState } from 'react'
import AdvancedFilter from './AdvancedFilter'

type Props = {
  selectedCategory?: string
  searchQuery?: string
}

const FeaturedProducts: React.FC<Props> = ({ selectedCategory, searchQuery }) => {
  const [activeProduct, setActiveProduct] = useState<typeof products[number] | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('')
  const [filters, setFilters] = useState({
    category: '',
    sortBy: 'name' as 'name' | 'rating'
  })

  const categories = [
    { 
      id: 'borular', 
      name: 'Borular', 
      description: 'Endüstriyel boru sistemleri',
      subcategories: [
        { id: 'sanayi-borulari', name: 'Sanayi Boruları' },
        { id: 'celik-borular', name: 'Çelik Çekme Dikişsiz Borular' },
        { id: 'kazan-borular', name: 'Kazan ve Yüksek Basınç Boruları' },
        { id: 'spiral-boru', name: 'Spiral Boru' }
      ]
    },
    { 
      id: 'saclar', 
      name: 'Saclar', 
      description: 'Metal sac ürünleri',
      subcategories: [
        { id: 'galvanizli-sac', name: 'Galvanizli Rulo Saç' },
        { id: 'boyali-sac', name: 'Boyalı Rulo Saç' },
        { id: 'boyali-levha', name: 'Boyalı Levha Saçlar' },
        { id: 'dkp-sac', name: 'DKP Rulo Saç' },
        { id: 'trapez-sac', name: 'Trapez Saç' }
      ]
    },
    { 
      id: 'paneller', 
      name: 'Paneller', 
      description: 'Yalıtım ve kaplama panelleri',
      subcategories: [
        { id: 'sandvic-panel', name: 'Sandviç Paneller' },
        { id: 'sandvic-cati', name: 'Sandviç Çatı Panelleri' },
        { id: 'sandvic-cephe', name: 'Sandviç Cephe Panelleri' },
        { id: 'eps-panel', name: 'EPS Dolgulu Paneller' },
        { id: 'aluminyum-panel', name: 'Alüminyum Paneller' },
        { id: 'seffaf-panel', name: 'Şeffaf Sandviç Panel' },
        { id: 'tas-yunu', name: 'Taş Yünü Panel' }
      ]
    },
    { 
      id: 'profiller', 
      name: 'Profiller', 
      description: 'Metal profil ürünleri',
      subcategories: [
        { id: 'kare-profil', name: 'Kare ve Dikdörtgen Profiller' }
      ]
    },
    { 
      id: 'cit-sistemleri', 
      name: 'Çit Sistemleri', 
      description: 'Güvenlik ve çit sistemleri',
      subcategories: [
        { id: 'panel-cit', name: 'Panel Çit Sistemleri' }
      ]
    },
    { 
      id: 'ozel-malzemeler', 
      name: 'Özel Malzemeler', 
      description: 'Özel amaçlı malzemeler',
      subcategories: [
        { id: 'ctp-trapez', name: 'CTP Şeffaf Trapez' }
      ]
    }
  ]
  const products = [
    {
      id: 1,
      badge: 'EN 10216',
      title: 'Çelik Çekme Dikişsiz Boru 6"',
      description: 'Yüksek basınç dayanımı',
      rating: 4.8,
      image: '/images/steel-industry1.jpg',
      category: 'Çelik Çekme Dikişsiz Borular'
    },
    {
      id: 2,
      badge: 'DX51D+Z',
      title: 'Galvanizli Rulo Saç 2mm',
      description: 'Korozyon dirençli',
      rating: 4.9,
      image: '/images/egem_0006_Boy-kesilmiş-galvenizli-boyali-levha-sac.jpg',
      category: 'Galvanizli Rulo Saç'
    },
    {
      id: 3,
      badge: 'EPS Dolgulu',
      title: 'Sandviç Panel 100mm',
      description: 'Isı ve ses yalıtımı',
      rating: 4.7,
      image: '/images/cati-sandvic-panel-timas.jpg',
      category: 'Sandviç Paneller'
    },
    {
      id: 4,
      badge: 'EN AW-6063',
      title: 'Alüminyum Profil 40x40',
      description: 'Hafif ve dayanıklı',
      rating: 4.9,
      image: '/images/BHK-30x40x2-5-mm-Siyah-Demir-Kutu-Profil-2-Metre-resim-762.jpg',
      category: 'Kare ve Dikdörtgen Profiller'
    },
    {
      id: 5,
      badge: 'DKP',
      title: 'DKP Rulo Saç 1.5mm',
      description: 'Soğuk haddelenmiş',
      rating: 4.8,
      image: '/images/soguk-haddelenmis-rulo-ve-paket-sac-dkp-2890.jpg',
      category: 'DKP Rulo Saç'
    },
    {
      id: 6,
      badge: 'Panel Çit',
      title: 'Panel Çit Sistemi',
      description: 'Güvenlik sistemi',
      rating: 4.6,
      image: '/images/panel-cit-sistemleri-ar-spor-007a8a31.jpg',
      category: 'Panel Çit Sistemleri'
    },
    {
      id: 7,
      badge: 'Trapez',
      title: 'Trapez Saç 0.5mm',
      description: 'Çatı kaplama',
      rating: 4.7,
      image: '/images/trapez-sac-198.jpg',
      category: 'Trapez Saç'
    },
    {
      id: 8,
      badge: 'Tekiz',
      title: 'Tekiz Sandviç Panel',
      description: 'Isı yalıtımı',
      rating: 4.5,
      image: '/images/tekiz-sandvic-panel.jpg',
      category: 'Sandviç Paneller'
    }
  ]

  const filteredProducts = useMemo(() => {
    let result = products
    
    // Apply search filter
    if (searchQuery && searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase()
      result = result.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    }
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (filters.category) {
      result = result.filter((p) => p.category === filters.category)
    }
    
    // Apply sorting
    result.sort((a, b) => {
      switch (filters.sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.title.localeCompare(b.title)
      }
    })
    
    return result
  }, [selectedCategory, searchQuery, filters])

  const productCategories = useMemo(() => {
    return [...new Set(products.map(p => p.category))]
  }, [])

  return (
    <section className="featured-products" id="products">
      <div className="container">
        <div className="section-title">
          <h2>ÜRÜNLERİMİZ</h2>
          <p>Metal imalat ürünlerimizi kategorilere göre keşfedin</p>
        </div>

        <div className="products-categories-layout">
          {/* Kategoriler Tablosu */}
          <div className="categories-table">
            <h3>Kategoriler</h3>
            <div className="categories-grid">
              {categories.map((category) => (
                <div key={category.id} className="category-group">
                  <div 
                    className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(activeCategory === category.id ? '' : category.id)}
                  >
                    <div className="category-icon">
                      <div className="category-initial">{category.name.charAt(0)}</div>
                    </div>
                    <div className="category-info">
                      <h4>{category.name}</h4>
                      <p>{category.description}</p>
                    </div>
                    <div className="category-arrow">
                      {activeCategory === category.id ? '▲' : '▼'}
                    </div>
                  </div>
                  
                  {activeCategory === category.id && (
                    <div className="subcategories">
                      {category.subcategories.map((subcategory) => (
                        <div 
                          key={subcategory.id} 
                          className="subcategory-item"
                          onClick={() => {
                            setFilters({ ...filters, category: subcategory.name });
                            setActiveCategory('');
                          }}
                        >
                          <span className="subcategory-name">{subcategory.name}</span>
                          <span className="subcategory-arrow">→</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Ürünler */}
          <div className="products-section">
            <AdvancedFilter 
              onFilterChange={(newFilters) => setFilters(newFilters)}
              categories={productCategories}
            />

            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card" onClick={() => setActiveProduct(product)} style={{ cursor: 'pointer' }}>
                  <div className="product-image">
                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px 15px 0 0' }} />
                  </div>
                  <div className="product-info">
                    <div className="product-badge">{product.badge}</div>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-rating">
                      <div className="stars">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                      </div>
                      <span className="rating-text">({product.rating})</span>
                    </div>
                    <button className="add-to-cart" onClick={(e) => { e.stopPropagation(); window.location.href = '#contact'; }}>Bilgi Al</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {activeProduct && (
          <div className="modal-backdrop" onClick={() => setActiveProduct(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title">{activeProduct.title}</div>
                <button className="modal-close" onClick={() => setActiveProduct(null)}>×</button>
              </div>
              <div className="modal-body">
                <div className="modal-product-content">
                  <div className="modal-product-image">
                    <img src={activeProduct.image} alt={activeProduct.title} />
                  </div>
                  <div className="modal-product-info">
                    <div className="product-badge" style={{ marginBottom: 10 }}>{activeProduct.badge}</div>
                    <h3 style={{ marginBottom: 10, color: 'var(--text-primary)' }}>{activeProduct.title}</h3>
                    <p style={{ marginBottom: 10, color: 'var(--text-secondary)' }}>{activeProduct.description}</p>
                    <p style={{ marginBottom: 20, color: 'var(--text-secondary)' }}>
                      <strong>Kategori:</strong> {activeProduct.category}
                    </p>
                    <div className="modal-actions">
                      <button className="btn btn-secondary" onClick={() => setActiveProduct(null)}>Kapat</button>
                      <button className="btn btn-primary" onClick={() => { setActiveProduct(null); window.location.href = '#contact'; }}>Bilgi Al</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedProducts
