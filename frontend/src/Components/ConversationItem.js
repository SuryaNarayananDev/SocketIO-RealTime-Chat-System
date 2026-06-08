import React from 'react'
import '../Style/Style.css'

function ConversationItem({props, theme}) {
  return (
    <div id={theme?"bg-secondary-dark":"bg-secondary-light"} className="conversation-item">
        <p className='con-icon'>{props.name[0]}</p>
        <p className='con-title'>{props.name}</p>
        <p className='con-lastMessage'>{props.lastMessage}</p>
        <p className='con-timeStamp'>{props.timeStamp}</p>
    </div>
  )
}

export default ConversationItem
