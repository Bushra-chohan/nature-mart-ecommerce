import React from 'react'
import { Link } from 'react-router-dom'
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

function ProductCard({id, category, name, price, image, addToCart, setAddToCart, setWishlist, wishlist}) {

  const updateCart = () => {
    const existingItem = addToCart.find(item => item.id === id);
    if (existingItem){
      const updatedCart = addToCart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} :  item)
      setAddToCart(updatedCart)
    } else {
      setAddToCart(prev => [...prev, { id, category, name, price, image, quantity:1 }])
    }
  }

  const isFavourite = Array.isArray(wishlist) && wishlist.some(item => item.id === id)


  const handleFavourites = () => {
    if (isFavourite) {
      setWishlist(prev => prev.filter(item => item.id !== id)) // remove
    } else {
      setWishlist(prev => [...prev, { id, category, name, price, image }]) // add
    }
  }

  return (
    <div className='flex space-x-2 flex-col w-50 mb-5 border-1 p-3 rounded-md border-gray-300'>
      <button className='flex justify-end' onClick={handleFavourites}>
        {isFavourite ? (
          <HeartSolid className='w-5 h-5 mt-2 text-red-700' />
        ) : (
          <HeartOutline className='w-5 h-5 mt-2 text-red-700' />
        )}
      </button>

      <img src={image} alt={name} className='w-30 h-25 ml-5 mb-10'/>
      <p className='text-gray-600 text-[13px]'>{category}</p>
      <Link to={`/product/${id}`}>
        <h2 className='font-bold text-[15px]'>{name}</h2>
      </Link>
      
      <div className='flex justify-between mt-3'>
        <h2>${price}</h2>
        <button className='text-white bg-green-600 rounded-md h-7 w-16 text-[13px] hover:bg-green-800' onClick={updateCart}>+ Add</button>
      </div>
    </div>
  )
}

export default ProductCard
