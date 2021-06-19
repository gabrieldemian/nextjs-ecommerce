import commerce from '@/lib/commerce'
import { useEffect, useState, createContext, useContext } from 'react'

const CartContext = createContext({})

function CartProvider({ children }) {
  const [cart, setCart] = useState()
  const [quantity, setQuantity] = useState(0)
  const [loading, setLoading] = useState(false)

  const getCart = async () => {
    setLoading(true)
    const c = await commerce.cart.retrieve()
    setCart(c)
    setQuantity(c.total_unique_items)
    setLoading(false)
  }

  const addCart = async (id, qtd) => {
    setQuantity(quantity + 1)
    setLoading(true)
    const { cart } = await commerce.cart.add(id, qtd)
    setLoading(false)
    setCart(cart)
    setQuantity(cart.total_unique_items)
  }

  const emptyCart = async (id) => {
    setLoading(true)
    if (id) {
      setQuantity(quantity - 1)
      await commerce.cart.remove(id)
      await getCart()
    } else {
      setCart({})
      setQuantity(0)
      await commerce.cart.empty()
    }
    setLoading(false)
  }

  useEffect(() => {
    getCart()
  }, [])

  return (
    <CartContext.Provider
      value={{ cart, getCart, quantity, emptyCart, addCart, loading }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

export const useCart = () => useContext(CartContext)
