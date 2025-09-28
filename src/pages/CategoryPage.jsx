import { useParams } from 'react-router-dom';
import DisplayProducts from '../components/DisplayProducts';
import Sidebar from '../components/Sidebar';

function CategoryPage({addToCart, setAddToCart, setWishlist, wishlist}) {
  const { category } = useParams(); 
  const heading = category
  ? category.charAt(0).toUpperCase() + category.slice(1)
  : 'Shop';
  
  return (
    <div className='mr-20 ml-20 m-5 '>
      <p className='text-green-600 '>Home / Shop  </p>
      <div className='grid grid-cols-4 gap-20'>
        <div className='col-span-1'>
          <Sidebar/>
        </div>

        <div className='col-span-3 mt-10'>
          <DisplayProducts heading={heading} addToCart={addToCart}
          setAddToCart={setAddToCart} setWishlist={setWishlist} wishlist={wishlist} />
        </div>

        
      </div>
    </div>
  )
  
}

export default CategoryPage