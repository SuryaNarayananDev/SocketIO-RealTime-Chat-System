import React from 'react'
import './PageStyle.css'
function WelcomePage({ theme }) {
  return (
    <div id={theme ? "bg-dark" : "bg-light"} className='work-area'>
        <div id={theme?"bg-secondary-dark":"bg-secondary-light"} className="welcome-container-dark">
            <img className='welcome-img' src={require('../../assets/welcome-img.png')} alt="Welcome" />
            <p className='welcome-text'>Say Hi! Loudlyyyy...</p>
        </div>
    </div>
  )
}

export default WelcomePage
