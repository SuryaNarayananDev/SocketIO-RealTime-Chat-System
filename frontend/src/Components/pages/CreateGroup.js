import React from 'react'
import './PageStyle.css'
import { useSelector } from 'react-redux';

function CreateGroup() {
  const themeValue = useSelector((state) => state.theme.value);
  return (
    <div id={themeValue ? "bg-dark" : "bg-light"} className='work-area'>
        <div id={themeValue?"bg-secondary-dark":"bg-secondary-light"} className="welcome-container-dark">
            <input id={themeValue?"bg-dark":"bg-light"} className='create-group-input' placeholder='Enter Group Name'/>
            <button className='create-group-button'>Create Group</button>
        </div>
    </div>
  )
}

export default CreateGroup
