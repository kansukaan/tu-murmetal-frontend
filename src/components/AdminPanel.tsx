import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

interface Product {
  id: number
  title: string
  description: string
  category: string
  badge: string
  rating: number
  image: string
}

interface Category {
  id: number
  name: string
  description: string
  icon: string
  color: string
}

const AdminPanel: React.FC = () => {
  const { isDark } = useTheme()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const [activeTab, setActiveTab] = useState<'products' | 'categories'>('products')
  
  // Products state
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [showProductForm, setShowProductForm] = useState(false)
  const [showCategoryForm, setShowCategoryForm] = useState(false)
  const [productForm, setProductForm] = useState({
    title: '',
    description: '',
    category: '',
    badge: '',
    rating: 0,
    image: ''
  })
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    description: '',
    icon: '📦',
    color: '#4A90E2'
  })
  const [uploading, setUploading] = useState(false)

  const API_BASE = 'http://localhost:8000/api'

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch(`${API_BASE}/admin/check`, {
        credentials: 'include'
      })
      if (response.ok) {
        const data = await response.json()
        setIsAuthenticated(true)
        setUsername(data.username)
        loadData()
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`${API_BASE}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(loginData)
      })
      
      if (response.ok) {
        const data = await response.json()
        setIsAuthenticated(true)
        setUsername(data.username)
        loadData()
      } else {
        alert('Giriş başarısız!')
      }
    } catch (error) {
      console.error('Login failed:', error)
      alert('Giriş başarısız!')
    }
  }

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE}/admin/logout`, {
        method: 'POST',
        credentials: 'include'
      })
      setIsAuthenticated(false)
      setUsername('')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const loadData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        fetch(`${API_BASE}/products`),
        fetch(`${API_BASE}/categories`)
      ])
      
      if (productsRes.ok) {
        const productsData = await productsRes.json()
        setProducts(productsData.data || productsData)
      }
      
      if (categoriesRes.ok) {
        const categoriesData = await categoriesRes.json()
        setCategories(categoriesData.data || categoriesData)
      }
    } catch (error) {
      console.error('Failed to load data:', error)
    }
  }

  const handleImageUpload = async (file: File) => {
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('image', file)
      
      const response = await fetch(`${API_BASE}/products/upload`, {
        method: 'POST',
        credentials: 'include',
        body: formData
      })
      
      if (response.ok) {
        const data = await response.json()
        setProductForm({ ...productForm, image: data.data.path })
        return data.data.path
      } else {
        alert('Fotoğraf yükleme başarısız!')
      }
    } catch (error) {
      console.error('Upload failed:', error)
      alert('Fotoğraf yükleme başarısız!')
    } finally {
      setUploading(false)
    }
  }

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const url = editingProduct 
        ? `${API_BASE}/products/${editingProduct.id}`
        : `${API_BASE}/products`
      
      const method = editingProduct ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(productForm)
      })
      
      if (response.ok) {
        loadData()
        setShowProductForm(false)
        setEditingProduct(null)
        setProductForm({ title: '', description: '', category: '', badge: '', rating: 0, image: '' })
      } else {
        alert('İşlem başarısız!')
      }
    } catch (error) {
      console.error('Product operation failed:', error)
      alert('İşlem başarısız!')
    }
  }

  const handleCategorySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const url = editingCategory 
        ? `${API_BASE}/categories/${editingCategory.id}`
        : `${API_BASE}/categories`
      
      const method = editingCategory ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(categoryForm)
      })
      
      if (response.ok) {
        loadData()
        setShowCategoryForm(false)
        setEditingCategory(null)
        setCategoryForm({ name: '', description: '', icon: '📦', color: '#4A90E2' })
      } else {
        alert('İşlem başarısız!')
      }
    } catch (error) {
      console.error('Category operation failed:', error)
      alert('İşlem başarısız!')
    }
  }

  const handleDelete = async (type: 'product' | 'category', id: number) => {
    if (!confirm('Silmek istediğinizden emin misiniz?')) return
    
    try {
      const response = await fetch(`${API_BASE}/${type}s/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })
      
      if (response.ok) {
        loadData()
      } else {
        alert('Silme işlemi başarısız!')
      }
    } catch (error) {
      console.error('Delete failed:', error)
      alert('Silme işlemi başarısız!')
    }
  }

  const handleEdit = (item: Product | Category, type: 'product' | 'category') => {
    if (type === 'product') {
      setEditingProduct(item as Product)
      setProductForm({
        title: item.title,
        description: item.description,
        category: item.category,
        badge: item.badge,
        rating: item.rating,
        image: item.image
      })
      setShowProductForm(true)
    } else {
      setEditingCategory(item as Category)
      setCategoryForm({
        name: item.name,
        description: item.description,
        icon: item.icon,
        color: item.color
      })
      setShowCategoryForm(true)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className={`admin-login ${isDark ? 'dark' : ''}`}>
        <div className="login-container">
          <h2>Yönetici Girişi</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Kullanıcı Adı:</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Şifre:</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Giriş Yap</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className={`admin-panel ${isDark ? 'dark' : ''}`}>
      <div className="admin-header">
        <h1>Yönetici Paneli</h1>
        <div className="admin-user">
          <span>Hoş geldiniz, {username}</span>
          <button onClick={handleLogout} className="btn btn-secondary">Çıkış</button>
        </div>
      </div>

      <div className="admin-tabs">
        <button 
          className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Ürünler
        </button>
        <button 
          className={`tab-btn ${activeTab === 'categories' ? 'active' : ''}`}
          onClick={() => setActiveTab('categories')}
        >
          Kategoriler
        </button>
      </div>

      {activeTab === 'products' && (
        <div className="admin-content">
          <div className="content-header">
            <h2>Ürün Yönetimi</h2>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setEditingProduct(null)
                setProductForm({ title: '', description: '', category: '', badge: '', rating: 0, image: '' })
                setShowProductForm(true)
              }}
            >
              Yeni Ürün Ekle
            </button>
          </div>

          <div className="data-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Başlık</th>
                  <th>Kategori</th>
                  <th>Badge</th>
                  <th>Rating</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>{product.badge}</td>
                    <td>{product.rating}</td>
                    <td>
                      <button 
                        className="btn btn-small"
                        onClick={() => handleEdit(product, 'product')}
                      >
                        Düzenle
                      </button>
                      <button 
                        className="btn btn-small btn-danger"
                        onClick={() => handleDelete('product', product.id)}
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'categories' && (
        <div className="admin-content">
          <div className="content-header">
            <h2>Kategori Yönetimi</h2>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setEditingCategory(null)
                setCategoryForm({ name: '', description: '', icon: '📦', color: '#4A90E2' })
                setShowCategoryForm(true)
              }}
            >
              Yeni Kategori Ekle
            </button>
          </div>

          <div className="data-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>İkon</th>
                  <th>Ad</th>
                  <th>Açıklama</th>
                  <th>Renk</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.icon}</td>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                    <td>
                      <span 
                        className="color-preview"
                        style={{ backgroundColor: category.color }}
                      ></span>
                      {category.color}
                    </td>
                    <td>
                      <button 
                        className="btn btn-small"
                        onClick={() => handleEdit(category, 'category')}
                      >
                        Düzenle
                      </button>
                      <button 
                        className="btn btn-small btn-danger"
                        onClick={() => handleDelete('category', category.id)}
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Product Form Modal */}
      {showProductForm && (
        <div className="modal-backdrop" onClick={() => setShowProductForm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingProduct ? 'Ürün Düzenle' : 'Yeni Ürün Ekle'}</h3>
              <button onClick={() => setShowProductForm(false)}>×</button>
            </div>
            <form onSubmit={handleProductSubmit} className="modal-form">
              <div className="form-group">
                <label>Başlık:</label>
                <input
                  type="text"
                  value={productForm.title}
                  onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Açıklama:</label>
                <textarea
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Kategori:</label>
                <select
                  value={productForm.category}
                  onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                  required
                >
                  <option value="">Kategori Seçin</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Badge:</label>
                <input
                  type="text"
                  value={productForm.badge}
                  onChange={(e) => setProductForm({ ...productForm, badge: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Rating:</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={productForm.rating}
                  onChange={(e) => setProductForm({ ...productForm, rating: parseFloat(e.target.value) })}
                />
              </div>
              <div className="form-group">
                <label>Fotoğraf:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handleImageUpload(e.target.files[0])
                    }
                  }}
                />
                {productForm.image && (
                  <div className="image-preview">
                    <img src={productForm.image} alt="Preview" />
                  </div>
                )}
                {uploading && <p>Yükleniyor...</p>}
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowProductForm(false)}>İptal</button>
                <button type="submit" className="btn btn-primary">Kaydet</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Category Form Modal */}
      {showCategoryForm && (
        <div className="modal-backdrop" onClick={() => setShowCategoryForm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingCategory ? 'Kategori Düzenle' : 'Yeni Kategori Ekle'}</h3>
              <button onClick={() => setShowCategoryForm(false)}>×</button>
            </div>
            <form onSubmit={handleCategorySubmit} className="modal-form">
              <div className="form-group">
                <label>Ad:</label>
                <input
                  type="text"
                  value={categoryForm.name}
                  onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Açıklama:</label>
                <textarea
                  value={categoryForm.description}
                  onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>İkon:</label>
                <input
                  type="text"
                  value={categoryForm.icon}
                  onChange={(e) => setCategoryForm({ ...categoryForm, icon: e.target.value })}
                  placeholder="📦"
                />
              </div>
              <div className="form-group">
                <label>Renk:</label>
                <input
                  type="color"
                  value={categoryForm.color}
                  onChange={(e) => setCategoryForm({ ...categoryForm, color: e.target.value })}
                />
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowCategoryForm(false)}>İptal</button>
                <button type="submit" className="btn btn-primary">Kaydet</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPanel
