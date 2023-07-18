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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 m-4">
        {products?.map((prod, idx) => {
          return (
            <>
              <div className="">
                <div className="card-container transition-all-300 translateY-2 relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md hover:z-[2] hover:shadow-xl">
                  <div className="absolute top-[10px] right-[10px]">
                    <div className="p-[2px]">
                      <a
                        className="tippy tippy-left-wishlist btn-wishlist transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-400 text-white hover:bg-primary-hover"
                        href="javascript:void(0)"
                      >
                        <FavoriteBorderIcon />
                      </a>
                    </div>
                    <div className="p-[2px]">
                      <a
                        className="tippy tippy-left-card-view btn-open-modal transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-gray-400 text-white hover:bg-primary-hover"
                        href="javascript:void(0)"
                        data-target=".quick-view-modal"
                      >
                        <RemoveRedEyeOutlinedIcon />
                      </a>
                    </div>
                  </div>
                  <div className="h-[190px] overflow-hidden rounded-lg">
                    <a href="#">
                      <img
                        className="object-contain h-full w-full"
                        src={prod.image}
                        alt="product"
                      />
                    </a>
                  </div>
                  <div className="my-1">
                    <a className="clamp break-all font-medium" href="#">
                      {prod.name}
                    </a>
                  </div>
                  <div className="my-1">
                    <p className="clamp-2 text-sm text-gray-400">{prod.desc}</p>
                  </div>

                  <div className="mt-auto">
                    <a
                      className="btn-effect transition-all-300 flex w-full items-center justify-center rounded-lg bg-primary p-2"
                      href="#"
                    >
                      <span className="font-bold uppercase text-white">
                        View details
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
