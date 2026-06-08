import React from 'react'
import '../Style/Style.css'
function MessageSelf({ theme, message, timeStamp }) {
    return (
        <div id={theme?"bg-messageSelf-dark":"bg-messageSelf-light"} className="message-self">
            <p className='message-text'>{message}</p>
            <p className='message-timeStamp'>{timeStamp}</p>
        </div>
    );
}
export default MessageSelf  
