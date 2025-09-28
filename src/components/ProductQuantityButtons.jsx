import React from 'react';

function ProductQuantityButtons({ item, addToCart, setAddToCart }) {
  const decrease = () => {
    if (item.quantity > 0) {
      const updatedCart = addToCart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ).filter(cartItem => cartItem.quantity > 0); // optional: remove if quantity is 0
      setAddToCart(updatedCart);
    }
  };

  const increase = () => {
    const exists = addToCart.find(cartItem => cartItem.id === item.id);
    if (exists) {
      const updatedCart = addToCart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setAddToCart(updatedCart);
    } else {
      setAddToCart(prev => [...prev, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="flex h-8">
      <button
        className="border w-7 border-gray-300 rounded-l-sm hover:bg-gray-300"
        onClick={decrease}
      >-</button>
      <p className="border w-7 border-gray-300 p-1 pl-2 text-[12px] text-center">
        {item.quantity ?? 1}
      </p>
      <button
        className="border w-7 border-gray-300 rounded-r-sm hover:bg-gray-300"
        onClick={increase}
      >+</button>
    </div>
  );
}

export default ProductQuantityButtons;
