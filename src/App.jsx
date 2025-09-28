import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrimaryNavbar from "./components/PrimaryNavbar"
import SecondaryNavbar from "./components/SecondaryNavbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import CategoryPage from "./pages/CategoryPage"
import Cart from "./pages/Cart"
import ProductPage from "./components/ProductPage"
import ScrollToTop from "./components/ScrollToTop"
import { useState, useEffect } from "react"
import Checkout from "./pages/Checkout"
import SignIn from "./pages/SignIn"
import SignUp from './pages/SignUp'
import AccountOrders from "./pages/AccountOrders"
import AccountDelivery from "./pages/AccountDelivery"
import AccountPayment from "./pages/AccountPayment"
import Wishlist from "./pages/Wishlist"


function App() {

  const [addToCart, setAddToCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

  const [wishlist, setWishlist] = useState(localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [])

  const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem('orders')) || []);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(addToCart));
  }, [addToCart]);


  return (
    <>
      <BrowserRouter>
      
        <PrimaryNavbar/>
        <SecondaryNavbar/><hr className="mt-3 text-gray-300"/>
        <ScrollToTop/>

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} setAddToCart={setAddToCart} wishlist={wishlist} setWishlist={setWishlist}/>} />
          
          <Route path="/shop/:category?" element={<CategoryPage addToCart={addToCart}
          setAddToCart={setAddToCart} setWishlist={setWishlist} wishlist={wishlist}/>} />

          <Route path="/product/:id" element={<ProductPage addToCart={addToCart} setAddToCart={setAddToCart}/>} />

          <Route path="/cart" element={<Cart addToCart={addToCart} setAddToCart={setAddToCart}/>} />

          <Route path="/checkout" element={<Checkout addToCart={addToCart} setAddToCart={setAddToCart} orders={orders} setOrders={setOrders} />} />

          <Route path="/wishlist" element={<Wishlist addToCart={addToCart} setAddToCart={setAddToCart} wishlist={wishlist} setWishlist={setWishlist}/>} />

          <Route path="/signin" element={<SignIn/>} />

          <Route path="/signup" element={<SignUp/>} />

          <Route path="/account/orders" element={<AccountOrders orders={orders} />}  />

          <Route path="/account/payment" element={<AccountPayment/>} />

          <Route path="/account/delivery" element={<AccountDelivery/>} />

          
          

          

          
        </Routes>

        <Footer/>
        
        
      </BrowserRouter>
    </>
  )
}

export default App
