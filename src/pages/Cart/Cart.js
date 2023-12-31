import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { currentCartState, removeFromCart } from "../../app/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../app/persist";
import Loading from "../../utils/Loading";
import { updateQty } from "../../app/cartSlice";
import Heading from "../../Widgets/Heading";

const Cart = () => {
  const cartProducts = useSelector(currentCartState);
  const [cartTotal, setCartTotal] = useState(0);
  const [quote, setQuote] = useState(false);
  const [toast, setToast] = useState("");
  const dispatch = useDispatch();
  const calculateSubtotal = () => {
    let total = 0;
    for (let c of cartProducts) {
      if (c.contactForPrice) {
        setQuote(true);
        break;
      } else {
        total += c.qty * c.product.salePrice;
      }
    }
    if (!quote) {
      setCartTotal(total);
    }
  };
  useEffect(() => {
    calculateSubtotal();
  }, [cartProducts]);

  useEffect(() => {
    setTimeout(() => {
      if (toast.length > 0) {
        setToast("");
      }
    }, 2000);
  }, [toast]);

  const handleQuantityUpdate = (productObj, qty) => {
    if (qty <= productObj.product.quantity && qty > 0) {
      dispatch(updateQty({ productId: productObj.productId, qty }));
    } else {
      setToast(`Max quantity: ${productObj.product.quantity}`);
    }
  };

  const handleDeleteProductFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    console.log("store: ", store.getState());
    console.log(cartProducts);
  };

  if (!cartProducts) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 px-2 sm:px-8">
        <Heading title="Your Cart" />
        <div className="grid grid-cols-12 gap-5 my-10 rounded-lg bg-white p-10 xs:p-5">
          <div className="col-span-12 lg:col-span-8">
            {/* Mobile Screen view */}
            {cartProducts ? (
              cartProducts.map((prodObj, idx) => {
                return (
                  <div
                    key={idx}
                    className="transition-all-300 flex w-full flex-col gap-2 p-2 hover:bg-gray-100 xs:flex-row lg:hidden"
                  >
                    <div className="content flex items-center">
                      <div className="flex items-center">
                        <div className="h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-lg border">
                          <img
                            className="h-full w-full object-cover"
                            src={`${prodObj.product.images[0]}`}
                            alt="product"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-2 sm:flex-row">
                      <div className="flex w-full flex-col gap-2">
                        <div className="content">
                          <div className="flex flex-col">
                            <span className="text-xs font-light xs:hidden">
                              Product Name
                            </span>
                            <a
                              className="clamp-2 break-all font-bold"
                              href={`/products/${prodObj.product.$id}`}
                            >
                              {prodObj.product.title}
                            </a>
                          </div>
                        </div>
                        <div className="content">
                          <div className="flex flex-col">
                            <span className="text-xs font-light lg:hidden">
                              Unit Price
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-primary">
                                AED {prodObj.product.salePrice}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="flex flex-col">
                            <span className="text-xs font-light">Subtotal</span>
                            <span className="font-bold text-primary">
                              AED {prodObj.product.salePrice * prodObj.qty}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="content flex items-center">
                        <div className="flex items-center gap-x-4 gap-y-1">
                          <div className="flex flex-col">
                            <span className="text-xs font-light">Quantity</span>
                            <div className="quantity inline-flex rounded-lg bg-white shadow">
                              <select
                                className="quantity-value input-number w-16 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:border-none focus:ring-0"
                                value={prodObj.qty}
                                onChange={(e) =>
                                  handleQuantityUpdate(prodObj, e.target.value)
                                }
                              >
                                {Array(prodObj.product.quantity)
                                  .fill("")
                                  .map((qty, index) => {
                                    return (
                                      <option value={index + 1}>
                                        {index + 1}
                                      </option>
                                    );
                                  })}
                              </select>
                            </div>
                          </div>
                          <div
                            className="transition-all-300 cursor-pointer text-slate-400 hover:text-primary"
                            onClick={() =>
                              handleDeleteProductFromCart(prodObj.productId)
                            }
                          >
                            <DeleteForeverIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No Items Yet...Continue Shopping</div>
            )}

            {/* Large Screen view */}
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[800px] text-left">
                <thead>
                  <tr>
                    <th></th>
                    <th className="p-2">Product Name</th>
                    <th className="p-2">Unit Price</th>
                    <th className="p-2">Quantity</th>
                    <th className="p-2">Subtotal</th>
                  </tr>
                </thead>
                {cartProducts ? (
                  cartProducts.map((prodObj, idx) => {
                    return (
                      <tbody>
                        <tr className="hover:bg-gray-100">
                          <td className="p-2">
                            <div className="h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-lg border">
                              <img
                                className="h-full w-full object-cover"
                                src={`${prodObj.product.images[0]}`}
                                alt="product"
                              />
                            </div>
                          </td>
                          <td className="p-2">
                            <a
                              className="clamp-2 break-all font-bold"
                              href={`/products/${prodObj.product.$id}`}
                            >
                              {prodObj.product.title}
                            </a>
                          </td>
                          <td className="p-2">
                            <span className="font-bold text-primary">
                              AED {prodObj.product.salePrice}
                            </span>
                          </td>
                          <td className="p-2">
                            <div className="quantity inline-flex rounded-lg bg-white shadow">
                              <select
                                className="quantity-value input-number w-16 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:border-none focus:ring-0"
                                value={prodObj.qty}
                                onChange={(e) =>
                                  handleQuantityUpdate(prodObj, e.target.value)
                                }
                              >
                                {Array(prodObj.product.quantity)
                                  .fill("")
                                  .map((qty, index) => {
                                    return (
                                      <option value={index + 1}>
                                        {index + 1}
                                      </option>
                                    );
                                  })}
                              </select>
                              {/* <input
                                className="quantity-value input-number w-12 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:border-none focus:ring-0"
                                type="number"
                                min={1}
                                max={prodObj.product.quantity}
                                onChange={(e) =>
                                  handleQuantityUpdate(prodObj, e.target.value)
                                }
                                value={prodObj.qty}
                              /> */}
                            </div>
                          </td>
                          <td className="p-2">
                            <span className="font-bold text-primary">
                              AED {prodObj.product.salePrice * prodObj.qty}
                            </span>
                          </td>
                          <td className="p-2">
                            <button
                              className="tippy tippy-remove btn-delete transition-all-300 text-slate-400 hover:text-primary"
                              onClick={() =>
                                handleDeleteProductFromCart(prodObj.productId)
                              }
                            >
                              <DeleteForeverIcon />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })
                ) : (
                  <div>No Products Yet</div>
                )}
              </table>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="rounded-lg border-2 p-4">
              <span className="mb-10 inline-block text-center text-lg font-bold">
                Summary of your purchase:
              </span>
              <div className="flex justify-between border-t-2 border-gray-200 py-4 text-xl font-bold uppercase">
                {quote ? (
                  <span>Get Quote</span>
                ) : (
                  <>
                    <span>Total:</span>
                    <span>AED {cartTotal}</span>
                  </>
                )}
              </div>
              <a href="/order-checkout">
                <button
                  className="btn-view-shopping-cart btn-effect transition-all-300 flex w-full items-center justify-center rounded-lg bg-primary p-2"
                  type="submit"
                >
                  <span className="font-bold uppercase text-white">
                    Continue
                  </span>
                </button>
              </a>
            </div>
            <a
              className="transition-all-300 my-5 flex items-center justify-center gap-2 hover:text-primary"
              href="/"
            >
              <ShoppingCartIcon />
              <span>Continue Shopping</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
