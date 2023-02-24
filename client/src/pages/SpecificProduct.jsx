import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useNavbar from "../components/useNavbar";
import "./SpecificProduct.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { commerce } from "../lib/Commerce";

const SpecificProduct = () => {
  const location = useLocation();
  const { authData, handleAddProduct } = useAuth();
  const { product } = location.state;
  const [LoggedInNavbar, NoUserNavbar] = useNavbar();
  const [productQuantity, setProductQuantity] = useState(1);
  const [activeSizeButton, setActiveSizeButton] = useState("");
  const [variants, setVariants] = useState();
  const [selectedVariant, setSelectedVariant] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const HTMLDescriptionString = product?.description;

  useEffect(() => {
    async function fetchVariants() {
      await commerce.products
        .getVariants(product.id)
        .then((variants) => setVariants(variants.data));
    }
    fetchVariants();
  }, []);

  useEffect(() => {
    variants?.map((variant) => {
      if (variant.sku === activeSizeButton) {
        setSelectedVariant(variant);
      }
    });
  }, [activeSizeButton]);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D|^0/g, "");
    setProductQuantity(value);
  };

  const handleSizeClick = (e) => {
    setActiveSizeButton(e.target.id.toUpperCase());
  };

  const handleAddProductCall = async () => {
    try {
      setIsLoading(true);
      await handleAddProduct(product.id, productQuantity, selectedVariant.id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!authData.user ? <NoUserNavbar /> : <LoggedInNavbar />}
      <div className="h-screen w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
          <div className="bg-slate-50">
            <div className="w-fit p-1.5 mt-4 ml-4">
              <Link to={"/"}>
                <AiOutlineArrowLeft size={32} />
              </Link>
            </div>
            <div className="pl-4 pt-4 pb-8 md:pt-28">
              <p className="font-custom text-[#787777] font-semibold text-md py-6">
                {product.categories[0].name}
              </p>
              <h1 className="font-bold font-custom text-5xl">{product.name}</h1>
              <div className="flex pt-8">
                <p className="text-lg font-medium">
                  {product.price.formatted_with_symbol}
                </p>
                <div className="w-0.5 h-[26px] ml-4 bg-gray-300" />
                <div className="flex items-center pl-4">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-blue-800 ml-3">
                    4.0
                  </span>
                </div>
              </div>
              <p className="py-6 text-[#787777]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                dolore veniam quisquam nulla quia ducimus maxime et, fuga
                reprehenderit mollitia perspiciatis laboriosam aperiam,
                blanditiis cum quam praesentium pariatur nihil. Saepe nam
                accusamus perferendis mollitia. Consequuntur numquam neque unde
                suscipit placeat!
              </p>
              <div className="xl:grid xl:grid-cols-2 grid-cols-1">
                <div>
                  <h2 className="font-semibold text-[#4e4d4d]">Descripción</h2>
                  <div className="mt-2 font-medium p-3.5 bg-slate-100 w-fit rounded-lg border-2 border-indigo-700 ">
                    <h2 className="font-semibold font-custom text-base mb-2">
                      CALIDAD ÚNICA
                    </h2>
                    <p
                      className="text-[#787777]"
                      dangerouslySetInnerHTML={{
                        __html: HTMLDescriptionString,
                      }}
                    ></p>
                  </div>
                </div>
                <div className="flex flex-col mt-4 mx-4">
                  <h2 className="font-semibold text-[#4e4d4d]">Cantidad</h2>
                  <input
                    id="qtityProduct"
                    value={productQuantity}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-1/2 p-2.5 mt-2"
                    required
                  />
                  <h2 className="font-semibold text-[#4e4d4d] mt-4">Talle</h2>
                  <div className="flex gap-4 mt-2">
                    <button
                      id="xs"
                      type="button"
                      className={
                        activeSizeButton === "XS"
                          ? "w-[55px] h-[55px] border border-gray-200 rounded-xl bg-indigo-700 text-white"
                          : "w-[55px] h-[55px] border border-gray-200 rounded-xl hover:bg-indigo-700 hover:text-white"
                      }
                      onClick={handleSizeClick}
                    >
                      XS
                    </button>
                    <button
                      id="s"
                      type="button"
                      className={
                        activeSizeButton === "S"
                          ? "w-[55px] h-[55px] border border-gray-200 rounded-xl bg-indigo-700 text-white"
                          : "w-[55px] h-[55px] border border-gray-200 rounded-xl hover:bg-indigo-700 hover:text-white"
                      }
                      onClick={handleSizeClick}
                    >
                      S
                    </button>
                    <button
                      id="m"
                      type="button"
                      className={
                        activeSizeButton === "M"
                          ? "w-[55px] h-[55px] border border-gray-200 rounded-xl bg-indigo-700 text-white"
                          : "w-[55px] h-[55px] border border-gray-200 rounded-xl hover:bg-indigo-700 hover:text-white"
                      }
                      onClick={handleSizeClick}
                    >
                      M
                    </button>
                    <button
                      id="l"
                      type="button"
                      className={
                        activeSizeButton === "L"
                          ? "w-[55px] h-[55px] border border-gray-200 rounded-xl bg-indigo-700 text-white"
                          : "w-[55px] h-[55px] border border-gray-200 rounded-xl hover:bg-indigo-700 hover:text-white"
                      }
                      onClick={handleSizeClick}
                    >
                      L
                    </button>
                    <button
                      id="xl"
                      type="button"
                      className={
                        activeSizeButton === "XL"
                          ? "w-[55px] h-[55px] border border-gray-200 rounded-xl bg-indigo-700 text-white"
                          : "w-[55px] h-[55px] border border-gray-200 rounded-xl hover:bg-indigo-700 hover:text-white"
                      }
                      onClick={handleSizeClick}
                    >
                      XL
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex w-full mt-12 pr-12">
                <button
                  disabled={
                    !authData.user || !selectedVariant || isLoading
                      ? true
                      : false
                  }
                  className="w-full text-center text-white text-lg bg-purple-700 hover:opacity-70 disabled:opacity-50 font-medium rounded-lg px-5 py-2.5 dark:bg-indigo-600 dark:hover:opacity-70"
                  onClick={handleAddProductCall}
                >
                  Add to cart
                </button>
              </div>
              {!authData.user ? (
                <p className="flex justify-center text-red-400 text-sm font-medium pt-4">
                  Please login before add a product
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center bg-gray-800">
            <div className="bg-slate-100 border-2 border-indigo-700 h-4/5 w-4/5 flex items-center justify-center rounded-2xl">
              <img
                src={product.image.url}
                alt="productImage"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Related Products */}

        {/* <div className="w-full bg-zinc-50 pt-8">
          <div className="flex justify-center items-center">
            <h1 className="font-medium font-custom text-3xl">People also see</h1>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/${product.id}`} state={{ product }}>
        <img
          className="p-8 rounded-t-lg"
          src={product.image.url}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/${product.id}`} state={{ product }}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
      </div>
    </div>
        </div> */}
      </div>
    </>
  );
};

export default SpecificProduct;
