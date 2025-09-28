import React, { useState, useEffect } from 'react';
import AccountSidebar from '../components/AccountSidebar';
import PaymentForm from '../components/PaymentForm';
import visa from '../assets/paymentWithBg/visa.svg';

function AccountPayment() {

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const [paymentMethods, setPaymentMethods] = useState(localStorage.getItem('payment') ? JSON.parse(localStorage.getItem('payment')) : []);

  const handleAddPayment = (newCard) => {
    setPaymentMethods(prev => [...prev, newCard]);
    setShowPaymentModal(false);
  };

  const handleRemove = (indexToRemove) => {
    setPaymentMethods(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  useEffect(() => {
      localStorage.setItem('payment', JSON.stringify(paymentMethods));
    }, [paymentMethods]);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return (
      <div className="text-center text-red-600 font-semibold mt-10">
        <p>Please log in to view your payment methods.</p>
        <a href="/signin" className="hover:underline text-green-700">Log In</a>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="w-1/4 text-center mt-10">
        <AccountSidebar />
      </div>
      <div className="w-px h-screen bg-gray-300"></div>

      <div className="w-3/4 m-10 mx-20">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Payment Methods</h1>
          <button
            className="border text-green-600 p-2 rounded-md hover:text-white hover:bg-green-600"
            onClick={() => setShowPaymentModal(true)}
          >
            Add Payment Method
          </button>
        </div>

        {/* List existing cards */}
        <div className="mt-10 space-y-4">
          {paymentMethods.length === 0 ? (
            <p className="text-gray-500">No saved payment methods yet.</p>
          ) : (
            paymentMethods.map((method, index) => (
              <div key={index} className="flex justify-between border-b pb-4 border-gray-300">
                <div className="flex gap-4">
                  <img src={method.cardType} alt="card" className="h-10 w-14" />
                  <div>
                    <h2 className="font-bold">**** {method.cardNumber.slice(-4)}</h2>
                    <p>Expires in {method.month}/{method.year}</p>
                  </div>
                </div>
                <button
                  className="border border-gray-300 text-gray-600 p-2 rounded-md hover:bg-gray-200"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Modal for Payment Form */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50">


            <div className="bg-white p-6 rounded-lg w-[40%] shadow-lg">
              <PaymentForm
                onSave={handleAddPayment}
                setShowPaymentModal={setShowPaymentModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountPayment;
