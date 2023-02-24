import React, { useState, useEffect } from "react";

import useAuth from "../../hooks/useAuth";
import useNavbar from "../../components/useNavbar";
import { commerce } from "../../lib/Commerce";
import ProductsList from "../../components/Products/ProductsList";
import homescreenBanner from "../../assets/homescreenBanner.png";
import homescreenBanner1 from "../../assets/homescreenBanner1.jpg";
import homescreenBanner2 from "../../assets/homescreenBanner2.jpg";
import { Carousel } from "react-responsive-carousel";

import "./HomeScreen.css";

const HomeScreen = () => {
  const { authData, fetchCart, fetchProducts, products, cart, order } = useAuth();
  const [LoggedInNavbar, NoUserNavbar] = useNavbar();

  console.log(cart)
  
  useEffect(() => {
    if (authData.user) {
      fetchCart();
    }
    fetchProducts();
  }, [authData.user]);


  return (
    <>
      {!authData.user ? <NoUserNavbar /> : <LoggedInNavbar />}

      <div className="h-full bg-gray-900">
        <div className="flex justify-center items-center">
          <Carousel
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
            autoPlay={true}
            
          >
            <div>
              <img
                src={homescreenBanner}
                alt="banner"
                className="object-contain bg-no-repeat rounded-2xl"
              />
            </div>
            <div className="rounded-lg">
              <img
                src={homescreenBanner1}
                alt="banner"
                className="object-contain bg-no-repeat rounded-2xl h-[400px]"
              />
            </div>
            <div>
              <img
                src={homescreenBanner2}
                alt="banner"
                className="object-contain bg-no-repeat rounded-2xl h-[400px]"
              />
            </div>
          </Carousel>
        </div>

        <ProductsList products={products} />
      </div>
    </>
  );
};

export default HomeScreen;
