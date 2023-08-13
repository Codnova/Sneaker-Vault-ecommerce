import { useState, createContext } from "react";

export const CartContext = createContext ({
  cart: []
})

export function CartProvider ({children}) {
  
  const [cart, setCart] = useState ([])
  console.log(cart)

  function isInCart(itemId) {

    return cart.some(item => item.itemId === itemId);

  }

  function addItem (item, quantity) {
    if (!isInCart(item.id)) {
      setCart( (prevCart) => [...prevCart, {...item, quantity}]);
      console.log("Carrito en addItem: ", cart)
    } else {

    }
  }

  function removeItem (itemId) {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdated);
    console.log("Carrito en removeItem: ", cart)
  }

  function clearCart(){

      setCart([])
  
  }

  return (
    <CartContext.Provider value={{cart, addItem, isInCart, removeItem, clearCart}} >
      {children}
    </CartContext.Provider>

  )
}

