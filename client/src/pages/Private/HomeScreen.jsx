import React, { useState, useEffect } from 'react'

import useAuth from "../../hooks/useAuth";
import useNavbar from "../../components/useNavbar";
import { commerce } from "../../lib/Commerce";
import ProductsList from '../../components/Products/ProductsList';

const HomeScreen = () => {
  const { authData } = useAuth();
  const [LoggedInNavbar, NoUserNavbar] = useNavbar();

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();
    console.log(data)
  }

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data);
  }


  useEffect(() => {
    if (authData.user) {
      fetchCart();
    }
    fetchProducts();
  }, [authData.user]);


  console.log(authData)

  return <>{!authData.user ? <NoUserNavbar /> : <LoggedInNavbar />}

    <div className='h-full bg-gray-900'>
      <ProductsList products={products} />
    </div>

  </>;
}

export default HomeScreen