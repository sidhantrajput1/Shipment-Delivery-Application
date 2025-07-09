// BillingPage.js

import React from 'react';

const Billing = () => {
  return (
    <div className=" p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Billing Settings</h2>
      <p className="text-gray-600 mb-6">Manage your billing and payment preferences</p>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="**** **** **** ****"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          placeholder="MM / YY"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          placeholder="***"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="billingAddress">Billing Address</label>
        <input
          type="text"
          id="billingAddress"
          placeholder="Street address, City, State, ZIP"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <button className="w-full py-3 bg-black text-white hover:bg-gray-800 rounded transition cursor-pointer">
        Update Billing Information
      </button>
    </div>
  );
};

export default Billing;
