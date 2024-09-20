import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { orderId } = useParams();
  const orders = useSelector((state) => state.orders.orders);

  const order = orders.find((order) => order.id === orderId);

  if (!order) {
    return <div>Order not found!</div>;
  }

  return (
    <div className="w-10/12 m-auto mt-8">
      <h1 className="text-3xl font-bold text-center">Order Details</h1>
      <div className="mt-8 p-6 rounded-lg shadow-2xl bg-white">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
        <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
        <p><strong>Status:</strong> {order.status}</p>

        <h2 className="mt-6 text-2xl">Items Purchased</h2>
        {order.items.map((item) => (
          <div key={item.id} className="mt-4">
            <p>{item.title} (x{item.quantity})</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
