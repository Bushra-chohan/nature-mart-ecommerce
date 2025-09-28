import React from 'react'
import HomeSlider from '../components/HomeSlider'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import Blobs from '../components/Blobs'
import HomeFeature1 from '../assets/home_feature_1.jpg'
import HomeFeature2 from '../assets/home_feature_2.jpg'
import Button from '../components/Button'

function Home({addToCart, setAddToCart, wishlist, setWishlist}) {

  

  return (
    <div className='mr-20 ml-20 mt-5'>
      <HomeSlider/>
      <Categories/>

      <div className='flex mt-20 mb-20  justify-between space-x-5'>
        <div style={{
            backgroundImage: `url(${HomeFeature1})`,
            backgroundSize: 'cover' ,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '300px'
          }} className='w-1/2 rounded-md h-60'>
            <div className='p-10 pt-24 space-y-1'>
              <h1 className='text-2xl font-bold'>Fruits & Vegetables</h1>
              <p className='pb-10'>Get Upto 30% Off</p>
              <Button/>
            </div>
            
        </div>
        <div style={{
            backgroundImage: `url(${HomeFeature2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'300px'
          }} className='w-1/2 rounded-md h-60'>
            <div className='p-10 pt-24 space-y-1'>
              <h1 className='text-2xl font-bold'>Freshly Baked Buns</h1>
              <p className='pb-10'>Get Upto 25% Off</p>
              <Button/>
            </div>
            
        </div>

        
      </div>

      <h1 className='text-[27px] font-bold mb-5 pt-10'>Popular Products</h1>

      <div className='flex justify-between'>

        {(products.slice(0,5)).map((product) => (
          <ProductCard id={product.id} key={product.id} category={product.category} price={product.price} name={product.name} image={product.image} addToCart={addToCart} setAddToCart={setAddToCart}  wishlist={wishlist} setWishlist={setWishlist}/>
        )) }

      </div>
      
      <div className='flex justify-between mb-30'>

        {(products.slice(5,10)).map((product) => (
          <ProductCard id={product.id} key={product.id} category={product.category} price={product.price} name={product.name} image={product.image} addToCart={addToCart} setAddToCart={setAddToCart} wishlist={wishlist} setWishlist={setWishlist}/>
        )) }

      </div>

      <Blobs/>
      

    </div>
  )
}

export default Home