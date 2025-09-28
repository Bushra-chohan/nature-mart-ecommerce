import React from 'react';
import CheckoutDetails from '../components/CheckoutDetails';
import { useNavigate } from 'react-router-dom';

function Checkout({ addToCart, setAddToCart, orders, setOrders }) {
  const nav = useNavigate();

  const totalPrice = addToCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const serviceFee = totalPrice * 0.2;
  const subTotal = (totalPrice + serviceFee).toFixed(2);

  const handlePlaceOrder = () => {
    if (addToCart.length === 0) return;

    const newOrder = {
      id: Math.floor(10000 + Math.random() * 90000), 
      date: new Date().toISOString().split('T')[0], 
      items: [...addToCart],
      total: subTotal,
    };

    setOrders(prev => [...prev, newOrder]);
    setAddToCart([]);
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
    localStorage.removeItem('cart');

  };

  return (
    <div className='mt-5 mb-15 mr-20 ml-20'>
      <p>Home / Shop / Checkout</p>
      <h1 className='text-4xl font-bold mt-10'>Checkout</h1>
      <p className='text-gray-600 text-[17px]'>
        Already have an account? Click here to <a href="" className='text-green-600'>Sign in.</a>
      </p>

      <div className='flex gap-8'>
        {/* Left - Checkout Details */}
        <div className='w-1/2 mt-10'>
          <CheckoutDetails />
        </div>

        {/* Right - Order Summary */}
        <div className='w-1/2 border rounded-md border-gray-300 shadow-md mt-10'>
          <h1 className='text-2xl font-bold p-5'>Order Details</h1>
          <hr className='text-gray-300' />

          {addToCart.map((item, index) => (
            <div key={index} className='space-y-3 mt-5'>
              <div className='flex justify-between'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='h-15 w-15 ml-5'
                />
                <div className='space-y-1'>
                  <h2 className='font-bold'>{item.name}</h2>
                  <p className='text-gray-500'>.98/lb</p>
                </div>
                <div className='flex items-center'>
                  <p>{item.quantity}</p>
                </div>
                <div className='flex items-center'>
                  <h2 className='font-bold mr-4'>
                    ${(item.price * item.quantity).toFixed(2)}
                  </h2>
                </div>
              </div>
              <hr className='text-gray-300' />
            </div>
          ))}

          <div className='flex justify-between text-[18px] p-4'>
            <h2>Item Total</h2>
            <h2 className='font-bold'>${totalPrice.toFixed(2)}</h2>
          </div>

          <div className='flex justify-between text-[18px] p-4'>
            <h2>Service Fee</h2>
            <h2 className='font-bold'>${serviceFee.toFixed(2)}</h2>
          </div>

          <hr className='text-gray-300' />

          <div className='flex justify-between text-[18px] p-4 font-bold'>
            <h2>Subtotal</h2>
            <h2>${subTotal}</h2>
          </div>

          <div className='p-4'>
            <button
              onClick={handlePlaceOrder}
              className='bg-green-600 text-white p-2 rounded-md font-bold text-xl w-full hover:bg-green-700'
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
