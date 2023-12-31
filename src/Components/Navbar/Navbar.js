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
import {
  getCategories,
  getCurrentUser,
  deleteCurrentSession,
  getNavLinks,
} from "../../actions";
import { currentCartState } from "../../app/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentWishlistState } from "../../app/wishlistSlice";
import { deleteUserState } from "../../app/userSlice";
import { store } from "../../app/persist";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(false);
  const cartProducts = useSelector(currentCartState);
  const wishlistProducts = useSelector(currentWishlistState);
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const loadAllCategories = async () => {
    await getNavLinks()
      .then((response) => {
        setCategories(response.documents);
      })
      .catch((e) => console.error());
  };

  const loadCurrentUser = async () => {
    const currentUser = await getCurrentUser();

    if (currentUser) {
      setUserData(currentUser);
      setUser(true);
    }
    return currentUser;
  };

  const logoutCurrentUser = async () => {
    await deleteCurrentSession().then(() => {
      setUser(false);
      dispatch(deleteUserState());
      console.log(store.getState());
      navigate("/login");
    });
  };

  useEffect(() => {
    loadAllCategories();
    loadCurrentUser();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate("/search", {
        state: {
          searchTerm: searchTerm,
        },
      });
      setSearchTerm("");
    }
  };
  /* font-family: 'Audiowide', cursive;
  font-family: 'Poppins', sans-serif; */
  return (
    <>
      <header className="sticky top-0 z-[400] left-0 bg-[#0b0d17] text-xl">
        <div className="flex w-full md:px-12 px-8">
          <div class="w-full justify-between grid grid-cols-4 gap-1 py-4 lg:grid-cols-12 lg:gap-0">
            <div className="flex items-center order-1 col-span-2 lg:order-1 lg:col-span-3">
              <img
                onClick={() => navigate("/")}
                className="md:w-10 w-8 cursor-pointer md:h-10 h-8 mr-2"
                src="/logo2_white.png"
                alt="logo"
              />
              <h1
                onClick={() => navigate("/")}
                className="text-white cursor-pointer hidden md:block md:text-xl lg:text-2xl text-bold"
                style={{ fontFamily: "'Audiowide', cursive" }}
              >
                TechSouqDubai
              </h1>
            </div>
            <div className="transition-all-300 order-3 col-span-4 mt-[10px] hidden self-center lg:order-2 lg:col-span-6 lg:mt-0 lg:block">
              <form onSubmit={(e) => handleSubmit(e)} className="search">
                <div className="flex h-[40px] overflow-hidden rounded-[50px] bg-white">
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                <div className="relative text-white cursor:pointer mx-4">
                  <a
                    className="btn-open-modal"
                    data-target=".shopping-cart-modal"
                    href="/cart"
                  >
                    <ShoppingCartOutlinedIcon className="text-xl" />
                  </a>
                  <span className="absolute bg-blue-500 top-0 right-[-6px] h-[15px] min-w-[15px] pb-[2px] rounded-[50%] text-center text-sm">
                    {cartProducts.length}
                  </span>
                </div>
                <button
                  className="btn-open-modal text-white"
                  data-target=".menu-mob"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    setMenu(true);
                  }}
                >
                  <MenuOutlinedIcon style={{ height: "2rem", width: "2rem" }} />
                </button>
              </div>
              <div className="hidden items-center gap-5 text-white lg:flex">
                <div className="relative cursor:pointer">
                  <a
                    className="btn-open-modal"
                    data-target=".wishlist-modal"
                    href="/wishlist"
                  >
                    <FavoriteBorderOutlinedIcon />
                  </a>
                  <span className="absolute bg-blue-500 top-0 right-[-6px] h-[15px] min-w-[15px] rounded-[50%] text-center text-sm">
                    {wishlistProducts.length}
                  </span>
                </div>
                <div className="relative cursor:pointer">
                  <a
                    className="btn-open-modal"
                    data-target=".shopping-cart-modal"
                    href="/cart"
                  >
                    <ShoppingCartOutlinedIcon className="text-xl" />
                  </a>
                  <span className="absolute bg-blue-500 top-0 right-[-6px] h-[15px] min-w-[15px] p-0 rounded-[50%] text-center text-sm">
                    {cartProducts.length}
                  </span>
                </div>
              </div>

              <div className="group relative hidden lg:flex">
                <div className="flex cursor-pointer select-none items-center gap-1">
                  {user ? (
                    <div className="rounded-full w-12 h-12 flex justify-center items-center bg-primary">
                      <span className="text-white">{userData?.name[0]}</span>
                    </div>
                  ) : (
                    <span className="font-semibold text-white">My account</span>
                  )}
                  <ArrowDropDownOutlinedIcon className="bi bi-caret-down-fill transition-all-300 flex rotate-0 text-sm text-white group-hover:rotate-180" />
                </div>
                <div className="transition-all-300 invisible absolute top-full z-30 right-0 pt-[10px] opacity-0 group-hover:visible group-hover:opacity-100">
                  <div className="relative">
                    <ul className=" rounded-md flex w-[160px] flex-col bg-white p-[6px]">
                      {user ? (
                        <>
                          <li key={1} className="hover:font-semibold">
                            <a href="/profile">
                              <div className="pointer-events-none flex items-center gap-2 p-1">
                                <LoginOutlinedIcon className="bi bi-box-arrow-in-right flex text-xl text-primary-color" />
                                <span>Profile</span>
                              </div>
                            </a>
                          </li>
                          <li
                            key={2}
                            className="cursor-pointer hover:font-semibold"
                          >
                            <button
                              onClick={(e) => logoutCurrentUser(e)}
                              className="flex items-center gap-2 p-1"
                            >
                              <LoginOutlinedIcon className="bi bi-box-arrow-in-right flex text-xl text-primary-color" />
                              <span>Log Out</span>
                            </button>
                          </li>
                        </>
                      ) : (
                        <li className="hover:font-semibold">
                          <a href="/login">
                            <div className="pointer-events-none flex items-center gap-2 p-1">
                              <LoginOutlinedIcon className="bi bi-box-arrow-in-right flex text-xl text-primary-color" />
                              <span>Login</span>
                            </div>
                          </a>
                        </li>
                      )}
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
