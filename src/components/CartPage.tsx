import React from 'react'
import { useCart } from '../context/CartContext'

const CartPage: React.FC = () => {
  const { items, totalPrice, clear } = useCart()

  if (items.length === 0) {
    return (
      <section className="cart-page">
        <div className="container">
          <div className="section-title">
            <h2>Sepetim</h2>
            <p>Seçtiğiniz ürünleri burada görüntüleyebilirsiniz</p>
          </div>
          
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h3>Sepetiniz Boş</h3>
            <p>Henüz sepetinize ürün eklemediniz. Ürünleri inceleyerek sepetinize ekleyebilirsiniz.</p>
            <a href="#products" className="btn btn-primary">Ürünleri İncele</a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <div className="container">
        <div className="section-title">
          <h2>Sepetim</h2>
          <p>Seçtiğiniz ürünleri burada görüntüleyebilirsiniz</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p>Birim Fiyat: {item.priceValue.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</p>
                </div>
                <div className="cart-item-quantity">
                  <span>Adet: {item.quantity}</span>
                </div>
                <div className="cart-item-total">
                  <span>{(item.priceValue * item.quantity).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Sipariş Özeti</h3>
              <div className="summary-row">
                <span>Toplam Ürün:</span>
                <span>{items.reduce((sum, item) => sum + item.quantity, 0)} adet</span>
              </div>
              <div className="summary-row">
                <span>Ara Toplam:</span>
                <span>{totalPrice.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
              </div>
              <div className="summary-row">
                <span>Kargo:</span>
                <span>Ücretsiz</span>
              </div>
              <div className="summary-row total">
                <span>Toplam:</span>
                <span>{totalPrice.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
              </div>
              <div className="cart-actions">
                <button className="btn btn-secondary" onClick={clear}>Sepeti Temizle</button>
                <button className="btn btn-primary">Siparişi Tamamla</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
