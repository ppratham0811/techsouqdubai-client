import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Heading from "../../Widgets/Heading";
import { useParams } from "react-router-dom";
import { getAllOrders } from "../../actions";
import Loading from "../../utils/Loading";

const OrderDetails = () => {
  const { invoiceId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  const getOrderByInvoice = async () => {
    const allOrders = await getAllOrders();
    const filteredOrder = allOrders.filter(
      (order) => order.invoice === invoiceId
    );
    console.log(filteredOrder);
    setOrderDetails(filteredOrder[0]);
  };

  useEffect(() => {
    getOrderByInvoice();
  }, []);

  if (!orderDetails) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <div className="bg-white h-full my-10 mx-6 py-8 px-6 rounded-lg">
          <div class="flex flex-col">
            <div class="flex flex-wrap items-center gap-2 md:pl-5 pl-2">
              <span class="block text-xl font-bold">Order Details</span>
              <span class="font-semibold">{`(Invoice: ${invoiceId})`}</span>
              <div class="flex items-center">
                <span class="text-sm text-slate-400">
                  {orderDetails.orderTime}
                </span>
              </div>
            </div>
            <div class="rounded-lg bg-white px-2 sm:px-5 py-2">
              <span class="block font-semibold">Name</span>
              <span>{orderDetails.customer}</span>
            </div>
            <div class="rounded-lg bg-white px-2 sm:px-5 py-2">
              <span class="block font-semibold">Email</span>
              <span>{orderDetails.email}</span>
            </div>
            <div class="rounded-lg pb-4 bg-white px-2 sm:px-5 py-2">
              <span class="block font-semibold">Address</span>
              <span>{orderDetails.address}</span>
            </div>
            <div class="rounded-lg bg-white px-2 sm:px-5 py-2">
              <span class="block pb-4 font-semibold">Products</span>
              {orderDetails.products.map((prodObj) => {
                const productDetails = JSON.parse(prodObj);
                // productDetails = {product: {}, quantity: x}
                return (
                  <>
                    <div class="max-h-[300px] overflow-auto">
                      <a
                        class="flex w-full flex-col items-center justify-between gap-5 bg-white p-2 hover:bg-gray-100 sm:flex-row"
                        href={`/products/${productDetails.product.$id}`}
                      >
                        <div class="h-[80px] w-[80px] min-w-[80px] overflow-hidden rounded-lg border">
                          <img
                            class="h-full w-full object-cover"
                            src={productDetails.product.images[0]}
                            alt="product"
                          />
                        </div>
                        <div class="flex w-full flex-col">
                          <h6 class="clamp-2 break-all text-lg font-semibold">
                            {productDetails.product.title}
                          </h6>
                          <div class="flex gap-2">
                            <div class="flex gap-1 leading-7 text-gray-400">
                              <span>{productDetails.quantity}</span>
                              <span>X</span>
                            </div>
                            <div class="flex items-center">
                              <span class="font-bold text-primary-color">
                                {productDetails.product.salePrice}
                              </span>
                            </div>
                          </div>
                          <div class="flex items-center gap-2 text-sm">
                            <span class="font-bold">Total:</span>
                            <span>
                              {productDetails.quantity *
                                productDetails.product.salePrice}
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
            <div class="rounded-lg bg-white p-2 sm:p-5">
              <div class="flex flex-wrap items-center justify-between py-1 font-bold">
                <span>Total Cost:</span>
                <span>{orderDetails.amount}</span>
              </div>
            </div>
            <a
              class="btn-close-modal btn-effect ml-auto w-max rounded-lg bg-primary-color p-2 px-3 font-bold uppercase text-white"
              href="javascript:void(0)"
            >
              <span class="text-center">Close</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetails;
