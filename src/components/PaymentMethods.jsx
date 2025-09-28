import React from 'react'

function PaymentMethods() {
  return (
    <div>

      {/* PayPal Option */}
      <div className='flex mt-5 p-5 border border-gray-400 rounded-lg'>
        <input type="radio" name="payment" className='h-5 w-5 mt-1 accent-green-600' />
        <div className='pl-5'>
          <label className='font-bold'>Payment with PayPal</label>
          <p className='text-gray-600 pt-2'>
            You will be redirected to PayPal website to complete your transaction securely.
          </p>
        </div>
      </div>

      {/* Credit/Debit Card Option */}
      <div className='mt-5 p-5 border border-gray-400 rounded-lg'>
        <div className='flex'>
          <input type="radio" name="payment" className='h-5 w-5 mt-1 accent-green-600' />
          <div className='pl-5'>
            <label className='font-bold'>Credit / Debit Card</label>
            <p className='text-gray-600 pt-2'>
              Safe money transfer using your bank account. We support MasterCard, Visa and Stripe.
            </p>
          </div>
        </div>

        {/* Card Form */}
        <form className='space-y-2 flex-col flex mt-5'>
          <label className='text-[18px]'>Card Number</label>
          <input
            type="text"
            placeholder='xxxx-xxxx-xxxx-xxxx'
            className='border border-gray-300 rounded-lg p-2 text-lg pl-6'
            maxLength='19'
          />

          <div className='flex gap-3'>
            <div className='w-1/2 flex flex-col space-y-3 mt-5'>
              <label className='text-[18px]'>Name on Card</label>
              <input
                type="text"
                placeholder='Enter name'
                className='border border-gray-300 rounded-lg p-2 text-lg pl-6'
              />
            </div>

            <div className='w-1/4 flex flex-col space-y-3 mt-5'>
              <label className='text-[18px]'>Expiry Date</label>
              <input
                type="month"
                className='border border-gray-300 rounded-lg p-2 text-lg pl-6'
              />
            </div>

            <div className='w-1/4 flex flex-col space-y-3 mt-5 '>
              <label className='text-[18px]'>CVV Code</label>
              <input
                type="password"
                placeholder='xxx'
                className='border border-gray-300 rounded-lg p-2 text-lg pl-6'
                maxLength='3'
              />
            </div>
          </div>
        </form>
      </div>

      {/* Cash on Delivery */}
      <div className='flex mt-5 p-5 border border-gray-400 rounded-lg'>
        <input type="radio" name="payment" className='h-5 w-5 mt-1 accent-green-600' />
        <div className='pl-5'>
          <label className='font-bold'>Cash on Delivery</label>
          <p className='text-gray-600 pt-2'>
            Pay with cash when your order is delivered.
          </p>
        </div>
      </div>

      {/* Payoneer Option */}
      <div className='flex mt-5 p-5 border border-gray-400 rounded-lg'>
        <input type="radio" name="payment" className='h-5 w-5 mt-1 accent-green-600' />
        <div className='pl-5'>
          <label className='font-bold'>Payment with Payoneer</label>
          <p className='text-gray-600 pt-2'>
            You will be redirected to Payoneer website to complete your transaction securely.
          </p>
        </div>
      </div>

      <div className=' flex justify-end'>
        
        <button className="border mt-5 text-white bg-green-600 p-2 rounded-md hover:text-green-600 hover:bg-white">
          Place Order
        </button>
      </div>

    </div>
  );
}

export default PaymentMethods;
