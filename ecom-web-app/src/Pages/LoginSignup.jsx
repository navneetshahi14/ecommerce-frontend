import React from 'react'
import './PageStyle/login-signup.scss'

const LoginSignup = () => {
  return (
    <>
      <div className="loginsignup">
        <div className="loginsignup-Container">
          <h1>Sign Up</h1>
          <div className="loginsignup-field">
            <input type="text" placeholder='Your Name' />
            <input type="email" name="email" id="email" placeholder='Email Address' />
            <input type="password" name="Password" id="Password" placeholder='Password' />  
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginSignup
