import React from 'react'
import './PageStyle.css'
import { useSelector } from 'react-redux';
function WelcomePage() {
  const themeValue = useSelector((state) => state.theme.value);
  return (
    <div id={themeValue ? "bg-dark" : "bg-light"} className='work-area'>
        <div id={themeValue?"bg-secondary-dark":"bg-secondary-light"} className="welcome-container-dark">
            <img className='welcome-img' src={require('../../assets/welcome-img.png')} alt="Welcome" />
            <p className='welcome-text'>Say Hi! Loudlyyyy...</p>
        </div>
    </div>
  )
}

export default WelcomePage
