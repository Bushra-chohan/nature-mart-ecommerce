import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUpForm() {

  const nav = useNavigate()

  const [registerData, setRegisterData] = useState({
    firstName: '',
    email: '',
    password: ''
  })

  const handleRegister = (e) => {
    e.preventDefault()
    localStorage.setItem('registerData', JSON.stringify(registerData))
    nav('/signin')
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }))
  }



  return (
    <div className='space-y-3'>
      <h1 className='text-3xl font-bold text-black'>Get Start Shopping</h1>
      <p>Welcome to NatureMart! Enter your email to get started.</p>
      <form onSubmit={handleRegister} className='space-y-2'>
        <div className='flex gap-1 w-100 mt-8'>
          <input name="firstName" value={registerData.firstName} placeholder="First Name" className="border p-2 rounded-md border-gray-300 pl-4" required onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" className="border p-2 rounded-md border-gray-300 pl-4" required />
      </div>

        <input name="email" value={registerData.email} placeholder="Email" className="border p-2 rounded-md border-gray-300 pl-4 w-100" required onChange={handleChange}/>
        <input name="password" value={registerData.password} placeholder="*****" className="border p-2 rounded-md border-gray-300 pl-4 w-100" required onChange={handleChange}/>


        <button className="border mt-5 text-white bg-green-600 p-2 rounded-md hover:text-green-600 hover:bg-white w-full">Register</button>
      </form>
 

      <p className='text-sm'>By continuing, you agree to out <a href="" className='text-green-700'>Terms of Service</a> & <a href="" className='text-green-700'> Privacy Policy</a></p>

      <p className='text-sm'>Already have an account? <Link to='/signin' className='text-green-600'>Sign In</Link></p>
    </div>
  )
}

export default SignUpForm