import React from 'react'
import signupImg from '../assets/signup.svg'
import SignUpForm from '../components/SignUpForm'

function SignUp() {
  return (
    <div className='flex pr-20 pl-20 mt-20 mb-20 gap-20 text-gray-600'>
      <div className='w-1/2'>
        <img src={signupImg} alt="signUpImg" />
      </div>

      <div className='w-100'>
        <SignUpForm/>
      </div>
    </div>
  )
}

export default SignUp