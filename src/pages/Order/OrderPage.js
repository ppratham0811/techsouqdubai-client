import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Heading from "../../Widgets/Heading";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { currentCartState } from "../../app/cartSlice";
import emailjs from "@emailjs/browser";
import { placeOrder } from "../../actions";

const OrderPage = ({ items }) => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
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

  const calculateSubtotal = () => {
    let total = 0;
    let products = [];
    for (let c of currentCart) {
      products.push(JSON.stringify({ product: c.product, quantity: c.qty }));
      total += c.qty * c.product.salePrice;
    }

    setFormDetails({ ...formDetails, products: products });
    setCartTotal(total);
  };

  useEffect(() => {
    calculateSubtotal();
  }, []);

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
    const customer = formDetails.firstName + " " + formDetails.lastName;
    const address = `${formDetails.apt}, ${formDetails.address}, ${formDetails.city} - ${formDetails.postalCode}`;
    const invoice = generateInvoiceNumber();
    console.log(cartTotal);
    await placeOrder({
      customer,
      address,
      email: formDetails.email,
      amount: cartTotal,
      method: formDetails.method,
      orderTime: new Date(),
      products: formDetails.products,
      invoice,
    });
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE,
      templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ORDERS;
    const orderContent = {
      user_email: "ppratham0811@gmail.com",
      to_name: customer,
      message: "Order Placed successfully",
    };
    await emailjs
      .send(serviceId, templateId, orderContent, "xDU7Al3eXxSSqGs_e")
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log(error);
          return error;
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 px-2 sm:px-8">
        <Heading title="Checkout" />
        <div className="bg-white p-4 my-8">
          <form className="grid grid-cols-12 gap-5 rounded-lg bg-white p-2 xs:p-8 mx-6">
            <div className="col-span-12 lg:col-span-8">
              <span className="text-lg font-semibold">Billing Details</span>
              <div className="grid grid-cols-12 gap-5 pt-5">
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
                      value={formDetails.email}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          email: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
                <div className="col-span-8 xs:col-span-8">
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
                <div className="col-span-4 xs:col-span-4">
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
                <div className="col-span-4 xs:col-span-6">
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

                <div className="col-span-4 xs:col-span-6">
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
                <div className="col-span-4 xs:col-span-6">
                  <label className="flex flex-col">
                    <span className="text-sm">Telephone</span>
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
                <label className="col-span-12">
                  <span className="font-bold">
                    Payment Method: Cash On Delivery
                  </span>
                </label>
                <div className="col-span-12 flex flex-wrap justify-between gap-5">
                  <a
                    className="transition-all-300 flex items-center gap-2 hover:text-primary"
                    href="/cart"
                  >
                    <span>Return to Shopping Cart</span>
                  </a>
                  <button
                    className="rounded-lg bg-primary p-4 font-bold uppercase text-white"
                    type="submit"
                    onClick={onFormSubmit}
                  >
                    <span>Continue</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="rounded-lg border-[1px] p-4">
                <span className="mb-6 inline-block text-center text-lg font-bold">
                  Summary of your purchase:
                </span>
                {currentCart?.map((item, idx) => {
                  return (
                    <>
                      <div className="col-span-12">
                        <a
                          className="transition-all-300 flex h-[100px] w-full items-center justify-between gap-5 bg-white p-2 hover:bg-gray-100"
                          href={`/products/${item.productId}`}
                        >
                          <div className="flex w-full flex-col">
                            <h6 className="clamp-2 break-all text-lg font-semibold">
                              {item.product.title}
                            </h6>
                            <div className="flex gap-2">
                              <div className="font-bold flex gap-1 leading-7">
                                Qty: {item.qty}
                              </div>
                              <div className="flex items-center">
                                <span className="font-bold text-primary-color">
                                  Price:{" "}
                                  {`${item.product.currency} ${item.product.salePrice}`}
                                </span>
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
                  <span>{cartTotal}</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
