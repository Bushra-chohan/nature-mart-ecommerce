import React, {useState} from 'react'
import visa from '../assets/paymentWithBg/visa.svg'
import mastercard from '../assets/paymentWithBg/mastercard.svg'
import americanExpress from '../assets/paymentWithBg/americanexpress.svg'


function PaymentForm({onSave, setShowPaymentModal}) {

  const [formData, setFormData] = useState({
    name: '',
    month: '',
    year: '',
    cardNumber: '',
    cvv: '',
    cardType: visa,
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleCardTypeChange = (img) => {
    setFormData(prev => ({...prev, cardType: img}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  

  return (
    <div className='m-3 rounded-md'>
      <h1 className='font-bold text-2xl'>Add New Payment Method</h1>
      <hr className='my-4 border-gray-300'/>
      <h1 className='font-bold text-2xl'>Credit/ Debit Card</h1>

      <form onSubmit={handleSubmit} className='mt-5'>

        <div className='flex'>
          <input required type="radio" name="cardType" checked={formData.cardType === visa} onChange={() => handleCardTypeChange(visa)}/>
          <img src={visa} alt="visa" />
          <input required type="radio" name="cardType" checked={formData.cardType === mastercard} onChange={() => handleCardTypeChange(mastercard)}/>
          <img src={mastercard} alt="mastercard" />
          <input required type="radio" name="cardType" checked={formData.cardType === americanExpress} onChange={() => handleCardTypeChange(americanExpress)}/>
          <img src={americanExpress} alt="americanexpress" />
        </div>

        <div className='flex gap-10 justify-between mt-7  text-gray-600 font-bold'>
          <p className='w-1/3'>Name on card</p>
          <p className='w-1/3'>Month</p>
          <p className='w-1/3'>Year</p>
        </div>

        <div className='flex gap-10 justify-between mt-3 text-gray-600'>
          <input required type="text" placeholder='Name' 
          name='name'
          value={formData.name} onChange={handleChange} className='border rounded-md p-2 border-gray-300 w-1/3'/>
          <input required type="text" name="month" placeholder='Month'
          value={formData.month} onChange={handleChange} className='border rounded-md p-2 border-gray-300 w-1/3'/>
          <input required type="Year" name="year" 
          value={formData.year} onChange={handleChange}placeholder="Year" className='border rounded-md p-2 border-gray-300 w-1/3'/>
        </div>

        <div className='flex gap-10 justify-between mt-7  text-gray-600 font-bold'>
          <p className='w-2/3'>Card Number</p>
          <p className='w-1/3'>CVV Code</p>
        </div>

        <div className='flex gap-10 justify-between mt-3 text-gray-600'>

          <input
            required
            type="text"
            inputMode="numeric"
            pattern="\d{16}"
            maxLength={16}
            placeholder="xxxx-xxxx-xxxx-xxxx"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="border rounded-md p-2 no-spinner border-gray-300 w-2/3"
          />

          <input
            required
            type="text"
            inputMode="numeric"
            pattern="\d{3}"
            maxLength={3}
            placeholder="xxx"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="border no-spinner rounded-md p-2 border-gray-300 w-1/3"
          />

        </div>


        <div className='flex gap-7 my-7'>
          <button type='submit' className='p-3 font-bold bg-green-600 text-white rounded-md hover:bg-green-800'>Add New Card</button>
          <button className='p-3 font-bold border border-gray-300 text-gray-600 w-20 rounded-md hover:bg-gray-400' onClick={() => setShowPaymentModal(false)}>Close</button>
        </div>

        <p className='text-gray-600'><span className='font-bold'>Note: </span>You can later remove your card at the account setting page</p>
        

      </form>

    </div>
  )
}

export default PaymentForm