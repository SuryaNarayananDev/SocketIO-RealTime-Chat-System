import React from 'react'
import './PageStyle.css'


function SignupPage() {
  return (
    <div className='sp-container'>
        <div className='sp-form-container'>
            <h2 className='sp-title'>Sign Up</h2>
            
            <input className='sp-input' placeholder='Username'/>
            <input className='sp-input' placeholder='Email'/>
            <input className='sp-input' placeholder='Password' type="password"/>
            <button className='sp-button'>Sign Up</button>
        </div>
    </div>
  )
}

export default SignupPage
