import React from 'react'

function Button() {
  return (
    <div>
      <button className='bg-black text-white rounded-md h-10 w-30' onClick={() => window.location.href = '/shop'}>
        Shop Now
      </button>
    </div>
  )
}

export default Button