import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductImage from './ProductImage';
import { HeartIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';
import { products } from '../data/products';
import ProductQuantityButtons from './ProductQuantityButtons';

function ProductPage({addToCart, setAddToCart}) {

  const {id} = useParams()

  const product = products.find(p => String(p.id) === String(id));


  const [headerChosen, setHeaderChosen] = useState('Product Details');
  const tabs = ['Product Details', 'Information', 'Reviews', 'Seller Info'];

  const updateCart = () => {
      const existingItem = addToCart.find(item => item.id === product.id);

    if (existingItem){
      const updatedCart = addToCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} :  item)
      setAddToCart(updatedCart)
    } else{
      setAddToCart(prev => [...prev, {...product, quantity:1}])
      
    }
  }

  const cartItem = addToCart.find(item => item.id === product.id);



  return (
    <div className="ml-20 mr-20 mt-5 mb-30">
      

      <div className="flex justify-around mt-10 mb-10 space-x-8">
        <ProductImage  img={product.image}/>

        <div className="space-y-3">
          <p className="font-bold text-sm">{product.category}</p>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <h2 className="text-2xl font-bold">${product.price}</h2>

          <hr className="mt-7 mb-7 text-gray-300" />

          <div className="space-x-2">
            <button className="p-2 border rounded-md w-20 hover:bg-gray-700 hover:text-white">250g</button>
            <button className="p-2 border rounded-md w-20 hover:bg-gray-700 hover:text-white">500g</button>
            <button className="p-2 border rounded-md w-20 hover:bg-gray-700 hover:text-white">1kg</button>
          </div>

          <div>
            <ProductQuantityButtons
            item={cartItem ?? {...product, quantity: 0 }}
            
            addToCart={addToCart} setAddToCart={setAddToCart}/>
          </div>

          <div className="flex space-x-3">
            <button className="bg-green-700 rounded-md p-2 text-white text-sm w-36 hover:bg-green-900 flex items-center justify-center" onClick={updateCart}>
              <ArchiveBoxIcon className="h-5 w-5 text-white mr-2" />
              Add to Cart
            </button>
            <button className="bg-gray-200 w-12 rounded-md flex justify-center items-center hover:bg-gray-400">
              <HeartIcon className="h-5 w-5" />
            </button>
          </div>

          <hr className="mb-7 text-gray-300" />

          <div className="flex space-x-12 text-sm">
            <div className="space-y-5">
              <p>Product Code:</p>
              <p>Availability:</p>
              <p>Type:</p>
              <p>Shipping:</p>
            </div>
            <div className="space-y-5">
              <p>FBB0255</p>
              <p>In Stock</p>
              <p>{product.category}</p>
              <p>01 day shipping</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-10 mt-30">
        {tabs.map((tab) => (
          <div key={tab} className="flex flex-col items-center">
            <button
              onClick={() => setHeaderChosen(tab)}
              className={`pb-1 hover:text-green-700 transition ${
                headerChosen === tab
                  ? 'text-green-700 font-semibold border-b-2 border-green-700'
                  : ''
              }`}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      <hr className="mt-7 mb-7 text-gray-300" />

      {/* Tab Content */}
      <div>
        {headerChosen === 'Product Details' && (
          <div>
            <h2 className="text-xl font-bold">Nutrient Values & Benefits</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ab eos deserunt, nihil nesciunt debitis obcaecati tempora esse voluptas voluptatum impedit repellat corrupti inventore et perspiciatis dolorum sint! Ex, asperiores?</p>

            <h2 className="text-xl font-bold mt-5">Storage Tips</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis expedita nam, veritatis voluptatibus nobis iure </p>

            <h2 className="text-xl font-bold mt-5">Unit</h2>
            <p>3 Units</p>

            <h2 className="text-xl font-bold mt-5">Disclaimer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
        )}

        {headerChosen === 'Information' && (
          <div>
            <h2 className="text-xl font-bold mb-7">Details</h2>
            <div className="flex gap-10">
              <div className="w-1/2 space-y-1">
                <div className="flex justify-between text-sm bg-gray-200 p-3">
                  <p className="font-bold">Weight</p>
                  <p>1000 Grams</p>
                </div>
                <div className="flex justify-between text-sm p-3">
                  <p className="font-bold">Ingredient Type</p>
                  <p>Vegetarian</p>
                </div>
                <div className="flex justify-between text-sm bg-gray-200 p-3">
                  <p className="font-bold">Brand</p>
                  <p>ABC Mart</p>
                </div>
                <div className="flex justify-between text-sm p-3">
                  <p className="font-bold">Item Package Quantity</p>
                  <p>1</p>
                </div>
                <div className="flex justify-between text-sm bg-gray-200 p-3">
                  <p className="font-bold">Form</p>
                  <p>Larry The Bird</p>
                </div>
                <div className="flex justify-between text-sm p-3">
                  <p className="font-bold">Manufacturer</p>
                  <p>ABC Mart</p>
                </div>
                <div className="flex justify-between text-sm bg-gray-200 p-3">
                  <p className="font-bold">Net Quantity</p>
                  <p>340.0 g</p>
                </div>
                <div className="flex justify-between text-sm p-3">
                  <p className="font-bold">Product Dimensions</p>
                  <p>9.6 x 7.49 x 19.23 cm</p>
                </div>
              </div>
              <div className="w-1/2 space-y-1">
                <div className="flex justify-between text-sm bg-gray-200 p-3">
                  <p className="font-bold">ASIN</p>
                  <p>Y2312U3Y1U23</p>
                </div>
                <div className="flex justify-between text-sm p-3">
                  <p className="font-bold">Date Available</p>
                  <p>30 June 2012</p>
                </div>
                <div className="flex justify-between text-sm bg-gray-200 p-3">
                  <p className="font-bold">Crumbles Biscuit</p>
                  <p>ABC Mart</p>
                </div>
                <div className="flex justify-between text-sm p-3">
                  <p className="font-bold">Item Weight</p>
                  <p>700g</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {headerChosen === 'Reviews' && (
          <div>
            <h2 className="text-xl font-bold">Customer Reviews</h2>
            <p>No reviews yet.</p>
          </div>
        )}

        {headerChosen === 'Seller Info' && (
          <div>
            <h2 className="text-xl font-bold mb-5">Seller Information</h2>
            <p>Details about seller…</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
