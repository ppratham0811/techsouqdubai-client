import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { getCategories } from "../../actions";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const [categories, setCategories] = useState([]);
  const loadAllCategories = async () => {
    await getCategories()
      .then((response) => {
        setCategories(response.documents);
        console.log(response.documents);
      })
      .catch((e) => console.error());
  };

  useEffect(() => {
    loadAllCategories();
  }, []);

  return (
    <>
      <header className="relative z-30 bg-primary text-xl">
        <div className="bg-secondary-color">
          <div className="container mx-auto grid grid-cols-4 gap-1 px-2 py-4 sm:px-8 lg:grid-cols-12 lg:gap-0">
            <div className="flex items-center order-1 col-span-2 lg:order-1 lg:col-span-3">
              <img className="w-8 h-8 mx-2" src="/logo.png" alt="logo" />
              <h3 className="text-white text-bold">TechSouqDubai</h3>
            </div>
            <div className="transition-all-300 order-3 col-span-4 mt-[10px] hidden self-center lg:order-2 lg:col-span-6 lg:mt-0 lg:block">
              <form className="search" action="#">
                <div className="flex h-[40px] overflow-hidden rounded-[50px] bg-white">
                  <input
                    className="w-full text-sm border-none py-[5px] bg-white pl-5 text-black focus:border-none focus:outline-none appearance-none search-bar placeholder-black"
                    type="search"
                    placeholder="Search..."
                  />
                  <button className="px-3 text-black" type="submit">
                    <SearchOutlinedIcon />
                  </button>
                </div>
              </form>
            </div>
            <div className="order-2 col-span-2 flex gap-2 self-center justify-self-end lg:order-3 lg:col-span-3 xl:gap-5">
              <div className="flex items-center lg:hidden">
                <button
                  className="btn-open-modal text-white"
                  data-target=".menu-mob"
                  onClick={() => setMenu(true)}
                >
                  <MenuOutlinedIcon />
                </button>
              </div>
              <div className="hidden items-center gap-5 text-white lg:flex">
                <div className="relative cursor:pointer">
                  <a
                    className="btn-open-modal"
                    data-target=".wishlist-modal"
                    href="javascript:void(0)"
                  >
                    <FavoriteBorderOutlinedIcon />
                  </a>
                  <span className="absolute bg-blue-500 top-0 right-[-6px] h-[15px] min-w-[15px] rounded-[50%] text-center text-sm">
                    0
                  </span>
                </div>
                <div className="relative cursor:pointer">
                  <a
                    className="btn-open-modal"
                    data-target=".shopping-cart-modal"
                    href="javascript:void(0)"
                  >
                    <ShoppingCartOutlinedIcon className="text-xl" />
                  </a>
                  <span className="absolute bg-blue-500 top-0 right-[-6px] h-[15px] min-w-[15px] p-0 rounded-[50%] text-center text-sm">
                    0
                  </span>
                </div>
              </div>

              <div className="group relative hidden lg:flex">
                <div className="flex cursor-pointer select-none items-center gap-1">
                  <span className="font-semibold text-white">My account</span>
                  <ArrowDropDownOutlinedIcon className="bi bi-caret-down-fill transition-all-300 flex rotate-0 text-sm text-white group-hover:rotate-180" />
                </div>
                <div className="transition-all-300 invisible absolute top-full z-30 w-[120%] pt-[10px] opacity-0 group-hover:visible group-hover:opacity-100">
                  <div className="relative">
                    <ul className="overflow-hidden rounded-md bg-white p-[6px]">
                      <li className="hover:font-semibold">
                        <a href="/login">
                          <div className="pointer-events-none flex items-center gap-2 p-1">
                            <LoginOutlinedIcon className="bi bi-box-arrow-in-right flex text-xl text-primary-color" />
                            <span>Login</span>
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

        <Menu />
      </header>

      {menu && (
        <MobileMenu menu={menu} setMenu={setMenu} categories={categories} />
      )}
    </>
  );
};

export default Navbar;
