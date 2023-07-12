import "./Dashboard.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaidIcon from "@mui/icons-material/Paid";
import HttpsIcon from "@mui/icons-material/Https";
import HelpIcon from "@mui/icons-material/Help";
import Products from "./Products/Products";
import { useState } from "react";
import { Carousel, initTE } from "tw-elements";
import Categories from "./Categories/Categories";

initTE({ Carousel });

const Dashboard = () => {
  const [products, setProducts] = useState({});
  return (
    <>
      <div class="banners-section container mx-auto my-5 px-2 sm:px-8">
        <div class="grid grid-cols-12 gap-5">
          <div class="swiper-container col-span-12 overflow-hidden rounded-lg md:col-span-8">
            <div class="swiper swiper-banner group relative flex items-center swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
              <div
                class="swiper-wrapper max-h-[377px]"
                id="swiper-wrapper-545eccdb5ac9fef9"
                aria-live="off"
                // style="transition-duration: 0ms;"
              >
                <div
                  class="swiper-slide swiper-slide-next"
                  role="group"
                >
                  <img src="playyourway.jpg" alt="banner 2" className="h-full w-full" />
                </div>
              </div>
            </div>
          </div>
          <div class="group relative col-span-4 hidden overflow-hidden rounded-lg md:block">
            <div class="overlay-gradient absolute z-[1] h-full w-full"></div>
            <img
              class="transition-all-300 h-full w-full object-cover hover:transform group-hover:scale-110"
              src="armedpc.jpg"
              alt="banner-img"
            />
            <div class="absolute top-0 left-0 flex h-full w-full items-center">
              <div class="z-[2] p-6">
                <h3 class="text-lg font-bold uppercase text-white drop-shadow-xl">
                  Armed pc gamer
                </h3>
                <p class="my-5 text-white drop-shadow-md">
                  Choose your pc and play!
                </p>
                <a
                  class="btn-effect inline-block rounded-lg bg-blue-500 py-2 px-3 text-white"
                  href="#"
                >
                  <span>Shop now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="information-section container mx-auto my-5 px-2 sm:px-8">
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-12 flex sm:col-span-6 lg:col-span-3">
            <div class="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div class="rounded-full border-2">
                <LocalShippingIcon />
              </div>
              <div>
                <h6 class="font-bold capitalize">Free shipping</h6>
                <p class="break-all text-sm text-gray-400">Orders over $100</p>
              </div>
            </div>
          </div>
          <div class="col-span-12 flex sm:col-span-6 lg:col-span-3">
            <div class="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div class="rounded-full border-2">
                <PaidIcon />
              </div>
              <div>
                <h6 class="font-bold capitalize">Money back</h6>
                <p class="break-all text-sm text-gray-400">With a 30 day</p>
              </div>
            </div>
          </div>
          <div class="col-span-12 flex sm:col-span-6 lg:col-span-3">
            <div class="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div class="rounded-full border-2">
                <HttpsIcon />
              </div>
              <div>
                <h6 class="font-bold capitalize">Secure payment</h6>
                <p class="break-all text-sm text-gray-400">Secured payment</p>
              </div>
            </div>
          </div>
          <div class="col-span-12 flex sm:col-span-6 lg:col-span-3">
            <div class="transition-all-300 flex w-full items-center gap-4 rounded-lg bg-white p-5 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div class="rounded-full border-2">
                <HelpIcon />
              </div>
              <div>
                <h6 class="font-bold capitalize">Online support</h6>
                <p class="break-all text-sm text-gray-400">Support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Products title="Offers" products={products} />

      <Products title="Notebooks" products={products} />

      <Products title="Categories" products={products} />

      <Categories />
    </>
  );
};

export default Dashboard;
