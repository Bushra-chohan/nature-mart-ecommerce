import React from 'react';
import AccountSidebar from '../components/AccountSidebar';
import { EyeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function AccountOrders({ orders }) {

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return (
      <div className="text-center text-red-600 font-semibold mt-10">
        <p>Please log in to view your orders.</p>
        <a href="/signin" className="hover:underline text-green-700">Log In</a>
      </div>
    );
  }

  return (
    <div className="flex mx-10 gap-10">
      <div className="w-1/4 text-center mt-10">
        <AccountSidebar />
      </div>

      <div className="w-px h-screen bg-gray-300"></div>

      <div className="w-3/4 m-10">
        <h1 className="text-3xl font-bold mb-6">Your Orders</h1>

        <div className="overflow-x-auto mr-20">
          <div className="min-w-[1000px]">
            <div className="grid grid-cols-9 bg-gray-100 h-12 pt-2 text-gray-700 text-lg font-semibold">
              <div className="px-2">Image</div>
              <div className="px-2 col-span-2">Product</div>
              <div className="px-2">Order</div>
              <div className="px-2">Date</div>
              <div className="px-2">Items</div>
              <div className="px-2">Status</div>
              <div className="px-2">Amount</div>
              <div className="px-2">View</div>
            </div>

            {orders.map((order, orderIndex) =>
              order.items.map((product, productIndex) => (
                <div
                  key={`${order.id}-${productIndex}`}
                  className="grid grid-cols-9 items-center py-4 border-b text-sm border-gray-200"
                >
                  <div className="px-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-10 w-12 object-cover rounded"
                    />
                  </div>
                  <div className="px-2 col-span-2 font-medium">{product.name}</div>
                  <div className="px-2 font-mono text-gray-600">#{order.id}</div>
                  <div className="px-2">{order.date}</div>
                  <div className="px-2">{product.quantity}</div>
                  <div className="px-2 text-green-700">Delivered</div>
                  <div className="px-2">
                    ${(product.price * product.quantity).toFixed(2)}
                  </div>
                  <Link className="px-2 text-gray-500 hover:text-black" to={`/product/${product.id}`}>
                    <EyeIcon className="h-5 w-5" />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOrders;
