import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { getCategories } from "../../actions";

const MobileMenu = ({ menu, setMenu, categories }) => {
  return (
    <>
      <div className="md:hidden lg:hidden flex h-full w-full z-120 bg-black bg-opacity-50 items-center justify-center">
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
              <img src="logo.png" className="h-16 w-16" alt="logo" />
              <p className="font-bold text-2xl px-4">TechSouqDubai</p>
            </div>
          </div>
          <nav className="h-full w-full overflow-auto bg-white">
            <ul className="metismenu">
              <li className="border-b border-gray-200">
                <a
                  className="flex select-none items-center p-2"
                  href="index.html"
                >
                  <i className="bi bi-house-door mr-3 flex text-xl text-primary-color"></i>
                  <span className="font-semibold">Home</span>
                </a>
              </li>
              <li className="border-b border-gray-200">
                <div
                  className="metismenu-btn has-arrow flex cursor-pointer select-none items-center p-2"
                  aria-expanded="false"
                  role="menu"
                >
                  <i className="bi bi-person mr-3 flex text-xl text-primary-color"></i>
                  <span className="font-semibold">My Account</span>
                </div>
                <div className="metismenu-content mm-collapse">
                  <a
                    className="btn-open-modal ml-10 block p-1"
                    href="#"
                    data-tab="0"
                    data-target=".entry-modal"
                  >
                    Login
                  </a>
                  <a
                    className="btn-open-modal ml-10 block p-1"
                    href="#"
                    data-tab="1"
                    data-target=".entry-modal"
                  >
                    Sign Up
                  </a>
                </div>
              </li>
              <li className="border-b border-gray-200">
                <div
                  className="btn-open-modal cursor-pointer p-2"
                  data-target=".wishlist-modal"
                >
                  <div className="pointer-events-none flex cursor-pointer select-none items-center">
                    <i className="bi bi-heart mr-3 flex text-xl text-primary-color"></i>
                    <span className="font-semibold">Wishlist</span>
                    <span className="badge ml-auto h-[22px] min-w-[22px] px-[6px]">
                      0
                    </span>
                  </div>
                </div>
              </li>
              <li className="border-b border-gray-200">
                <div
                  className="btn-open-modal cursor-pointer p-2"
                  data-target=".shopping-cart-modal"
                >
                  <div className="pointer-events-none flex cursor-pointer select-none items-center">
                    <i className="bi bi-cart mr-3 flex text-xl text-primary-color"></i>
                    <span className="font-semibold">Shopping Cart</span>
                    <span className="badge ml-auto h-[22px] min-w-[22px] px-[6px]">
                      0
                    </span>
                  </div>
                </div>
              </li>
              <li className="border-b border-gray-200 px-3">
                <a
                  className="flex select-none items-center p-2"
                  href="faqs.html"
                >
                  <span className="font-semibold">Categories</span>
                </a>
              </li>
              {categories?.map((cat, idx) => (
                <li key={idx} className="border-b border-gray-200 px-9">
                  <a
                    className="flex select-none items-center p-2"
                    href="faqs.html"
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
