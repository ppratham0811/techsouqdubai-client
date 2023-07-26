import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Heading from "../../Widgets/Heading";
import { getWishlist } from "../../actions"; 
import { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  
  
  
  const getWishlistItems = async () => {
    await getWishlist()
  }
  
  useEffect(() => {
    
  }, [])

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 px-2 sm:px-8">
        <Heading title="Your Wishlist" />
        <form className="wishlist-content rounded-lg bg-white p-5 gap-5 my-8 mx-4 rounded-lg bg-white p-6 xs:p-8">
          <div className="transition-all-300 flex gap-2 p-2 hover:bg-gray-100 lg:hidden">
            <div className="content flex items-center">
              <input
                className="checkbox check-product"
                type="checkbox"
                id="product-mobile-1"
              />
            </div>
            <div className="flex w-full flex-col gap-2 xs:flex-row">
              <div className="content flex items-center">
                <div className="flex items-center">
                  <div className="h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-lg border">
                    <a href="#">
                      <img
                        className="h-full w-full object-cover"
                        src="images/product/prod-1.jpg"
                        alt="product"
                      />
                    </a>
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
                        Ryzen 5 3600x
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <div className="flex flex-col">
                      <span className="text-xs font-light xs:hidden">
                        Unit Price
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">$37.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="flex flex-col">
                      <span className="text-xs font-light xs:hidden">
                        Stock Status
                      </span>
                      <span className="text-sm font-bold uppercase text-green-400">
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content flex items-center">
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 md:hidden">
                    <a
                      href="#"
                      className="flex text-primary hover:text-primary-hover"
                    >
                      View Details
                    </a>
                    <a
                      href="#"
                      className="flex text-primary hover:text-primary-hover"
                    >
                      Remove
                    </a>
                  </div>
                  <div className="hidden items-center gap-2 md:flex">
                    <a
                      href="#"
                      className="btn-effect transition-all-300 w-max rounded-lg bg-primary p-2 px-3"
                    >
                      <span className="font-bold uppercase text-white">
                        View Details
                      </span>
                    </a>
                    <div className="transition-all-300 cursor-pointer text-slate-400 hover:text-primary sm:inline">
                      <DeleteForeverIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[800px] text-left">
              <thead className="border-b-2 border-solid border-gray-200">
                <tr>
                  <th></th>
                  <th className="p-2 text-xl">Product Name</th>
                  <th className="p-2 text-xl">Unit Price</th>
                  <th className="p-2 text-xl">Stock Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-all-300 hover:bg-gray-50">
                  <td className="p-2">
                    <div className="flex items-center gap-5">
                      <input
                        className="checkbox check-product"
                        type="checkbox"
                        id="product-desktop-1"
                      />
                      <div className="h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-lg border">
                        <a href="#">
                          <img
                            className="h-full w-full object-cover"
                            src="/puro.png"
                            alt="product"
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="p-2">
                    <a className="clamp-2 break-all font-bold" href="#">
                      Ryzen 5 3600x
                    </a>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">$37.00</span>
                      <small className="text-xs text-primary line-through">
                        $50.00
                      </small>
                    </div>
                  </td>
                  <td className="p-2">
                    <span className="text-sm font-bold uppercase text-green-400">
                      In Stock
                    </span>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center gap-4">
                      <a
                        className="btn-effect rounded-lg bg-primary p-2 text-white"
                        href="#"
                      >
                        <span className="font-bold uppercase">View Details</span>
                      </a>
                      <div className="tippy tippy-remove transition-all-300 hidden cursor-pointer text-slate-400 hover:text-primary sm:inline">
                        <DeleteForeverIcon />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;
