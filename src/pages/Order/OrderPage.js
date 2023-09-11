import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Heading from "../../Widgets/Heading";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, currentCartState } from "../../app/cartSlice";
import emailjs from "@emailjs/browser";
import {
  getAllProducts,
  getProductById,
  placeOrder,
  updateProductQuantity,
} from "../../actions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Loading from "../../utils/Loading";
import { selectUserFromState } from "../../app/userSlice";
import { useNavigate } from "react-router-dom";

const OrderPage = ({ items }) => {
  const currentUser = useSelector(selectUserFromState);

  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: currentUser.email.length > 0 ? currentUser.email : "",
    address: "",
    apt: "",
    city: "",
    postalCode: "",
    telephone: "",
    amount: 0.0,
    method: "COD",
    invoice: 0,
    products: "",
  });

  const currentCart = useSelector(currentCartState);

  const [cartTotal, setCartTotal] = useState(0);

  const [orderCompleted, setOrderCompleted] = useState(false);
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    let total = 0;
    let formProducts = [];
    let orderedProds = [];
    for (let c of currentCart) {
      orderedProds.push({ product: c.product, quantity: c.qty });
      formProducts.push(
        JSON.stringify({ product: c.product, quantity: c.qty })
      );
      total += c.qty * c.product.salePrice;
    }

    setOrderedProducts(orderedProds);
    setFormDetails({ ...formDetails, products: formProducts });
    setCartTotal(total);
  };
  useEffect(() => {
    if (currentCart && currentCart.length < 1) {
      navigate("/");
    } else {
      calculateSubtotal();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (toast.length > 0) {
        setToast("");
      }
    }, 2000);
  }, [toast]);

  function generateInvoiceNumber() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Combine the elements to form the invoice number.
    const invoiceNumber = `${year}${month}${day}${hours}${minutes}${seconds}`;

    return invoiceNumber;
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!formDetails.firstName) {
      setToast("Please enter your First Name");
      return;
    } else if (!formDetails.lastName) {
      setToast("Please enter your Last Name");
      return;
    } else if (!formDetails.email) {
      setToast("Please enter your email");
      return;
    } else if (!formDetails.address) {
      setToast("Please enter your address");
      return;
    } else if (!formDetails.city) {
      setToast("Please enter your city");
      return;
    } else if (!formDetails.postalCode) {
      setToast("Please enter your postal code");
      return;
    } else if (!formDetails.telephone) {
      setToast("Please enter your telephone");
      return;
    } else {
      setToast("");

      setLoading(true);
      const customer = formDetails.firstName + " " + formDetails.lastName;
      const address = `${formDetails.apt}, ${formDetails.address}, ${formDetails.city} - ${formDetails.postalCode}`;
      const invoice = generateInvoiceNumber();
      await placeOrder(
        {
          customer,
          address,
          email:
            currentUser.email.length > 0
              ? currentUser.email
              : formDetails.email,
          amount: cartTotal,
          method: formDetails.method,
          orderTime: new Date(),
          products: formDetails.products,
          invoice,
        },
        orderedProducts
      )
        .then(async (res) => {
          if (res.status) {
            // ********** SENDING EMAILS ************
            const serviceId = process.env.REACT_APP_EMAILJS_SERVICE;
            const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ORDERS;
            const tableRows = orderedProducts.map((prodObj, index) => {
              // orderedProducts array of prodObjs
              // prodObj = {product: , quantity: }
              const srNo = index + 1;
              const netAmount = prodObj.quantity * prodObj.product.salePrice;

              return `
                  <tr>
                    <td>${srNo}</td>
                    <td>${prodObj.product.title}</td>
                    <td>${prodObj.quantity}</td>
                    <td>${prodObj.product.salePrice}</td>
                    <td>${netAmount}</td>
                  </tr>
                `;
            });

            // Join the table rows into a single string
            const tableRowsHtml = `
                <html>
                <head>
                <style>
                  
                  body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                  }
                
                  
                  table {
                    width: 100%;
                    border-collapse: collapse;
                  }
                
                  
                  th {
                    background-color: #f2f2f2;
                    text-align: left;
                    padding: 8px;
                  }
                
                  
                  tr:nth-child(even) {
                    background-color: #f2f2f2;
                  }
                
                  
                  td {
                    padding: 8px;
                  }
                </style>
                </head>
                <body>
                
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${tableRows.join("")}
                  
                  </tbody>
                </table>
                
                </body>
                </html>
                `;

            const orderContent = {
              user_email: formDetails.email,
              to_name: customer,
              message:
                "Thank you for placing your order with TechSouqDubai. Please refer to the summary of your order",
              emailBody: tableRowsHtml,
              totalOrderAmount: cartTotal,
            };

            await emailjs
              .send(
                "service_78itxwa",
                templateId,
                orderContent,
                "xDU7Al3eXxSSqGs_e"
              )
              .then(
                (result) => {
                  console.log(result);
                },
                (error) => {
                  console.log(error);
                  return error;
                }
              );

            dispatch(clearCart());
            setLoading(false);
            setOrderCompleted(true);
          } else {
            setLoading(false);
            setToast(res.result);
          }
        })
        .catch((e) => console.error(e.message));
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div
        className={`fixed z-[999999] top-0 left-1/2 transform -translate-x-1/2 ${
          toast ? "top-2" : "translate-y-[-100%]"
        } transition-all duration-300`}
      >
        {toast.length > 0 && (
          <div className="bg-red-500 px-4 py-2 text-white rounded">
            <p>{toast}</p>
          </div>
        )}
      </div>
      <div className="bg-gray-100 px-2 sm:px-8">
        <Heading title="Checkout" />
        <div className="bg-white p-4 my-8">
          {!orderCompleted ? (
            <form className="grid grid-cols-12 gap-5 rounded-lg bg-white p-2 xs:p-8 mx-6">
              <div className="col-span-12 lg:col-span-7">
                <span className="text-lg font-semibold">Billing Details</span>
                <div className="grid grid-cols-12 gap-1 md:gap-2 pt-5">
                  <div className="col-span-6 xs:col-span-6">
                    <label className="flex flex-col">
                      <span className="text-sm">First Name</span>
                      <input
                        className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                        type="text"
                        value={formDetails.firstName}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div className="col-span-6 xs:col-span-6">
                    <label className="flex flex-col">
                      <span className="text-sm">Last Name</span>
                      <input
                        className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                        type="text"
                        value={formDetails.lastName}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div className="col-span-12">
                    <label className="flex flex-col">
                      <span className="text-sm">Email</span>
                      <input
                        className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                        type="text"
                        value={
                          currentUser?.email
                            ? currentUser.email
                            : formDetails.email
                        }
                        readonly={currentUser?.email?.length > 0}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            email: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div className="col-span-12 xs:col-span-12">
                    <label className="flex flex-col">
                      <span className="text-sm">Phone</span>
                      <input
                        className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                        type="text"
                        value={formDetails.telephone}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            telephone: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div className="col-span-12 xs:col-span-12">
                    <label className="flex flex-col">
                      <span className="text-sm">Address</span>
                      <input
                        className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                        type="text"
                        value={formDetails.address}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            address: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div className="col-span-12 xs:col-span-12">
                    <label className="flex flex-col">
                      <span className="text-sm">Apt, Suite, etc</span>
                      <input
                        className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                        type="text"
                        value={formDetails.apt}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            apt: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div className="col-span-6 xs:col-span-6">
                    <label className="flex flex-col">
                      <span className="text-sm">City</span>
                      <input
                        className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                        type="text"
                        value={formDetails.city}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            city: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>

                  <div className="col-span-6 xs:col-span-6">
                    <label className="flex flex-col">
                      <span className="text-sm">Postal Code</span>
                      <input
                        className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                        type="text"
                        value={formDetails.postalCode}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            postalCode: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>

                  <label className="col-span-12">
                    <span className="font-bold">
                      Payment Method: Cash On Delivery
                    </span>
                  </label>
                  <div className="col-span-12 flex flex-col items-center justify-center gap-5">
                    <a
                      className="transition-all-300 flex items-center gap-2 hover:text-primary"
                      href="/cart"
                    >
                      <span>Return to Shopping Cart</span>
                    </a>
                    <button
                      className="rounded-lg w-full bg-primary p-4 font-bold uppercase text-white"
                      type="submit"
                      onClick={onFormSubmit}
                    >
                      <span>Continue</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <div className="rounded-lg border-[1px] p-4">
                  <span className="mb-6 inline-block text-center text-lg font-bold">
                    Summary of your purchase:
                  </span>
                  {currentCart?.map((item, idx) => {
                    return (
                      <>
                        <div className="col-span-12">
                          <a
                            className="transition-all-300 flex  w-full items-center justify-between gap-5 bg-white p-2 hover:bg-gray-100"
                            href={`/products/${item.productId}`}
                          >
                            <div className="grid grid-cols-5   gap-2">
                              <div className="col-span-5 flex justify-center md:col-span-1 h-full">
                                <img
                                  src={item.product.images[0]}
                                  className="w-1/2 md:w-3/4 object-contain"
                                  alt=""
                                />
                              </div>
                              <div className="flex justify-center md:items-end col-span-5 md:col-span-4 w-full flex-col">
                                <h6 className="clamp-2 break-normal text-lg font-semibold">
                                  {item.product.title}
                                </h6>
                                <div className="flex gap-2">
                                  <div className="flex gap-1 leading-7">
                                    Qty:{" "}
                                    <span className="font-bold">
                                      {item.qty}
                                    </span>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="text-primary-color">
                                      Price:{" "}
                                      <span className="font-bold">{`${item.product.currency.toUpperCase()} ${
                                        item.product.salePrice
                                      }`}</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </>
                    );
                  })}
                  <div className="mt-2 flex justify-between border-t-2 border-gray-200 pt-4 text-xl font-bold uppercase">
                    <span>Total:</span>
                    <span>AED {cartTotal}</span>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <CheckCircleIcon className="text-primary text-4xl" />
              <span className="mb-4">Thank you for placing your order</span>
              <a
                className="transition-all-300 flex items-center gap-2 hover:text-primary my-2"
                href="/profile"
              >
                View Orders
              </a>
              <a
                className="transition-all-300 flex items-center gap-2 hover:text-primary my-2"
                href="/"
              >
                <span>Continue shopping</span>
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
