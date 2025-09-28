import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { useParams, useSearchParams } from 'react-router-dom';

function DisplayProducts({ heading, addToCart, setAddToCart, setWishlist, wishlist }) {
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  // Determine page title from heading or category
  const pageTitle = heading || (category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Shop');

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // 1. Filter by category (if not 'Shop')
  let filteredProducts = pageTitle === 'Shop'
    ? products
    : products.filter(p => p.category.toLowerCase() === pageTitle.toLowerCase());

  // 2. Filter by search query (if present)
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery)
    );
  }

  // 3. Paginate the filtered results
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const pageNumbers = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div>
      <h1 className='text-black font-bold text-4xl bg-gray-100 rounded-md h-30 p-10'>{pageTitle}</h1>

      {/* Filter info */}
      <div className='mt-10'>
        <p className='text-[18px]'>
          Showing {filteredProducts.length === 0 ? 0 : startIndex + 1} to {Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
        </p>
      </div>

      {/* No results */}
      {currentProducts.length === 0 ? (
        <p className='text-gray-500 text-lg mt-5'>No products found{searchQuery && ` for "${searchQuery}"`}</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-10">
          {currentProducts.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              addToCart={addToCart}
              setAddToCart={setAddToCart}
              setWishlist={setWishlist}
              wishlist={wishlist}
            />
          ))}
        </div>
      )}

      {/* Pagination controls */}
      <div className='flex space-x-3 mt-10'>
        <button
          className={`h-10 w-10 rounded-xl ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200'}`}
          onClick={currentPage !== 1 ? () => {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0);
          } : undefined}
        >&lt;</button>

        {
          [...Array(pageNumbers)].map((_, i) => (
            <button
              key={i}
              className={`h-10 w-10 rounded-md border border-gray-300 hover:bg-green-600 focus:bg-green-600 focus:text-white ${currentPage === i + 1 ? 'bg-green-600 text-white' : ''}`}
              onClick={() => {
                setCurrentPage(i + 1);
                window.scrollTo(0, 0);
              }}
            >
              {i + 1}
            </button>
          ))
        }

        <button
          className={`h-10 w-10 rounded-xl ${currentPage === pageNumbers ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200'}`}
          onClick={currentPage !== pageNumbers ? () => {
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0);
          } : undefined}
        >&gt;</button>
      </div>
    </div>
  );
}

export default DisplayProducts;
