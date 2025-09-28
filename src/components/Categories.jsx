import React from 'react'
import CategoryBox from './CategoryBox'
import category1 from '../assets/category1.jpg'
import category2 from '../assets/category2.jpg'
import category3 from '../assets/category3.jpg'
import category4 from '../assets/category4.jpg'

function Categories() {

  const categoryDetails = [
    {
      image: category1,
      text: 'Dairy, Bread and Eggs',
    },
    {
      image: category2,
      text: 'Bakery and Biscuits',
    },
    {
      image: category3,
      text: 'Beverages',
    },
    {
      image: category4,
      text: 'Chicken, Meat and Fish',
    },
  ]

  return (
    <div className='mt-10'>
      <h1 className='text-[27px] font-bold mb-5'>Featured Categories</h1>
      
      <div className='flex justify-around text-center space-x-3 ' >
        {categoryDetails.map((category, index) =>(
          <CategoryBox key={index} image={category.image} text={category.text} />
        ))}
      </div>

    </div>
  )
}

export default Categories