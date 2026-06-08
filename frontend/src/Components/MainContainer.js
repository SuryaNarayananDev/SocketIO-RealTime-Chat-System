import React from 'react'
import '../Style/Style.css'
import SideBar from './SideBar'
import WorkArea from './WorkArea'
import WelcomePage from './pages/WelcomePage'
import CreateGroup from './pages/CreateGroup'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import OnlineUsers from './OnlineUsers'

function MainContainer({ theme, setTheme }) {
  return (
    <div className="main-container">
      <SideBar theme={theme} setTheme={setTheme}/>
      {/* <WelcomePage theme={theme}/> */}
      {/* <WorkArea theme={theme}/> */}
      {/* <CreateGroup theme={theme}/> */}
      {/* <SignupPage/> */}
      {/* <LoginPage/> */}
      <OnlineUsers theme={theme}/>
      
    </div>
  )
}

export default MainContainer
