import React from 'react';
import { ChevronDownIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function SecondaryNavbar() {
  const categoriesSet = new Set();
  products.forEach(p => categoriesSet.add(p.category));
  const categories = Array.from(categoriesSet);

  return (
    <div className="flex justify-around mt-6 relative z-50">

      {/* All Departments Dropdown */}
      <div className="relative group">
        <div className="bg-green-600 text-white h-10 rounded-md flex items-center px-4 cursor-pointer space-x-2">
          <Squares2X2Icon className="w-5 h-5 text-white" />
          <p>All Departments</p>
          <ChevronDownIcon className="w-4 h-4 text-white" />
        </div>

        {/* Dropdown Content */}
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
          <ul className="py-2 text-sm text-gray-800">
            {categories.map((category, idx) => (
              <li key={idx}>
                <Link
                  to={`/shop/${category.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-green-100"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Nav Links */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="font-bold hover:text-green-600">
          Home
        </Link>
        <Link to="/shop" className="font-bold hover:text-green-600">
          Shop
        </Link>

        {/* Account Dropdown */}
        <div className="relative group">
          <div className="flex items-center font-bold hover:text-green-600 cursor-pointer group peer">
            Account
            <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-600" />
          </div>

          {/* Account Dropdown Menu */}
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md invisible opacity-0 peer-hover:visible peer-hover:opacity-100 hover:visible hover:opacity-100 transition duration-200 z-50">
            <ul className="py-2 text-sm text-gray-800">
              <li>
                <Link to="/signin" className="block px-4 py-2 hover:bg-green-100">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="block px-4 py-2 hover:bg-green-100">
                  Sign Up
                </Link>
              </li>

              {/* My Account Submenu */}
              <li className="relative group/account">
                <div className="flex justify-between items-center px-4 py-2 hover:bg-green-100 cursor-default">
                  My Account
                  <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                </div>

                {/* Nested Submenu */}
                <div className="absolute left-full top-0 mt-0 w-48 bg-white shadow-lg rounded-md invisible opacity-0 group-hover/account:visible group-hover/account:opacity-100 hover:visible hover:opacity-100 transition duration-200 z-50">
                  <ul className="py-2 text-sm text-gray-800">
                    <li>
                      <Link to="/account/orders" className="block px-4 py-2 hover:bg-green-100">
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link to="/account/delivery" className="block px-4 py-2 hover:bg-green-100">
                        Address
                      </Link>
                    </li>
                    <li>
                      <Link to="/account/payment" className="block px-4 py-2 hover:bg-green-100">
                        Payment
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondaryNavbar;
