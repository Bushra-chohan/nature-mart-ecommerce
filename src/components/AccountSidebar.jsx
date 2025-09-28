import React from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { CreditCardIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { useNavigate, NavLink} from 'react-router-dom'

function AccountSidebar() {

  const nav = useNavigate()

  const handleLogout = () => {
    nav('/')
    localStorage.setItem('isLoggedIn', 'false')
  }

  return (
    <div className="flex items-center justify-center my-3">
      <div className='text-[18px] text-gray-600 flex flex-col space-y-4'>

        <NavLink
          to="/account/orders"
          className={({ isActive }) =>
            `flex gap-2 items-center rounded-md h-10 w-50 p-1.5 hover:bg-gray-200 pl-3 ${
              isActive ? 'bg-black text-white' : 'text-gray-700'
            }`
          }
        >
          <ShoppingBagIcon className="h-6 w-6" />
          Your Orders
        </NavLink>

        

        <NavLink
          to="/account/delivery"
          className={({ isActive }) =>
            `flex gap-2 items-center rounded-md h-10 w-50 p-1.5 hover:bg-gray-200 pl-3 ${
              isActive ? 'bg-black text-white' : 'text-gray-700'
            }`
          }
        >
          <MapPinIcon className="h-6 w-6 text-gray-700" />
          Address
        </NavLink>

        <NavLink
          to="/account/payment"
          className={({ isActive }) =>
            `flex gap-2 items-center rounded-md h-10 w-50 p-1.5 hover:bg-gray-200 pl-3 ${
              isActive ? 'bg-black text-white' : 'text-gray-700'
            }`
          }
        >
          <CreditCardIcon className="h-6 w-6 text-gray-700" />
          Payment Method
        </NavLink>

        <hr className='border-gray-300 my-4'/>

       <button
          onClick={handleLogout}
          className='flex gap-2 items-center rounded-md h-10 w-50 p-1.5 hover:bg-gray-200'
        >
          <ArrowRightCircleIcon className="h-6 w-6 text-gray-700" />
          Log Out
        </button>

      </div>
    </div>
  )
}

export default AccountSidebar
