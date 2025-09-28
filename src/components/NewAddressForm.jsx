import React, { useState } from 'react';

function NewAddressForm({ setShowAddressModal, onSave }) {
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    country: '',
    province: '',
    postalCode: '',
    contactNumber: '',
    defaultAddress: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(address); // Send address to parent
    setAddress({
      firstName: '',
      lastName: '',
      streetAddress: '',
      city: '',
      country: '',
      province: '',
      postalCode: '',
      contactNumber: '',
      defaultAddress: false,
      addressType: '',
    });
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px] p-6 relative">
        <button
          onClick={() => setShowAddressModal(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold">Add New Address</h2>
        <p className="text-gray-600 mb-5">Add new shipping address for your order delivery</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className='flex gap-4'>
            <input type="radio"
              name="addressType"
              value="Home"
              checked={address.addressType === "Home"}
              onChange={handleChange}
              className='h-5 w-5 mt-1 accent-green-600' required />
            <label className='font-bold'>Home</label>
            <input type="radio"
              name="addressType"
              value="Office"
              checked={address.addressType === "Office"}
              onChange={handleChange}
              className='h-5 w-5 mt-1 accent-green-600' required/>
            <label className='font-bold'>Office</label>
          </div>
          
          <input name="firstName" value={address.firstName} onChange={handleChange} placeholder="First Name" className="border p-2 w-full rounded-md border-gray-300 pl-4" required />
          <input name="lastName" value={address.lastName} onChange={handleChange} placeholder="Last Name" className="border p-2 w-full rounded-md border-gray-300 pl-4" required />
          <input name="streetAddress" value={address.streetAddress} onChange={handleChange} placeholder="Street Address" className="border p-2 w-full rounded-md border-gray-300 pl-4" required/>
          <input name="city" value={address.city} onChange={handleChange} placeholder="City" required className="border p-2 w-full rounded-md border-gray-300 pl-4" />
          <input name="country" value={address.country} onChange={handleChange} required placeholder="Country" className="border p-2 w-full rounded-md border-gray-300 pl-4" />
          <input name="province" value={address.province} required onChange={handleChange} placeholder="Province" className="border p-2 w-full rounded-md border-gray-300 pl-4" />
          <input name="postalCode" value={address.postalCode} onChange={handleChange} required placeholder="Postal Code" className="border p-2 w-full rounded-md border-gray-300 pl-4" />
          <input name="contactNumber" value={address.contactNumber} onChange={handleChange} placeholder="Contact Number" required className="border p-2 w-full rounded-md border-gray-300 pl-4" />
          <div className="flex items-center">
            <input type="checkbox" name="defaultAddress" checked={address.defaultAddress} onChange={handleChange} className="accent-green-600" />
            <label className="text-gray-600 pl-3">Set as Default</label>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button type="button" onClick={() => setShowAddressModal(false)} className="border px-4 py-2 rounded-md text-green-600 hover:bg-gray-100">
              Cancel
            </button>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Save Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewAddressForm;
