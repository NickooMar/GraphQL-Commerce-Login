import React from 'react'

const ProductCard = ({product}) => {
  console.log(product);
  return (
    // <div className="w-5/6 h-full  bg-[#230C33] rounded-2xl">
    //   <div className="flex flex-col items-center justify-center text-white relative ">
    //     <img
    //       src={product?.image?.url}
    //       alt="ProductImage"
    //       className="h-[400px] top-14 relative z-10"
    //     />
    //     <h1
    //       style={{ fontFamily: "montserrat" }}
    //       className="bg-[#9984D4] absolute top-0 left-0 py-1 px-3 text-lg m-2 rounded-xl"
    //     >
    //       NEW
    //     </h1>
    //     <h1
    //       className="absolute font-mono text-7xl font-bold top-8 z-0 opacity-70"
    //       style={{
    //         fontSize: 68,
    //         fontFamily: "montserrat",
    //       }}
    //     >
    //       Oversize
    //     </h1>
    //     <div className="flex flex-col bg-white h-full w-full text-black rounded-b-lg pt-10">
    //       {/* <div style={{ height: "80px", overflow: "hidden" }}>
    //         <svg
    //           viewBox="0 0 500 150"
    //           preserveAspectRatio="none"
    //           style={{ height: "100%", width: "100%" }}
    //         >
    //           <path
    //             d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
    //             style={{ stroke: "none", fill: "#230C33" }}
    //           ></path>
    //         </svg>
    //       </div> */}

    //       <h1
    //         className="text-4xl italic pt-2 text-center"
    //         style={{ fontFamily: "montserrat" }}
    //       >
    //         {product.name}
    //       </h1>
    //       <p className="text-lg italic pt-2 ml-2"
    //         style={{ fontFamily: "montserrat" }} > <span className='font-semibold'>Price:</span> ${product?.price.formatted}</p>
    //       <button
    //         type="button"
    //         className="py-3 px-4 bg-[#592E83] flex justify-center items-center h-1/2 w-full text-white rounded-lg mt-4"
    //         style={{ fontFamily: "montserrat" }}
    //       >
    //         See More
    //       </button>
    //     </div>
    //   </div>
    // </div>


    <div className='grid grid-cols-2 h-full w-full border-4 border-black'>
      <div className='bg-gradient-to-r from-indigo-600 to-blue-900 rounded-l-2xl relative'>
        <img src={product.image.url} alt="productImage" />
      </div>
      <div className='bg-white rounded-r-2xl'>

      </div>
    </div>




  );
}

export default ProductCard