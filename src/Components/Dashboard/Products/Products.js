import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

/* ########## OFFERS ########## */
const Products = ({ title, products }) => {
  return (
    <>
      <div className="liner-container mt-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
        <h1 className="mb-[-2px] inline-block border-b-2 border-sky-500 pb-3 text-2xl font-bold uppercase">
          {title}
        </h1>
      </div>
      <div className="w-full first-letter:grid grid-cols-1 md:grid-cols-full mx-auto my-5 gap-2 px-2 sm:px-8">
        {/* <div className="group relative my-5 hidden overflow-hidden rounded-l-lg xl:block">
          <img
            className="transition-all-300 h-full w-[50%] object-cover hover:transform group-hover:scale-110"
            src="smartphones.jpg"
            alt="banner-img"
          />
          <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="z-[2] p-5">
              <h3 className="text-lg font-bold uppercase text-white drop-shadow-xl">
                Smartphones
              </h3>
              <p className="my-5 text-white drop-shadow-md">
                Choose your smartphone now!
              </p>
              <a
                className="btn-effect inline-block rounded-lg bg-blue-500 py-2 px-3 text-white"
                href="#"
              >
                <span>Show more</span>
              </a>
            </div>
          </div>
        </div> */}
        <div className="swiper-container">
          <div className="swiper swiper-cards group relative lg:flex items-center py-5 swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden md:grid-cols-1 md:grid md:col-span-1">
            <div
              className="swiper-wrapper mx-4 sm:col-span-full"
              id="swiper-wrapper-ef2d6c9ac9163c76"
              aria-live="off"
              // style="transition-duration: 0ms; transform: translate3d(-1585px, 0px, 0px);"
            >
              <div
                className="swiper-slide h-auto"
                // style="width: 297px; margin-right: 20px;"
                role="group"
                aria-label="3 / 8"
                data-swiper-slide-index="2"
              >
                <div className="card-container transition-all-300 translateY-2 relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md hover:z-[2] hover:shadow-xl">
                  <div className="absolute top-[10px] right-[10px]">
                    <div className="p-[2px]">
                      <a
                        className="tippy tippy-left-wishlist btn-wishlist transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[rgba(0,0,0,.3)] hover:bg-primary-hover"
                        href="javascript:void(0)"
                      >
                        <FavoriteBorderIcon className="text-white" />
                      </a>
                    </div>
                    <div className="p-[2px]">
                      <a
                        className="tippy tippy-left-card-view btn-open-modal transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-[rgba(0,0,0,.3)] hover:bg-primary-hover"
                        href="javascript:void(0)"
                        data-target=".quick-view-modal"
                      >
                        <RemoveRedEyeOutlinedIcon className="text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-blue-500">
                    <span className="text-md text-center font-semibold uppercase text-white">
                      25% Off
                    </span>
                  </div>
                  <div className="h-[190px] overflow-hidden rounded-lg">
                    <a href="#">
                      <img
                        className="object-contain h-full w-full"
                        src="mousepadhyperx.jpg"
                        alt="product"
                      />
                    </a>
                  </div>
                  <div className="my-2 flex justify-between">
                    <div>
                      <span className="rounded-md bg-green-300 py-1 px-2 text-xs font-bold uppercase text-white">
                        instock
                      </span>
                    </div>
                  </div>
                  <div className="my-1">
                    <a className="clamp break-all font-medium" href="#">
                      Mousepad Hyperx Fury S Pro Speed
                    </a>
                  </div>
                  <div className="my-1">
                    <p className="clamp-2 text-sm text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque culpa, odio, qui praesentium dignissimos eaque
                      dolorum porro alias neque, eius animi ipsa voluptates.
                      Optio repellat tempora voluptas, dolores ipsam ad!
                    </p>
                  </div>
                  <div className="my-1">
                    <span className="text-lg font-bold">$37.00</span>
                    <span className="text-sm text-primary-color line-through">
                      $50.00
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      className="btn-effect transition-all-300 flex w-full items-center justify-center rounded-lg bg-blue-500 p-2"
                      href="#"
                    >
                      <span className="font-bold uppercase text-white">
                        View details
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-wrapper mx-4"
              id="swiper-wrapper-ef2d6c9ac9163c76"
              aria-live="off"
              // style="transition-duration: 0ms; transform: translate3d(-1585px, 0px, 0px);"
            >
              <div
                className="swiper-slide h-auto"
                // style="width: 297px; margin-right: 20px;"
                role="group"
                aria-label="3 / 8"
                data-swiper-slide-index="2"
              >
                <div className="card-container transition-all-300 translateY-2 relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md hover:z-[2] hover:shadow-xl">
                  <div className="absolute top-[10px] right-[10px]">
                    <div className="p-[2px]">
                      <a
                        className="tippy tippy-left-wishlist btn-wishlist transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[rgba(0,0,0,.3)] hover:bg-primary-hover"
                        href="javascript:void(0)"
                      >
                        <FavoriteBorderIcon className="text-white" />
                      </a>
                    </div>
                    <div className="p-[2px]">
                      <a
                        className="tippy tippy-left-card-view btn-open-modal transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-[rgba(0,0,0,.3)] hover:bg-primary-hover"
                        href="javascript:void(0)"
                        data-target=".quick-view-modal"
                      >
                        <RemoveRedEyeOutlinedIcon className="text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-blue-500">
                    <span className="text-md text-center font-semibold uppercase text-white">
                      25% Off
                    </span>
                  </div>
                  <div className="h-[190px] overflow-hidden rounded-lg">
                    <a href="#">
                      <img
                        className="object-contain h-full w-full"
                        src="msi-stealth.png"
                        alt="product"
                      />
                    </a>
                  </div>
                  <div className="my-2 flex justify-between">
                    <div>
                      <span className="rounded-md bg-green-300 py-1 px-2 text-xs font-bold uppercase text-white">
                        instock
                      </span>
                    </div>
                  </div>
                  <div className="my-1">
                    <a className="clamp break-all font-medium" href="#">
                      MSI Stealth
                    </a>
                  </div>
                  <div className="my-1">
                    <p className="clamp-2 text-sm text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque culpa, odio, qui praesentium dignissimos eaque
                      dolorum porro alias neque, eius animi ipsa voluptates.
                      Optio repellat tempora voluptas, dolores ipsam ad!
                    </p>
                  </div>
                  <div className="my-1">
                    <span className="text-lg font-bold">$400.00</span>
                    <span className="text-sm text-primary-color line-through">
                      $500.00
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      className="btn-effect transition-all-300 flex w-full items-center justify-center rounded-lg bg-blue-500 p-2"
                      href="#"
                    >
                      <span className="font-bold uppercase text-white">
                        View details
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-wrapper mx-4"
              id="swiper-wrapper-ef2d6c9ac9163c76"
              aria-live="off"
              // style="transition-duration: 0ms; transform: translate3d(-1585px, 0px, 0px);"
            >
              <div
                className="swiper-slide h-auto"
                // style="width: 297px; margin-right: 20px;"
                role="group"
                aria-label="3 / 8"
                data-swiper-slide-index="2"
              >
                <div className="card-container transition-all-300 translateY-2 relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md hover:z-[2] hover:shadow-xl">
                  <div className="absolute top-[10px] right-[10px]">
                    <div className="p-[2px]">
                      <a
                        className="tippy tippy-left-wishlist btn-wishlist transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[rgba(0,0,0,.3)] hover:bg-primary-hover"
                        href="javascript:void(0)"
                      >
                        <FavoriteBorderIcon className="text-white" />
                      </a>
                    </div>
                    <div className="p-[2px]">
                      <a
                        className="tippy tippy-left-card-view btn-open-modal transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-[rgba(0,0,0,.3)] hover:bg-primary-hover"
                        href="javascript:void(0)"
                        data-target=".quick-view-modal"
                      >
                        <RemoveRedEyeOutlinedIcon className="text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-blue-500">
                    <span className="text-md text-center font-semibold uppercase text-white">
                      25% Off
                    </span>
                  </div>
                  <div className="h-[190px] overflow-hidden rounded-lg">
                    <a href="#">
                      <img
                        className="object-contain h-full w-full"
                        src="macbook-pro.jpg"
                        alt="product"
                      />
                    </a>
                  </div>
                  <div className="my-2 flex justify-between">
                    <div>
                      <span className="rounded-md bg-green-300 py-1 px-2 text-xs font-bold uppercase text-white">
                        instock
                      </span>
                    </div>
                  </div>
                  <div className="my-1">
                    <a className="clamp break-all font-medium" href="#">
                      Apple Macbook Pro
                    </a>
                  </div>
                  <div className="my-1">
                    <p className="clamp-2 text-sm text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque culpa, odio, qui praesentium dignissimos eaque
                      dolorum porro alias neque, eius animi ipsa voluptates.
                      Optio repellat tempora voluptas, dolores ipsam ad!
                    </p>
                  </div>
                  <div className="my-1">
                    <span className="text-lg font-bold">$899.00</span>
                    <span className="text-sm text-primary-color line-through">
                      $999.00
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      className="btn-effect transition-all-300 flex w-full items-center justify-center rounded-lg bg-blue-500 p-2"
                      href="#"
                    >
                      <span className="font-bold uppercase text-white">
                        View details
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Products;
