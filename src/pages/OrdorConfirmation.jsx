import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../redux/cartSlice';


const OrderConfirmation = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleOrderDetail = () => { 
        navigate('/orderDetail')
        dispatch(emptyCart())
    }
  return (
    <div className="w-10/12 m-auto mt-8">
      <h1 className="text-3xl font-bold text-center">Order Confirmed</h1>
      <p className="mt-4 text-center">Thank you for your purchase!</p>
      <p className="mt-2 text-center">Your order has been placed successfully and will be processed soon.</p>
      {/* Include more details like order number, estimated delivery, etc. */}
      <div className="mt-6 text-center">
        <button className="btn btn-primary" onClick={handleOrderDetail}>Go to Order History</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
