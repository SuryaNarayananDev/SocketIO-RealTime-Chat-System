import React from 'react'
import './PageStyle.css'
function CreateGroup({theme}) {
  return (
    <div id={theme ? "bg-dark" : "bg-light"} className='work-area'>
        <div id={theme?"bg-secondary-dark":"bg-secondary-light"} className="welcome-container-dark">
            <input id={theme?"bg-dark":"bg-light"} className='create-group-input' placeholder='Enter Group Name'/>
            <button className='create-group-button'>Create Group</button>
        </div>
    </div>
  )
}

export default CreateGroup
