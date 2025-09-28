import React, {useState} from 'react'
import AccountSidebar from '../components/AccountSidebar'
import DeliveryAddress from '../components/DeliveryAddress'
import NewAddressForm from '../components/NewAddressForm';
import AddAddress from '../components/AddAddress';

function AccountDelivery() {

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return (
      <div className="text-center text-red-600 font-semibold mt-10">
        <p>Please log in to view your delivery addresses.</p>
        <a href="/signin" className="hover:underline text-green-700">Log In</a>
      </div>
    );
  }

  
  return (
    <div className='flex'>
      <div className='w-1/4 align- text-center mt-10'>
        <AccountSidebar/>
      </div>
      <div className="w-px h-screen bg-gray-300"></div>

      
      <div className='w-3/4 m-10 mx-20'>
        <AddAddress/>
      </div>
      
      
    </div>
  )
}

export default AccountDelivery