import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Link } from "react-router-dom";
import Heading from "../../../Widgets/Heading";
import { addToCart } from "../../../app/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../app/persist";
import { addToWishlist } from "../../../app/wishlistSlice";

/* ########## OFFERS ########## */
const Products = ({ title, products }) => {
  const dispatch = useDispatch();

  function trimCharacters(str) {
    return str.substring(3, str.length - 4);
  }

  const addProductToCart = (product) => {
    dispatch(addToCart({ productId: product.$id, product, qty: 1 }));
  };

  const addProductToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <>
      <Heading title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 m-4">
        {products?.map((prod, idx) => {
          return (
            <div key={prod.$id}>
              <div className="card-container transition-all-300 translateY-2 relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md hover:z-[2] hover:shadow-xl">
                <div className="absolute top-[10px] right-[10px]">
                  <div
                    className="p-[2px] transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-gray-400 text-white hover:bg-primary-hover"
                    onClick={() => addProductToWishlist(prod)}
                  >
                    <FavoriteBorderIcon />
                  </div>
                  <div
                    className="p-[2px] my-2 transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-gray-400 text-white hover:bg-primary-hover"
                    onClick={() => addProductToCart(prod)}
                  >
                    <AddShoppingCartOutlinedIcon />
                  </div>
                </div>
                <div className="h-[190px] overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      className="object-contain h-full w-full"
                      src={prod.images[0]}
                      alt="product"
                    />
                  </a>
                </div>
                <div className="my-1">
                  <a className="clamp break-all font-medium" href="#">
                    {prod.title}
                  </a>
                </div>
                <div className="my-1">
                  <p className="clamp-2 text-sm text-gray-400">
                    {trimCharacters(prod.description)}
                  </p>
                </div>

                <div className="mt-auto">
                  <a
                    className="btn-effect transition-all-300 flex w-full items-center justify-center rounded-lg bg-primary p-2"
                    href={`/products/${prod.$id}`}
                  >
                    <span className="font-bold uppercase text-white">
                      View details
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
