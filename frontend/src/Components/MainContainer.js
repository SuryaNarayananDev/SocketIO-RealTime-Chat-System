import React from 'react'
import '../Style/Style.css'
import SideBar from './SideBar'
import WorkArea from './WorkArea'
import WelcomePage from './pages/WelcomePage'
import CreateGroup from './pages/CreateGroup'
import OnlineGroups from './OnlineGroups'
import OnlineUsers from './OnlineUsers'
import { Outlet } from 'react-router'

function MainContainer({ theme, setTheme }) {
  return (
    <div className="main-container">
      <SideBar theme={theme} setTheme={setTheme}/>
      <Outlet/>
      {/* <WelcomePage theme={theme}/> */}
      {/* <WorkArea theme={theme}/> */}
      {/* <CreateGroup theme={theme}/> */}
      {/* <OnlineUsers theme={theme}/> */}
      {/* <OnlineGroups theme={theme}/> */}
      
    </div>
  )
}

export default MainContainer
