import React from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useNavbar from "../components/useNavbar";
import "./SpecificProduct.css";
import { BsCartPlus } from "react-icons/bs";

const SpecificProduct = () => {
  const location = useLocation();
  const { authData } = useAuth();
  const { product } = location.state;
  const [LoggedInNavbar, NoUserNavbar] = useNavbar();

  const HTMLDescriptionString = product?.description;

  return (
    <>
      {!authData.user ? <NoUserNavbar /> : <LoggedInNavbar />}
      <div className="h-screen w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          <div className="bg-slate-50 pl-4 pt-4 pb-8 md:pt-44">
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
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  4.0
                </span>
              </div>
            </div>
            <p className="py-6 text-[#787777] lg:hidden xl:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              dolore veniam quisquam nulla quia ducimus maxime et, fuga
              reprehenderit mollitia perspiciatis laboriosam aperiam, blanditiis
              cum quam praesentium pariatur nihil. Saepe nam accusamus
              perferendis mollitia. Consequuntur numquam neque unde suscipit
              placeat!
            </p>
            <div className="mt-6 font-medium p-4 bg-slate-100 w-fit rounded-lg border border-blue-700 lg:hidden xl:block">
              <h2 className="pb-1.5">Descripción:</h2>
              <p
                className=" text-[#787777] "
                dangerouslySetInnerHTML={{ __html: HTMLDescriptionString }}
              ></p>
            </div>
            <div className="flex justify-end mt-12 pr-12">
              <button
                disabled={!authData.user ? true : false}
                className="flex text-white text-lg bg-blue-700 disabled:opacity-50 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:opacity-50"
              >
                Add to cart
                <BsCartPlus size={32} className='pl-2'/>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center bg-gray-800">
            <div className="bg-slate-100 border-2 border-blue-700 h-4/5 w-4/5 flex items-center justify-center rounded-2xl">
              <img
                src={product.image.url}
                alt="productImage"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificProduct;
