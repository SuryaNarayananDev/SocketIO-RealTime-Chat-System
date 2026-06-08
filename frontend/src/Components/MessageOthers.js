import React from 'react'

function MessageOthers({theme, message, timeStamp}) {
  return (
    <div id={theme?"bg-messageOther-dark":"bg-messageOther-light"} className="message-other">
        <p className='message-text'>{message}</p>
        <p className='message-timeStamp'>{timeStamp}</p>
    </div>
  )
}

export default MessageOthers
