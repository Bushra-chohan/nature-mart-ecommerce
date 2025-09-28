import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

function DeliveryAddress({ address, onDelete }) {
  return (
    <div className='p-5 border border-gray-400 rounded-lg'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <input type="radio" name="delivery" className='h-5 w-5 mt-1 accent-green-600' />
          <label className='font-bold'>{address.addressType}</label>
        </div>
        <button className='flex gap-2 text-red-700 hover:text-red-900' onClick={onDelete}>
          <TrashIcon className='h-4 w-4 mt-1'/>
          Delete
        </button>
      </div>


      <div className='mt-5'>
        <h1 className='font-bold'>{address.firstName} {address.lastName}</h1>
        <p className='text-gray-600'>{address.streetAddress}</p>
        <p className='text-gray-600'>{address.city}, {address.country}</p>
        <p className='text-gray-600'>P: {address.contactNumber}</p>
        {address.defaultAddress && <p className='text-red-800 mt-5'>Default address</p>}
      </div>
    </div>
  );
}

export default DeliveryAddress;
