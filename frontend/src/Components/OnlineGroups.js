import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import UserItem from './pages/UserItem';
import '../Style/Style.css'
import GroupItem from './pages/GroupItem';
import { useSelector } from 'react-redux';

function OnlineGroups() {
const theme = useSelector((state) => state.theme.value);
  const [convo ]=useState([
      {
        name:"hi",
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
    <div id={theme?"bg-dark":"bg-light"} className='work-area'>
      <div id={theme?"bg-component-dark":"bg-component-light"} className="work-area-header">
        <p id={theme?"dark-text":"light-text"} className='online-users-title'>🟢 Online Groups</p>
      </div>

      <div id={theme?"bg-component-dark":"bg-component-light"} className='search-bar'>
          <input type='text' placeholder='Search Groups' className='search-input'/>
          <div id={theme?'dark-text':'light-text'}>
            <SearchIcon  className='large-icon'/>
          </div>
      </div>
      <div style={{display:"flex"}}>
        <div id={theme?"bg-component-dark":"bg-component-light"} className='online-user-img-container'>
          <img className='online-user-img' src={require('../assets/chat.png')} alt="online-logo" />
        </div>
        <div id={theme?"bg-component-dark":"bg-component-light"} className="users-list">
          {convo.map((user, index) => (
            <GroupItem key={index} theme={theme} props={user} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OnlineGroups
