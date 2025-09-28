import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import ProductQuantityButtons from '../components/ProductQuantityButtons';

function Cart({ addToCart, setAddToCart }) {
  const nav = useNavigate();

  const totalPrice = addToCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const serviceFee = totalPrice * 0.2;

  const subTotal = (totalPrice + serviceFee).toFixed(2);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


  return (
    <div className='mr-20 ml-20 mt-5 mb-20'>
      <p>Home/Shop/Shop Cart</p>
      <h1 className='text-4xl font-bold mt-10'>Shop Cart</h1>

      {!isLoggedIn ? (
        <div className="text-center text-red-600 font-semibold mt-10">
          <p >Please log in to view your cart.</p>
          <a href="/signin" className='hover:underline'>Log In</a>
        </div>
          
          
        ) : (
          <div className='mt-15 flex space-x-20 '>
            <div className='flex-2/3 space-y-3'>
              <p className='text-red-800 text-[17px] border rounded-md p-2 bg-red-100'>
                You've got free delivery. Start checkout now!
              </p>
              <hr className='text-gray-300' />

              {addToCart.length === 0 ? (
                <p>You have not added any item to cart</p>
              ) : (
                <>
                  {addToCart.map((item, index) => {
                    const removeItem = () => {
                      const updatedCart = addToCart.filter(
                        (cartItem) => cartItem.id !== item.id
                      );
                      setAddToCart(updatedCart);
                    };

                    return (
                      <div key={index} className='space-y-3'>
                        <div className='flex justify-between'>
                          <img
                            src={item.image}
                            alt={item.name}
                            className='h-15 w-15'
                          />
                          <div className='space-y-1'>
                            <h2 className='font-bold'>{item.name}</h2>
                            <p className='text-gray-500'>.98/lb</p>
                            <button
                              className='text-gray-500 hover:text-green-700 flex gap-2 mt-3'
                              onClick={removeItem}
                            >
                              <TrashIcon className='h-5 w-5 text-green-500 mt-1' />
                              Remove
                            </button>
                          </div>
                          <div className='flex items-center'>
                            <ProductQuantityButtons
                              item={item}
                              addToCart={addToCart}
                              setAddToCart={setAddToCart}
                            />
                          </div>

                          <div className='flex items-center'>
                            <h2 className='font-bold'>
                              ${(item.price * item.quantity).toFixed(2)}
                            </h2>
                          </div>
                        </div>
                        <hr className='text-gray-300' />
                      </div>
                    );
                  })}

                  <div className='flex justify-between'>
                    <button
                      className='bg-green-500 text-white p-3 rounded-lg font-bold text-sm hover:bg-green-700'
                      onClick={() => nav('/shop')}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className='border p-5 rounded-md border-gray-300 flex-1/3 space-y-3'>
              <h1 className='text-2xl font-bold'>Summary</h1>
              <div className='mt-5 mb-5'>
                <div className='border border-gray-300 rounded-t-md flex justify-between text-[18px] p-2'>
                  <h2>Item Total</h2>
                  <h2>${totalPrice.toFixed(2)}</h2>
                </div>
                <div className='border-r border-l border-gray-300 flex justify-between text-[18px] p-2'>
                  <h2>Service Fee</h2>
                  <h2>${serviceFee.toFixed(2)}</h2>
                </div>
                <div className='border border-gray-300 rounded-b-md flex justify-between text-[18px] p-2 font-bold'>
                  <h2>Subtotal</h2>
                  <h2>${subTotal}</h2>
                </div>
              </div>

              <button className='bg-green-600 text-white p-2 rounded-lg font-bold text-xl w-full hover:bg-green-700' onClick={() => nav('/checkout')}>
                Go to Checkout ${subTotal}
              </button>

              <p className='text-gray-500 mt-4'>
                By placing your order, you agree to be bound by NatureMarts{' '}
                <span className='text-green-600'>Terms of Service</span> and{' '}
                <span className='text-green-600'>Privacy Policy</span>
              </p>

              <h2 className='text-xl font-bold mt-10 mb-3'>
                Add Promo or Gift Card
              </h2>
              <h3 className='text-[18px]'>Promo Code</h3>
              <input
                type='text'
                placeholder='Promo or Gift Card'
                className='border p-2 rounded-lg border-gray-300 w-full'
              />
              <button className='text-gray-700 p-2 rounded-lg font-bold text-xl w-full border mt-4'>
                Redeem
              </button>
              <p className='text-gray-500 text-md'>Terms & Conditions Apply</p>
            </div>
          </div>
        )}

      
    </div>
  );
}

export default Cart;
