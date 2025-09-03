/* eslint-disable react-refresh/only-export-components */
// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Adiciona um produto ao carrinho ou atualiza a quantidade
  const addProduct = (newProduct) => {
    const productExists = cartProducts.find(
      (product) => product.id === newProduct.id
    );

    if (productExists) {
      const updatedCart = cartProducts.map((product) =>
        product.id === newProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCartProducts(updatedCart);
      localStorage.setItem("@codeburger:cart", JSON.stringify(updatedCart));
      toast.success("Quantidade do produto atualizada!");
    } else {
      const updatedCart = [...cartProducts, { ...newProduct, quantity: 1 }];
      setCartProducts(updatedCart);
      localStorage.setItem("@codeburger:cart", JSON.stringify(updatedCart));
      toast.success("Produto adicionado ao carrinho!");
    }
  };

  // Remove um produto do carrinho
  const removeProduct = (productId) => {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(updatedCart);
    localStorage.setItem("@codeburger:cart", JSON.stringify(updatedCart));
    toast.info("Produto removido do carrinho!");
  };

  // Atualiza a quantidade de um produto
  const updateProductQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // Filtra o produto do carrinho se a nova quantidade for zero ou negativa
      const updatedCart = cartProducts.filter((product) => product.id !== productId);
      setCartProducts(updatedCart);
      localStorage.setItem("@codeburger:cart", JSON.stringify(updatedCart));
      toast.info("Produto removido do carrinho!");
      return;
    }

    const updatedCart = cartProducts.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCartProducts(updatedCart);
    localStorage.setItem("@codeburger:cart", JSON.stringify(updatedCart));
    toast.success();
  };

  // Limpa o carrinho
  const clearCart = () => {
    setCartProducts([]);
    localStorage.removeItem("@codeburger:cart");
    toast.success();
  };

  // Carrega o carrinho do localStorage ao iniciar a aplicação
  useEffect(() => {
    const storedCart = localStorage.getItem("@codeburger:cart");
    if (storedCart) {
      setCartProducts(JSON.parse(storedCart));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProduct,
        removeProduct,
        updateProductQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};