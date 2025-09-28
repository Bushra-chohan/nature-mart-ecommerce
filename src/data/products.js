const imageModules = import.meta.glob('../assets/products/*.{jpg,webp}', { eager: true })


const imageArray = Object.entries(imageModules)
  .sort((a, b) => {
    const getNumber = (str) => parseInt(str[0].match(/product(\d+)/)?.[1])
    return getNumber(a) - getNumber(b)
  })
  .map(([_, mod]) => mod.default)

// ✅ Product info for 30 products (names, categories, prices)
const productDetails = [
  { name: "Fresh Red Apples", category: "Fruits", price: 3.99 },
  { name: "Bananas (1 dozen)", category: "Fruits", price: 2.49 },
  { name: "Seedless Grapes", category: "Fruits", price: 4.29 },
  { name: "Juicy Oranges", category: "Fruits", price: 3.59 },
  { name: "Blueberries Pack", category: "Fruits", price: 5.99 },

  { name: "Fresh Carrots", category: "Vegetables", price: 1.99 },
  { name: "Organic Broccoli", category: "Vegetables", price: 2.89 },
  { name: "Green Bell Peppers", category: "Vegetables", price: 2.79 },
  { name: "Baby Spinach", category: "Vegetables", price: 3.49 },
  { name: "Cauliflower", category: "Vegetables", price: 2.39 },

  { name: "Orange Juice 1L", category: "Beverages", price: 3.49 },
  { name: "Coca Cola Can (6 Pack)", category: "Beverages", price: 4.99 },
  { name: "Bottled Water 1L", category: "Beverages", price: 0.99 },
  { name: "Green Tea Pack", category: "Beverages", price: 2.49 },
  { name: "Cold Coffee Bottle", category: "Beverages", price: 2.99 },

  { name: "Potato Chips", category: "Snacks", price: 1.99 },
  { name: "Chocolate Cookies", category: "Snacks", price: 2.49 },
  { name: "Salted Peanuts", category: "Snacks", price: 1.79 },
  { name: "Mixed Dry Fruits", category: "Snacks", price: 5.99 },
  { name: "Energy Bars (Pack of 3)", category: "Snacks", price: 4.29 },

  { name: "Full Cream Milk 1L", category: "Dairy", price: 1.59 },
  { name: "Cheddar Cheese Block", category: "Dairy", price: 3.99 },
  { name: "Greek Yogurt", category: "Dairy", price: 2.29 },
  { name: "Butter Pack", category: "Dairy", price: 2.79 },
  { name: "Paneer Cubes", category: "Dairy", price: 3.69 },

  { name: "Whole Wheat Bread", category: "Bakery", price: 1.49 },
  { name: "Chocolate Muffins (Pack of 4)", category: "Bakery", price: 3.99 },
  { name: "Croissants (3 pcs)", category: "Bakery", price: 2.79 },
  { name: "Plain Bagels (4 pcs)", category: "Bakery", price: 2.19 },
  { name: "Garlic Breadsticks", category: "Bakery", price: 1.99 },
]

export const products = productDetails.map((product, index)=> ({
  id: index+1,
  ...product,
  image: imageArray[index]

}))