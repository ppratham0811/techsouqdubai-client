// import "./Dashboard.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaidIcon from "@mui/icons-material/Paid";
import HttpsIcon from "@mui/icons-material/Https";
import HelpIcon from "@mui/icons-material/Help";
import Products from "./Products/Products";
import Categories from "./Categories/Categories";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import CarouselImages from "./CarouselImages";
import ContactQuery from "../ContactQuery/ContactQuery";

const Dashboard = ({ products, categories }) => {
  return (
    <>
      <Navbar />

      <ContactQuery />
      <div className="mx-auto my-5 md:px-12 px-8">
        <div className="grid grid-cols-12 h-[600px] gap-4 w-full">
          <div className="col-span-12 lg:col-span-8 shadow-lg">
            {/* Carousel */}
            <CarouselImages />
          </div>
          <div className="group relative col-span-12 lg:col-span-4 overflow-hidden rounded-lg md:block shadow-lg">
            <div className="overlay-gradient absolute z-[1] h-full w-full"></div>
            <img
              className="transition-all duration-300 h-full w-full object-cover hover:transform group-hover:scale-110"
              src="armedpc.jpg"
              alt="banner-img"
            />
            <div className="absolute top-0 left-0 flex h-full w-full items-center">
              <div className="z-[2] p-6">
                <h3 className="text-lg font-bold uppercase text-white drop-shadow-xl">
                  Armed pc gamer
                </h3>
                <p className="my-5 text-white drop-shadow-md">
                  Choose your pc and play!
                </p>
                <a
                  className="btn-effect inline-block rounded-lg bg-blue-500 py-2 px-3 text-white"
                  href="#"
                >
                  <span>Shop now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="information-section container mx-auto my-5 px-2 sm:px-8">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 flex sm:col-span-6 lg:col-span-3 shadow-lg mx-4 lg:mr-4 rounded-lg">
            <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div className="rounded-full border-2 p-2">
                <LocalShippingIcon className="text-primary" />
              </div>
              <div>
                <h6 className="font-bold capitalize">Free shipping</h6>
                <p className="break-all text-sm text-gray-400">
                  Orders over $100
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex sm:col-span-6 lg:col-span-3 shadow-lg mx-4 rounded-lg">
            <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div className="rounded-full border-2 p-2">
                <PaidIcon className="text-primary" />
              </div>
              <div>
                <h6 className="font-bold capitalize">Money back</h6>
                <p className="break-all text-sm text-gray-400">With a 30 day</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex sm:col-span-6 lg:col-span-3 shadow-lg mx-4 rounded-lg">
            <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div className="rounded-full border-2 p-2">
                <HttpsIcon className="text-primary" />
              </div>
              <div>
                <h6 className="font-bold capitalize">Secure payment</h6>
                <p className="break-all text-sm text-gray-400">
                  Secured payment
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex sm:col-span-6 lg:col-span-3 shadow-lg mx-4 lg:ml-4 rounded-lg">
            <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div className="rounded-full border-2 p-2">
                <HelpIcon className="text-primary" />
              </div>
              <div>
                <h6 className="font-bold capitalize">Online support</h6>
                <p className="break-all text-sm text-gray-400">Support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {categories.map((cat, idx) => {
        let relevantProducts = [];
        for (let prod of products) {
          if (prod.category.$id === cat.$id) {
            relevantProducts.push(prod);
          }
        }

        if (relevantProducts.length)
          return <Products title={cat.name} products={relevantProducts} />;
      })}

      {/* <Products title="Categories" products={categories} /> */}

      <Categories />

      <Footer />
    </>
  );
};

export default Dashboard;
