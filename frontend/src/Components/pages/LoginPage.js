import React from 'react'

function LoginPage() {
  return (
      <div className='sp-container'>
        <div className='sp-form-container'>
            <h2 className='sp-title'>Login</h2>
            
            <input className='sp-input' placeholder='Email'/>
            <input className='sp-input' placeholder='Password' type="password"/>
            <button className='sp-button'>Login</button>
        </div>
    </div>
  )
}

export default LoginPage