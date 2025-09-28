import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignInForm() {

  const nav = useNavigate()

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const [loginError, setLoginError] = useState([])


  const handleLogin = (e) => {
    e.preventDefault()

    
    const registerData = JSON.parse(localStorage.getItem('registerData'))
    if (loginData.email === registerData.email && loginData.password === registerData.password){
      setLoginError('')
      nav('/account/orders')
      localStorage.setItem('isLoggedIn', 'true');

    } else {
      setLoginError('Incorrect email or password. Try again')
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className='space-y-2'>
      <h1 className='text-3xl font-bold text-black'>Sign in to NatureMart</h1>
        <p>Welcome back to NatureMart! Enter your email to get started.</p>
        <form action="" className='space-y-2' onSubmit={handleLogin}>
          <input name="email" value={loginData.email} placeholder="Email" className="border p-2 rounded-md border-gray-300 pl-4 w-100 mt-7" required onChange={handleChange}/>
          <input name="password" value={loginData.password} placeholder="*****" className="border p-2 rounded-md border-gray-300 pl-4 w-100" required onChange={handleChange}/>

          {loginError && (
          <p className="text-red-600 text-sm font-medium">{loginError}</p>
        )}

          <div className='flex justify-between'>
            <div className='flex'>
              <input type="checkbox" name="rememberMe" className="accent-green-600" />
              <label className=" pl-3">Remember me</label>
            </div>
            <p>Forgot Password? <a href="" className='text-green-700'>Reset It</a></p>
          </div>

          <button className="border mt-5 text-white bg-green-600 p-2 rounded-md hover:text-green-600 hover:bg-white w-full">Sign In</button>

        </form> 
        
        <p>Don't have an account? <Link to='/signup' className='text-green-600'>Sign Up</Link></p>
        
    </div>
  )
}

export default SignInForm