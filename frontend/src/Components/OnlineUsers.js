import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import UserItem from './pages/UserItem';
import '../Style/Style.css'
import {useSelector} from 'react-redux'
function OnlineUsers() {
  const themeValue = useSelector((state) => state.theme.value);
  const [convo ]=useState([
      {
        name:"Surya",
        lastMessage:"Hi! how are you",
        timeStamp:"Now"
      },
      {
        name:"Surya",
        lastMessage:"Hello",
        timeStamp:"today"
      },
  ])

  return (
    <div id={themeValue?"bg-dark":"bg-light"} className='work-area'>
      <div id={themeValue?"bg-component-dark":"bg-component-light"} className="work-area-header">
        <p id={themeValue?"dark-text":"light-text"} className='online-users-title'>🟢 Online Users</p>
      </div>

      <div id={themeValue?"bg-component-dark":"bg-component-light"} className='search-bar'>
          <input type='text' placeholder='Search Users' className='search-input'/>
          <div id={themeValue?"dark-text":"light-text"}>
            <SearchIcon  className='large-icon'/>
          </div>
      </div>
      <div style={{display:"flex"}}>
        <div id={themeValue?"bg-component-dark":"bg-component-light"} className='online-user-img-container'>
          <img className='online-user-img' src={require('../assets/chat.png')} alt="online-logo" />
        </div>
        <div id={themeValue?"bg-component-dark":"bg-component-light"} className="users-list">
          {convo.map((user, index) => (
            <UserItem key={index} theme={themeValue} props={user} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OnlineUsers
