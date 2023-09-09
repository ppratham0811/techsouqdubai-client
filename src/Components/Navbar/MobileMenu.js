import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./MobileMenu.css";
import {
  deleteCurrentSession,
  getCategories,
  getCurrentUser,
} from "../../actions";
import { store } from "../../app/persist";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { currentCartState } from "../../app/cartSlice";
import { currentWishlistState } from "../../app/wishlistSlice";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ menu, setMenu, categories }) => {
  const cartProducts = useSelector(currentCartState);
  const wishlistProducts = useSelector(currentWishlistState);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const loadCurrentUser = async () => {
    const currentUser = await getCurrentUser();
    if (currentUser) {
      setUser(true);
    }
    return currentUser;
  };
  const logoutCurrentUser = async () => {
    await deleteCurrentSession().then(() => {
      setUser(false);
      navigate("/login");
    });
    console.log(loadCurrentUser());
  };

  useEffect(() => {
    loadCurrentUser();
  }, []);

  useEffect(() => {
    // Add event listeners to disable scrolling when the menu is open
    if (menu) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }

    // Clean up event listeners on component unmount
    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [menu]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate("/search", {
        state: {
          searchTerm: searchTerm,
        },
      });
      setSearchTerm("");
      setMenu(false);
    }
  };

  return (
    <>
      <div className="absolute top-0 lg:hidden flex h-full w-full z-[999999] bg-black bg-opacity-50 items-center justify-center">
        <div className="transition-all-300 relative left-0 mr-auto flex h-full w-full min-w-[250px] flex-col bg-white px-8 overflow-auto">
          <CloseIcon
            className="absolute top-4 right-4"
            onClick={() => setMenu(false)}
          />
          <div className="w-full bg-secondary-color">
            <button className="btn-close-modal transition-all-300 absolute top-5 right-5 p-[3px] text-white">
              <i className="bi bi-x-lg text-stroke-medium pointer-events-none flex text-xl"></i>
            </button>
            <div className="py-12 flex items-center justify-center">
              <img src="/logo2.png" className="h-16 w-16" alt="logo" />
              <p
                className="font-bold text-2xl px-4"
                style={{ fontFamily: "'Audiowide', cursive" }}
              >
                TechSouqDubai
              </p>
            </div>
          </div>
          <nav className="h-full w-full overflow-auto bg-white">
            <form onSubmit={(e) => handleSubmit(e)} className="search">
              <div className="flex h-[40px] overflow-hidden shadow-lg border-gray-200 border-[1px] border-solid mb-4 rounded-[50px] bg-white">
                <input
                  className="w-full text-sm border-none py-[5px] bg-white pl-5 text-black focus:border-none focus:outline-none appearance-none search-bar placeholder-black"
                  type="search"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="px-3 text-black" type="submit">
                  <SearchOutlinedIcon />
                </button>
              </div>
            </form>
            <ul className="metismenu">
              <li className="border-b border-gray-200">
                <a className="flex select-none items-center p-2" href="/">
                  <i className="bi bi-house-door mr-3 flex text-xl text-primary-color"></i>
                  <span className="font-semibold">Home</span>
                </a>
              </li>
              <li className="border-b border-gray-200">
                <div className="metismenu-btn has-arrow flex cursor-pointer select-none items-center p-2">
                  <i className="bi bi-person mr-3 flex text-xl text-primary-color"></i>
                  <span className="font-semibold">My Account</span>
                </div>
                {!user ? (
                  <div className="metismenu-content mm-collapse">
                    <a className="ml-10 block p-1" href="/login">
                      Login
                    </a>
                  </div>
                ) : (
                  <div className="metismenu-content mm-collapse">
                    <a className="ml-10 block p-1" href="/profile">
                      Profile
                    </a>
                    <button
                      className="ml-10 block p-1"
                      onClick={logoutCurrentUser}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
              <li className="border-b border-gray-200">
                <div className="cursor-pointer p-2">
                  <div className="flex cursor-pointer items-center">
                    <a href="/wishlist">
                      <FavoriteBorderOutlinedIcon />
                      <span className="font-semibold">Wishlist</span>
                    </a>
                    <span className="badge ml-auto h-[22px] min-w-[22px] px-[6px]">
                      {wishlistProducts.length}
                    </span>
                  </div>
                </div>
              </li>
              <li className="border-b border-gray-200">
                <div
                  className="btn-open-modal cursor-pointer p-2"
                  data-target=".shopping-cart-modal"
                >
                  <div className="flex cursor-pointer items-center">
                    <a href="/cart">
                      <ShoppingCartOutlinedIcon />
                      <span className="font-semibold">Shopping Cart</span>
                    </a>
                    <span className="badge ml-auto h-[22px] min-w-[22px] px-[6px]">
                      {cartProducts.length}
                    </span>
                  </div>
                </div>
              </li>
              <li className="border-b border-gray-200 px-3">
                <span className="font-semibold">Categories</span>
              </li>
              {categories?.map((cat, idx) => (
                <li key={idx} className="border-b border-gray-200 px-9">
                  <a
                    className="flex select-none items-center p-2"
                    href={`/group/${cat.$id}`}
                  >
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
              <li className="border-b border-gray-200">
                <a
                  className="flex select-none items-center p-2"
                  href="faqs.html"
                >
                  <i className="bi bi-question-circle mr-3 flex text-xl text-primary-color"></i>
                  <span className="font-semibold">FAQ's</span>
                </a>
              </li>
              <li className="border-b border-gray-200">
                <a
                  className="flex select-none items-center p-2"
                  href="contact-us.html"
                >
                  <i className="bi bi-telephone mr-3 flex text-xl text-primary-color"></i>
                  <span className="font-semibold">Contact Us</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
