import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Heading from "../../Widgets/Heading";
import { getWishlist } from "../../actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentWishlistState,
  removeFromWishlist,
} from "../../app/wishlistSlice";

const Wishlist = () => {
  const wishlistProducts = useSelector(currentWishlistState);
  const dispatch = useDispatch();
  // const [wishlistItems, setWishlistItems] = useState([]);

  // const getWishlistItems = async () => {
  //   await getWishlist()
  //     .then((res) => setWishlistItems(res.documents))
  //     .catch((e) => console.error(e));
  // };

  const handleDeleteProductFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  useEffect(() => {
    // getWishlistItems();
    console.log(wishlistProducts);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 px-2 sm:px-8">
        <div
          className="grid grid-cols-12 gap-5 my-10 rounded-lg bg-white p-2 xs:p-5"
          action="#"
        >
          <div className="col-span-12">
            <Heading title="Your Wishlist" />

            {/* MOBILE SCREEN VIEW */}
            {wishlistProducts ? (
              wishlistProducts.map((prod, idx) => (
                <div className="transition-all-300 flex gap-2 p-2 hover:bg-gray-100 lg:hidden">
                  <div className="flex w-full flex-col gap-2 xs:flex-row">
                    <div className="content flex items-center">
                      <div className="flex items-center">
                        <div className="h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-lg border">
                          <img
                            className="h-full w-full object-cover"
                            src={prod.images[0]}
                            alt="product"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-2 sm:flex-row">
                      <div className="flex w-full flex-col gap-2">
                        <div className="content">
                          <div className="flex flex-col">
                            <span className="text-xs font-light xs:hidden">
                              Product Name
                            </span>
                            <a className="clamp-2 break-all font-bold" href="#">
                              {prod.title}
                            </a>
                          </div>
                        </div>
                        <div className="content">
                          <div className="flex flex-col">
                            <span className="text-xs font-light xs:hidden">
                              Unit Price
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-primary-color">
                                {prod.salePrice}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="flex flex-col">
                            <span className="text-xs font-light xs:hidden">
                              Stock Status
                            </span>
                            {prod.quantity > 0 ? (
                              <span className="text-sm font-bold uppercase text-green-400">
                                In Stock
                              </span>
                            ) : (
                              <span className="text-sm font-bold uppercase text-red-400">
                                Out of Stock
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="content flex items-center">
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 md:hidden">
                          <a
                            href="#"
                            className="flex text-primary-color hover:text-primary-hover"
                          >
                            View Details
                          </a>
                          <button
                            onClick={() =>
                              handleDeleteProductFromWishlist(prod.$id)
                            }
                            className="flex text-primary-color hover:text-primary-hover"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="hidden items-center gap-2 md:flex">
                          <a
                            href="#"
                            className="btn-effect transition-all-300 w-max rounded-lg bg-primary-color p-2 px-3"
                          >
                            <span className="font-bold uppercase text-white">
                              View Details
                            </span>
                          </a>
                          <div className="tippy tippy-remove transition-all-300 hidden cursor-pointer text-slate-400 hover:text-primary-color sm:inline">
                            <DeleteForeverIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No Wishlist Items</div>
            )}

            {/* LARGE SCREEN VIEW */}
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[800px] text-left">
                <thead>
                  <tr>
                    <th></th>
                    <th className="p-2">Product Name</th>
                    <th className="p-2">Unit Price</th>
                    <th className="p-2">Stock Status</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistProducts ? (
                    wishlistProducts.map((prod, idx) => (
                      <tr className="transition-all-300 hover:bg-gray-50">
                        <td className="p-2">
                          <div className="flex items-center gap-5">
                            <div className="h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-lg border">
                              <a href={`${prod.images[0]}`}>
                                <img
                                  className="h-full w-full object-cover"
                                  src={prod.images[0]}
                                  alt="product"
                                />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="p-2">
                          <a className="clamp-2 break-all font-bold" href="#">
                            {prod.title}
                          </a>
                        </td>
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-primary-color">
                              {prod.salePrice}
                            </span>
                          </div>
                        </td>
                        <td className="p-2">
                          {prod.quantity > 0 ? (
                            <span className="text-sm font-bold uppercase text-green-400">
                              In Stock
                            </span>
                          ) : (
                            <span className="text-sm font-bold uppercase text-red-400">
                              Out of Stock
                            </span>
                          )}
                        </td>
                        <td className="p-2">
                          <div className="flex items-center gap-4">
                            <a
                              className="btn-effect rounded-lg bg-primary p-2 text-white"
                              href={`/products/${prod.$id}`}
                            >
                              <span className="font-bold uppercase">
                                View Details
                              </span>
                            </a>
                            <div
                              className="tippy tippy-remove transition-all-300 hidden cursor-pointer text-slate-400 hover:text-primary-color sm:inline"
                              onClick={() =>
                                handleDeleteProductFromWishlist(prod.$id)
                              }
                            >
                              <DeleteForeverIcon />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div>No Wishlist Itemss</div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
