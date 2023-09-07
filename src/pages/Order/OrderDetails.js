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
        <Heading title="Order Details" />
        <div className="bg-white h-screen my-10 mx-6 rounded-lg"></div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetails;
