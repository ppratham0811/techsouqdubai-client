import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import { getProductById } from "../../actions";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Loading from "../../utils/Loading";
import Products from "../../Components/Dashboard/Products/Products";
import { addToCart } from "../../app/cartSlice";
import { useDispatch } from "react-redux";
import { store } from "../../app/persist";
import ErrorPage from "../ErrorPage/ErrorPage";
import { addToWishlist } from "../../app/wishlistSlice";

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [exist, setExist] = useState(false);
  const dispatch = useDispatch();

  const fetchProductById = async () => {
    await getProductById(productId)
      .then((res) => {
        console.log("res: ", res);
        if (res.status) {
          setProduct(res.res);
          setExist(true);
        }
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  const getRelevantProducts = async () => {
    console.log(product);
    let relevantProducts = [];
    for (let prod of products) {
      if (
        prod.category.$id === product.category.$id &&
        prod.$id !== productId
      ) {
        relevantProducts.push(prod);
      }
    }
    setRelatedProducts(relevantProducts);
  };

  useEffect(() => {
    fetchProductById();
    getRelevantProducts();
  }, [productId]);

  function trimCharacters(str) {
    return str.substring(3, str.length - 4);
  }

  const addProductToCart = async (product) => {
    dispatch(addToCart({ productId: product.$id, product, qty: 1 }));
    console.log(store.getState());
  };

  const addProductToWishlist = async (product) => {
    dispatch(addToWishlist(product));
  };

  if (!product && !exist) {
    return <ErrorPage />;
  } else if (!product) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 px-2 sm:px-8">
        <div className="grid grid-cols-12 gap-5 my-8 mx-4 rounded-lg bg-white shadow-xl p-6 xs:p-8">
          <div className="col-span-12 max-h-[500px] md:col-span-6">
            <div className="swiper swiper-top group relative flex items-center rounded-lg swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-e287106774368dfb3"
                aria-live="polite"
              >
                <div
                  className="swiper-slide swiper-slide-visible swiper-slide-active"
                  // style="width: 437px; opacity: 1; transform: translate3d(0px, 0px, 0px);"
                  role="group"
                  aria-label="1 / 3"
                >
                  <div className="w-full p-4">
                    <img src={`${product.images[0]}`} alt="product" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="my-1 flex justify-between items-center">
              <p className="transition-all-300 break-all text-4xl font-medium hover:text-primary">
                {product.title}
              </p>
              {product.quantity > 0 ? (
                <span className="rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                  instock
                </span>
              ) : (
                <span className="rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                  instock
                </span>
              )}
            </div>
            <div className="product-val-stock my-2 flex justify-between">
              <div className="ml-auto"></div>
            </div>
            {!product.contactForPrice ? (
              <div className="my-5 flex items-center gap-5">
                <div className="flex rounded-lg bg-white px-3 py-2 text-primary-color shadow">
                  <span className="text-sm text-primary">AED</span>
                  <span className="text-2xl text-primary font-semibold leading-7">
                    {product.salePrice}
                  </span>
                </div>
              </div>
            ) : (
              <div className="my-5 flex items-center gap-5">
                <div className="flex rounded-lg bg-white px-3 py-2 shadow-lg hover:scale-105 cursor-pointer hover:transition-all hover:duration-200">
                  <span className="text-2xl text-primary font-semibold leading-7">
                    Contact For Price
                  </span>
                </div>
              </div>
            )}
            <div className="my-4">
              <p className="clamp-5 break-all">
                {trimCharacters(product.description)}
              </p>
            </div>

            <div className="flex justify-start items-center gap-4">
              <div className="inline-flex rounded-lg bg-white shadow">
                <input
                  className="w-12 p-2 border-none bg-transparent text-center text-lg text-gray-800 focus:border-none focus:outline-none focus:ring-0"
                  type="number"
                  defaultValue={1}
                  min={1}
                />
              </div>
              <button
                className="bg-primary transition-all-300 flex h-full items-center justify-center gap-2 rounded-lg bg-primary-color p-2"
                type="submit"
                onClick={() => addProductToCart(product)}
              >
                <AddShoppingCartOutlinedIcon className="text-white" />
                <span className="font-bold uppercase text-white">
                  Add to cart
                </span>
              </button>
              <button
                className="bg-primary transition-all-300 flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-color p-2 hover:bg-primary-hover"
                onClick={() => addProductToWishlist(product)}
              >
                <FavoriteBorderOutlinedIcon className="text-white" />
              </button>
            </div>

            <div className="mt-5 border-t border-gray-200 pt-5">
              <div>
                <b>Categories: </b>
                <span>
                  <a
                    href={`/category/${product.category?.$id}`}
                    className="text-zinc-500"
                  >
                    {product.category?.name}
                  </a>
                </span>
              </div>
            </div>
          </div>
          {product.specifications?.length > 0 && (
            <div className="col-span-12">
              <div className="liner-container mb-5 flex border-b-2 border-[rgba(119,119,119,.17)]">
                <h1 className="mb-[-2px] inline-block border-b-2 border-primary-color pb-3 text-xl font-bold uppercase">
                  Specifications
                </h1>
              </div>
              <div className="grid grid-cols-3 gap-5">
                {}
                <div className="col-span-12 sm:col-span-1">
                  <span>
                    <b>Aplication:</b> Desktop
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <Products title={"Related Products"} products={relatedProducts} />
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
