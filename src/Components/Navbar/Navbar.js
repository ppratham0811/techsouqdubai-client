import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <>
      <header class="relative z-30 bg-[#007999]">
        <div class="bg-secondary-color">
          <div class="container mx-auto grid grid-cols-4 gap-1 px-2 py-4 sm:px-8 lg:grid-cols-12 lg:gap-0">
            <div class="flex items-center order-1 col-span-2 lg:order-1 lg:col-span-3">
              <a href="index.html">
                <img className="w-8 h-8 mx-2" src="logo.png" alt="logo" />
              </a>
              <h3 className="text-white text-bold">TechSouqDubai</h3>
            </div>
            <div class="transition-all-300 order-3 col-span-4 mt-[10px] hidden self-center lg:order-2 lg:col-span-6 lg:mt-0 lg:block">
              <form class="search" action="#">
                <div class="flex h-[40px] overflow-hidden rounded-[50px]">
                  <input
                    class="w-full border-none bg-[#0084a6] py-[5px] pl-5 text-white focus:border-none focus:outline-none appearance-none search-bar placeholder-white"
                    type="search"
                    placeholder="Search..."
                  />
                  <button class="px-3 text-white" type="submit">
                    <SearchOutlinedIcon />
                  </button>
                </div>
              </form>
            </div>
            <div class="order-2 col-span-2 flex gap-2 self-center justify-self-end lg:order-3 lg:col-span-3 xl:gap-5">
              <div class="flex items-center lg:hidden">
                <button class="btn-search-mob p-[5px] text-white">
                  <SearchOutlinedIcon />
                </button>
              </div>
              <div class="flex items-center lg:hidden">
                <button
                  class="btn-open-modal text-white"
                  data-target=".menu-mob"
                >
                  <MenuOutlinedIcon />
                </button>
              </div>
              <div class="hidden items-center gap-5 text-white lg:flex">
                <div class="relative cursor:pointer">
                  <a
                    class="btn-open-modal"
                    data-target=".wishlist-modal"
                    href="javascript:void(0)"
                  >
                    <FavoriteBorderOutlinedIcon />
                  </a>
                  <span class="absolute bg-blue-500 top-0 right-[-6px] h-[15px] min-w-[15px] rounded-[50%] text-center text-sm">
                    0
                  </span>
                </div>
                <div class="relative cursor:pointer">
                  <a
                    class="btn-open-modal"
                    data-target=".shopping-cart-modal"
                    href="javascript:void(0)"
                  >
                    <ShoppingCartOutlinedIcon className="text-xl" />
                  </a>
                  <span class="absolute bg-blue-500 top-0 right-[-6px] h-[15px] min-w-[15px] p-0 rounded-[50%] text-center text-sm">
                    0
                  </span>
                </div>
              </div>

              <div class="group relative hidden lg:flex">
                <div class="flex cursor-pointer select-none items-center gap-1">
                  <span class="font-semibold text-white">My account</span>
                  <ArrowDropDownOutlinedIcon className="bi bi-caret-down-fill transition-all-300 flex rotate-0 text-sm text-white group-hover:rotate-180" />
                </div>
                <div class="transition-all-300 invisible absolute top-full z-30 w-[120%] pt-[10px] opacity-0 group-hover:visible group-hover:opacity-100">
                  <div class="relative">
                    <ul class="overflow-hidden rounded-md bg-white p-[6px]">
                      <li class="hover:font-semibold">
                        <a
                          href="#"
                          class="btn-open-modal"
                          data-tab="0"
                          data-target=".entry-modal"
                        >
                          <div class="pointer-events-none flex items-center gap-2 p-1">
                            <LoginOutlinedIcon className="bi bi-box-arrow-in-right flex text-xl text-primary-color" />
                            <span>Login</span>
                          </div>
                        </a>
                      </li>
                      <li class="hover:font-semibold">
                        <a
                          href="#"
                          class="btn-open-modal"
                          data-tab="1"
                          data-target=".entry-modal"
                        >
                          <div class="pointer-events-none flex items-center gap-2 p-1">
                            <PersonOutlineOutlinedIcon className="bi bi-person flex text-xl text-primary-color" />
                            <span>Sign up</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Menu></Menu>
      </header>
    </>
  );
};

export default Navbar;
