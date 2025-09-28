import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import ProductQuantityButtons from '../components/ProductQuantityButtons';

function Wishlist({ addToCart, setAddToCart, wishlist, setWishlist }) {

  const handleAddToCart = (product) => {
    const exists = addToCart.find(item => item.id === product.id);

    if (exists) {
      const updatedCart = addToCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setAddToCart(updatedCart);
    } else {
      setAddToCart(prev => [...prev, { ...product, quantity: 1 }]);
    }

    handleRemove(product.id);
  };

  const handleRemove = (id) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(updatedWishlist);
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return isLoggedIn ? (
    <div className='mx-15 my-10'>
      <p>Home / Shop / Wishlist</p>

      <h1 className='mt-10 text-4xl font-bold'>My Wishlist</h1>
      <p className='mt-2 text-gray-700 text-[17px]'>
        There are {wishlist.length} products in this wishlist.
      </p>

      <div className='grid grid-cols-7 bg-gray-100 h-13 border-b border-gray-300 mt-10 text-[18px] font-bold items-center'>
        <p></p>
        <p className='col-span-2'>Product</p>
        <p className='col-span-1'>Amount</p>
        <p className='col-span-1'>Status</p>
        <p className='col-span-1'>Action</p>
        <p className='col-span-1'>Delete</p>
      </div>

      {wishlist.map((product, id) => {
        const cartItem = addToCart.find(item => item.id === product.id);

        return (
          <div className='grid grid-cols-7 h-20 border-b border-gray-300 items-center text-gray-600' key={id}>
            <img src={product.image} alt={product.name} className="h-12 w-14 ml-3" />
            <p className='font-bold text-black col-span-2'>{product.name}</p>
            <p className='col-span-1'>${product.price}</p>
            <p className='bg-gray-200 w-fit px-2 py-1 rounded-md text-sm'>In Stock</p>

            <div>
              {cartItem ? (
                <button>Added</button>
              ) : (
                <button
                  className='bg-green-600 w-fit px-3 py-1 text-white rounded-md hover:bg-green-700'
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>

            <button className='col-span-1 ml-3' onClick={() => handleRemove(product.id)}>
              <TrashIcon className='w-5 h-5 hover:text-black' />
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="text-center text-red-600 font-semibold mt-10">
      <p>Please log in to view your wishlist.</p>
      <a href="/signin" className="hover:underline text-green-700">Log In</a>
    </div>
  );

}

export default Wishlist;
