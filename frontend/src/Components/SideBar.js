import React, { useState } from 'react'
import '../Style/Style.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ConversationItem from './ConversationItem';
import SearchIcon from '@mui/icons-material/Search';
import SunnyIcon from '@mui/icons-material/Sunny';
import { useNavigate } from 'react-router';
function SideBar({ theme, setTheme }) {

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
    {
      name:"Surya",
      lastMessage:"Hello",
      timeStamp:"today"
    }
    ,
    {
      name:"Surya",
      lastMessage:"Hello",
      timeStamp:"today"
    },
    {
      name:"Surya",
      lastMessage:"Hello",
      timeStamp:"today"
    },
    {
      name:"Surya",
      lastMessage:"Hello",
      timeStamp:"today"
    },
    {
      name:"Surya",
      lastMessage:"Hello",
      timeStamp:"today"
    },
    {
      name:"Surya",
      lastMessage:"Hello",
      timeStamp:"today"
    },
    {
      name:"Surya",
      lastMessage:"Hello",
      timeStamp:"today"
    }
  ])

  const navigate = useNavigate();

  return (
    <div id={theme?"bg-dark":"bg-light"} className="side-bar">
        <div  id={theme?'bg-component-dark':'bg-component-light'} className='side-bar-header' >
          <div id={theme?"dark-text":"light-text"} className='profile-icon'>
            <IconButton>
              <AccountCircleIcon className='large-icon' />
            </IconButton>
          </div>

          <div id={theme?"dark-text":"light-text"} className='header-icons'>
            <IconButton onClick={()=>{navigate('users')}}>
              <PersonAddIcon className='large-icon'/>
            </IconButton>
            <IconButton onClick={()=>{navigate('groups')}}>
              <GroupAddIcon className='large-icon'/>
            </IconButton>
            <IconButton onClick={()=>{navigate('create-group')}}>
              <AddBoxIcon className='large-icon'/>
            </IconButton>
            <IconButton onClick={()=>{setTheme(!theme)}}>
              {theme?<SunnyIcon/>:<DarkModeIcon/>}
              {/* <DarkModeIcon className='large-icon'/> */}
            </IconButton>
          </div>
        </div>

        <div id={theme?"bg-component-dark":"bg-component-light"} className='search-bar'>
          <input type='text' placeholder='Search' className='search-input'/>
          <div id={theme?'dark-text':'light-text'}>
            <SearchIcon  className='large-icon'/>
          </div>
        </div>
        
        <div id={theme?"bg-component-dark":"bg-component-light"} className='conversations'>
          {convo.map((conversation)=>{
            return <ConversationItem key={conversation.name} theme={theme} props={conversation}/>
            
          })}
        </div>
    </div>
  )
}

export default SideBar
