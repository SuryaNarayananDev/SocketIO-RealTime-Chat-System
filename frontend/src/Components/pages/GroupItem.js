import React from 'react'
import './PageStyle.css'
function GroupItem({theme, props}) {
  return (
    <div id={theme?"bg-secondary-dark":"bg-secondary-light"} className='user-items-outer'>
      <p className='con-icon'>{props.name[0]}</p>
      <p className='user-item-name'>{props.name}</p>
    </div>
  )
}

export default GroupItem
