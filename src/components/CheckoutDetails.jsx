import React, { useState } from 'react';
import { MapPinIcon, ClockIcon, ShoppingBagIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import PaymentMethods from './PaymentMethods';
import DeliveryAddress from './DeliveryAddress';
import NewAddressForm from './NewAddressForm';
import AddAddress from './AddAddress';

function CheckoutDetails() {
  const [header, setHeader] = useState('address');
  

  return (
    <div className="space-y-6">
      {/* Section Headers */}
      <div className="flex gap-8 border-b pb-4">
        <button
          onClick={() => setHeader('address')}
          className={`flex items-center gap-2 font-bold ${header === 'address' ? 'text-green-600' : 'text-gray-700'}`}
        >
          <MapPinIcon className="h-5 w-5" />
          Address
        </button>
        <button
          onClick={() => setHeader('instructions')}
          className={`flex items-center gap-2 font-bold ${header === 'instructions' ? 'text-green-600' : 'text-gray-700'}`}
        >
          <ShoppingBagIcon className="h-5 w-5" />
          Delivery Instructions
        </button>
        <button
          onClick={() => setHeader('payment')}
          className={`flex items-center gap-2 font-bold ${header === 'payment' ? 'text-green-600' : 'text-gray-700'}`}
        >
          <CreditCardIcon className="h-5 w-5" />
          Payment
        </button>
      </div>

      {/* Address Section */}
      {header === 'address' && (
        <AddAddress/>
      )}

      {/* Delivery Instructions Section */}
      {header === 'instructions' && (
        <div>
          <h2 className="text-xl font-bold mb-2">Delivery Instructions</h2>
          <textarea
            placeholder="Write delivery instructions"
            className="border p-3 rounded-md w-full h-32"
          ></textarea>
          <p className="text-gray-500 mt-2">
            Add instructions for how you want your order shipped and/or delivered.
          </p>
        </div>
      )}

      {/* Payment Section */}
      {header === 'payment' && (
        <div>
          <h2 className="text-xl font-bold mb-2">Payment Method</h2>
          <PaymentMethods />
        </div>
      )}

      
    </div>
  );
}

export default CheckoutDetails;
