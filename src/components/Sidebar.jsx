import React, {useState} from 'react'
import { products } from '../data/products'
import PriceFilter from './PriceFilter'
import Ratings from './Ratings'
import Button from './Button'
import promotionImage from '../assets/sidebar_img.png'
import { Link } from 'react-router-dom'


function Sidebar() {


  const getCategories = () => {
    const categoriesSet = new Set()
    for (let i=0; i < products.length; i++){
      categoriesSet.add('All')
      categoriesSet.add(products[i].category)
      
    }
    return Array.from(categoriesSet)
  } 

  const categoriesList = getCategories()

  const stores= ['E-Grocery', 'DealShare', 'DMart', 'BigBasket', 'Walmart', 'Target','Spencers']

  return (
    <div className='space-y-2 mt-10 text-gray-600 '>

      {/* Categories Section */}
      <h1 className='font-bold text-[20px] mb-6 text-black'>Categories</h1>

      {categoriesList.map((category, index) => (
        <div key={index} >
          <Link to={category === 'All' ? '/shop' : `/shop/${category.toLowerCase()}`}
            className='flex justify-between hover:text-green-600'
          >
            {category}
            <span className='font-bold'>&gt;</span>
          </Link>
          
          <hr className='text-gray-300 mt-2' />
        </div>
      ))}

      {/* Stores Section */}

      <div className='flex flex-col'>
        <h1 className='font-bold text-[20px] mb-6 text-black mt-10'>Stores</h1>
        <input type="text" placeholder='Search By Store' className='mb-2 border-1 p-2 border-gray-300 rounded-md' />

        {
          stores.map((store, index) => (
            <label key={index} className='mt-3'>
              <input type="checkbox" className='mr-2 accent-green-600 text-white' />
              {store}
            </label>
          ))
        }

        
      </div>

      {/* Price Filter */}

        <PriceFilter/>

      {/* Rating */}
    
        <Ratings/>

      {/* Poster/Advertisement */}

      <div 
      style={{ backgroundImage: `url(${promotionImage})` }}
      className='rounded-xl bg-cover h-55 mt-15 p-5'
      >
        <h1 className='text-2xl text-black font-semibold mt-5'>Fresh Fruits</h1>
        <p className='pb-5 text-sm'>Get Upto 25% Off</p>
        <Button/>
      </div>
      
    </div>
  )
}

export default Sidebar