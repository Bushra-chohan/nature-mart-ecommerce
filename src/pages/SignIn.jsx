import React from 'react'
import signinImg from '../assets/signin.svg'
import SignInForm from '../components/SignInForm'

function SignIn() {
  return (
    <div className='flex pr-20 pl-20 mt-20 mb-20 gap-20 text-gray-600'>
      <div className='w-1/2'>
        <img src={signinImg} alt="signinImg" />
      </div>

      <div className=' w-100'>
        <SignInForm/>
      </div>
    </div>
  )
}

export default SignIn