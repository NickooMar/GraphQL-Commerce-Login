import React from "react";

import ProductCard from "./ProductCard";
  
const ProductsList = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 gap-y-12 pt-12 place-items-center">
        {products.map((product) => (
          <div>
            <ProductCard product={product} key={product.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
