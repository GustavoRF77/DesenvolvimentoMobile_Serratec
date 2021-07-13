import React,{ createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [log, setLog] = useState(false);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  function count() {
    setCount2(count2 + 1)
  }

  function count4() {
    setCount3(count3 + 1)
  }


  function addItem(nome, descricao, preco, url) {
    const item = { nome, descricao, preco, url };
    const itemIndex = cart.findIndex(x => x.nome === nome);

    if (itemIndex !== -1) {
      console.log(cart[itemIndex].quantidade);
      item.quantidade = cart[itemIndex].quantidade + 1
      var novaLista = cart;
      novaLista[itemIndex].quantidade = item.quantidade
      setCart(novaLista)
    } else {
      item.quantidade = 1
      setCart([...cart, item])
    }

  }

  function removeItem(nome) {
    const filteredCart = cart.filter(item => item.nome !== nome);
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  function login(logado){
    setLog(logado)
  }



  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, log, login, count, count2, count3, count4 }}>
      {children}
    </CartContext.Provider>
  )
}