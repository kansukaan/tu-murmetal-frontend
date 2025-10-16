import React, { createContext, useContext, useMemo, useState } from 'react'

export type CartItem = {
  id: number
  title: string
  priceValue: number
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  totalQuantity: number
  totalPrice: number
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem: CartContextValue['addItem'] = (item) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === item.id)
      if (existing) {
        return prev.map((it) => it.id === item.id ? { ...it, quantity: it.quantity + 1 } : it)
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const clear = () => setItems([])

  const totalQuantity = useMemo(() => items.reduce((sum, it) => sum + it.quantity, 0), [items])
  const totalPrice = useMemo(() => items.reduce((sum, it) => sum + it.quantity * it.priceValue, 0), [items])

  const value: CartContextValue = {
    items,
    totalQuantity,
    totalPrice,
    addItem,
    clear
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = (): CartContextValue => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}


