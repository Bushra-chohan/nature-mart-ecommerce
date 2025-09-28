import React from 'react'


function CategoryBox({image, text}) {
  return (
    
    <div className='border-1 p-4 border-gray-300 rounded-md flex-1/4'>
      <div>
        <img src={image} alt={text} className='mx-auto block h-24' />
      </div>
      
      <p className='pt-3 text-gray-700'>{text}</p>
    </div>
  )
}

export default CategoryBox