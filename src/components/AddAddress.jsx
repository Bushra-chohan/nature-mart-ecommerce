import React, { useState, useEffect } from 'react';
import DeliveryAddress from './DeliveryAddress';
import NewAddressForm from './NewAddressForm';

function AddAddress() {

  const [showAddressModal, setShowAddressModal] = useState(false);

  const [savedAddresses, setSavedAddresses] = useState(() => JSON.parse(localStorage.getItem('address')) || []);

  useEffect(() => {
      localStorage.setItem('address', JSON.stringify(savedAddresses));
    }, [savedAddresses]);

  const handleSaveAddress = (newAddress) => {
    setSavedAddresses((prev) => [...prev, newAddress]);
    setShowAddressModal(false);
  };

  const handleDelete = (indexToDelete) => {
    setSavedAddresses((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Add Delivery Address</h1>
        <button
          className="border text-green-600 p-2 rounded-md hover:text-white hover:bg-green-600"
          onClick={() => setShowAddressModal(true)}
        >
          Add a new address
        </button>
      </div>

      <div className="space-y-4 mt-4 grid grid-cols-2 gap-4">
        {savedAddresses.length === 0 ? (
          <p className="text-gray-500">No saved addresses yet.</p>
        ) : (
          savedAddresses.map((address, index) => (
            
            <DeliveryAddress
              key={index}
              address={address}
              onDelete={() => handleDelete(index)}
            />
          ))
        )}
      </div>

      {showAddressModal && (
        <NewAddressForm
          setShowAddressModal={setShowAddressModal}
          onSave={handleSaveAddress}
        />
      )}
    </div>
  );
}

export default AddAddress;
