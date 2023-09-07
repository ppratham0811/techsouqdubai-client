import { useEffect, useState } from "react";
import {
  deleteCurrentSession,
  getCurrentUser,
  getCurrentUserOrders,
} from "../../actions";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Heading from "../../Widgets/Heading";
import Loading from "../../utils/Loading";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookIcon from "@mui/icons-material/Book";
import LogoutIcon from "@mui/icons-material/Logout";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userOrders, setUserOrders] = useState([]);
  const getCurrentLoggedInUser = async () => {
    await getCurrentUser()
      .then((res) => {
        setUser(res);
        return res;
      })
      .catch((e) => e.message);
  };

  const getUserOrders = async () => {
    const userOrders = await getCurrentUserOrders(user.email);
    setUserOrders(userOrders);
  };

  const logoutUser = async () => {
    await deleteCurrentSession();
  };

  const [activeTab, setActiveTab] = useState("Account");

  useEffect(() => {
    getCurrentLoggedInUser();
  }, []);

  useEffect(() => {
    if (user) {
      getUserOrders();
    }
  }, [user]);

  if (!user) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <Heading title="My Account" />
        <div className="bg-gray-100 container mx-auto my-5 px-2 sm:px-8 h-full">
          <div className="tabs-container grid grid-cols-12 gap-2 bg-white h-full rounded-lg my-10 mx-6">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col items-center gap-5 rounded bg-white p-5">
                <div className="flex flex-col items-center">
                  <div className="bg-primary text-white rounded-[50%] flex items-center justify-center h-16 w-16">
                    <span className="text-4xl text-center">{user.name[0]}</span>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="block font-bold">{user.name}</span>
                  </div>
                </div>
                <ul className="w-full text-sm">
                  <li className="btn-tabs tab-active-2 transition-all-300 active border-t hover:bg-gray-100">
                    <button
                      className="flex items-center gap-2 px-1 py-2"
                      onClick={() => setActiveTab("Account")}
                    >
                      <AccountCircleIcon className="text-primary" />
                      <span>My Account</span>
                    </button>
                  </li>
                  <li className="btn-tabs tab-active-2 transition-all-300 border-t hover:bg-gray-100">
                    <button
                      className="flex items-center gap-2 px-1 py-2"
                      onClick={() => setActiveTab("Orders")}
                    >
                      <BookIcon className="text-primary" />
                      <span>My Orders</span>
                    </button>
                  </li>

                  <li className="transition-all-300 border-t hover:bg-gray-100">
                    <button
                      className="flex items-center gap-2 px-1 py-2"
                      onClick={logoutUser}
                    >
                      <LogoutIcon className="text-primary" />
                      <span>Log out</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {activeTab === "Account" && (
              <div className="tabs-content col-span-12 lg:col-span-8">
                <div className="tab-content active flex h-full flex-col gap-5 rounded bg-white p-5">
                  <span className="block text-xl font-bold">My Account</span>
                  <form className="grid grid-cols-12 gap-2" action="#">
                    <div className="col-span-12 xs:col-span-6">
                      <label className="flex flex-col text-sm">
                        Name
                        <input
                          className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                          type="text"
                          value={user.name}
                        />
                      </label>
                    </div>
                    <div className="col-span-12">
                      <label className="flex flex-col text-sm">
                        Email
                        <input
                          className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                          type="text"
                          value={user.email}
                          required=""
                        />
                      </label>
                    </div>
                    {/* <div className="col-span-12">
                      <label className="flex flex-col text-sm">
                        Address
                        <textarea
                          className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                          type="text"
                          value={user.address}
                          required=""
                        />
                      </label>
                    </div> */}
                  </form>
                </div>
              </div>
            )}
            {activeTab === "Orders" && (
              <div className="tabs-content col-span-12 lg:col-span-8">
                <div className="tab-content active flex h-full flex-col gap-5 rounded bg-white p-5">
                  {userOrders.length > 0 ? (
                    userOrders.map((order, idx) => {
                      const productsOrdered = [];
                      for (let prod of order.products) {
                        productsOrdered.push(JSON.parse(prod));
                      }
                      return (
                        <div class="mix mix-main mix-processing col-span-12">
                          <a
                            class="btn-open-modal transition-all-300 relative block p-4 hover:bg-gray-100"
                            href={`/orders/${order.invoice}`}
                          >
                            <div class="pointer-events-none flex flex-col gap-5 sm:flex-row">
                              <div class="flex flex-col justify-between">
                                <span class="clamp-2 break-all text-lg font-semibold">
                                  {order.invoice}
                                </span>
                                <div class="my-1 flex items-center gap-1 text-xs">
                                  <i class="bi bi-clock flex"></i>
                                  <span>{order.orderTime}</span>
                                </div>
                              </div>
                              <div class="mt-auto flex flex-col sm:ml-auto">
                                <span class="whitespace-nowrap text-xs font-light">
                                  Total Payment
                                </span>
                                <span class="text-sm font-semibold">
                                  AED {order.amount}
                                </span>
                              </div>
                              <span class="absolute top-0 right-0 m-2 rounded-xl bg-yellow-200 py-px px-2 text-sm text-yellow-500">
                                {order.status}
                              </span>
                            </div>
                          </a>
                        </div>
                      );
                    })
                  ) : (
                    <div className="font-bold text-4xl">No Orders yet</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
