import React, {useState} from 'react'
import { ShoppingCartIcon, HeartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'


function PrimaryNavbar() {

  const [searchTerm, setSearchTerm] = useState('')
  const nav = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      nav(`/shop?search=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    
    <div className='flex justify-between ml-20 mr-20 mt-5'>

      {/* Logo */}
      <div className='flex space-x-1'>
        <ShoppingCartIcon className="h-10 w-10 text-green-600 " />

        <Link to='/' className='text-3xl font-bold'>NatureMart</Link>

      </div>

      {/* Search bar */}
      <form className="flex border border-gray-300 rounded-sm "
      onSubmit={handleSearch

      }    >
        <input 
        placeholder='Search for Products' className='w-140 pl-5' type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
        <button type='submit'>
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 cursor-pointer m-2 mr-4 " />
        </button>
        
        
      </form>

      {/* Wishlist, account, cart icons */}
      <div className="flex space-x-4 items-center">
        <Link to={'/cart'}>
          <ShoppingCartIcon className="h-7 w-7 text-green-600 cursor-pointer" />
        </Link>

        <Link to={'/wishlist'}>
          <HeartIcon className="h-7 w-7 text-green-600  cursor-pointer" />
        </Link>
        
        <Link to={'/account/orders'}>
          <UserIcon className="h-7 w-7 text-green-600  cursor-pointer" />
        </Link>
      </div>


    </div>
  )
}

export default PrimaryNavbar