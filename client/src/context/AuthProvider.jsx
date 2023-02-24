import React, { createContext, useState, useEffect } from "react";
import { commerce } from "../lib/Commerce";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();
    console.log(data);
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const handleAddProduct = async (productId, quantity, variantId) => {
    console.log(productId, quantity, variantId);
    const response = await commerce.cart.add(productId, quantity, variantId);
    setCart(response);
    return response;
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response);
  };

  const handleRemoveCartProduct = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response);
  };

  const refreshCart = async () => {
    const response = await commerce.cart.refresh();
    setCart(response);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response);
  };

  const handleCheckoutToken = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.generateToken(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        // StateHandlers
        setAuthData,
        // States
        authData,
        products,
        cart,
        order,
        // Functions
        fetchCart,
        fetchProducts,
        handleAddProduct,
        handleUpdateCartQty,
        handleRemoveCartProduct,
        refreshCart,
        handleEmptyCart,
        handleCheckoutToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
