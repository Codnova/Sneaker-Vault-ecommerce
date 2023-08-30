import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalQuantity, settotalQuantity] = useState(0);
  const [total, settotal] = useState(0);

  function isInCart(itemId) {
    return cart.some((item) => item.itemId === itemId);
  }

  function addItem(item, quantity) {
    if (isInCart(item.itemId)) {
      alert("El producto ya está en el carrito");
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
      settotalQuantity(totalQuantity + quantity);
      settotal(parseFloat((total + item.price * quantity).toFixed(2)));
    }
  }

  function removeItem(item) {
    const cartUpdated = cart.filter((prod) => prod.itemId !== item.itemId);
    setCart(cartUpdated);
    settotalQuantity(totalQuantity - item.quantity);
    settotal(parseFloat((total - item.price * item.quantity).toFixed(2)));
    console.log("Carrito en removeItem: ", cart);
  }

  function clearCart() {
    setCart([]);
    settotalQuantity(0);
    settotal(0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        removeItem,
        clearCart,
        totalQuantity,
        total,
      }}>
      {children}
    </CartContext.Provider>
  );
}
