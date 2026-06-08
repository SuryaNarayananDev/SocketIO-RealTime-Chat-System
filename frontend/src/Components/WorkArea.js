import React from 'react'
import '../Style/Style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import MessageSelf from './MessageSelf';
import MessageOthers from './MessageOthers';

function WorkArea({theme}) {
  return (
    <div id={theme?"bg-dark":"bg-light"} className='work-area'>
      <div id={theme?"bg-component-dark":"bg-component-light"} className="work-area-header">
        
          <div className="chat-profile">1</div>

          <div id={theme?"bg-component-dark":"bg-component-light"} className="chat-info">
              <p className="chat-name">Surya</p>
              <p className="chat-last-seen">Last seen: 10:00 PM</p>
          </div>
          
          <div id={theme?"dark-text":"light-text"} className='chat-delete'>
            <IconButton >
              <DeleteIcon className="chat-delete-icon" />
            </IconButton>
          </div>
        </div>

      <div id={theme?"bg-component-dark":"bg-component-light"} className='chat-area'>
        
          
        <div className="message-container">
          <MessageOthers theme={theme} message="Hi" timeStamp="12:00 pm"/>
          <MessageSelf theme={theme} message="Hello" timeStamp="12:00 pm"/>
          <MessageOthers theme={theme} message="How are you?" timeStamp="12:00 pm"/>
          <MessageSelf theme={theme} message="I'm fine, what about you brooo ! and jsd asjdkasf sajkhfadf kjndfsd dsfjhdg sdgjsfg sfk " timeStamp="12:00 pm"/>
          <MessageOthers theme={theme} message="Hi" timeStamp="12:00 pm"/>
          <MessageSelf theme={theme} message="Hello" timeStamp="12:00 pm"/>
          <MessageOthers theme={theme} message="How are you?" timeStamp="12:00 pm"/>
          <MessageSelf theme={theme} message="I'm fine, what about you brooo ! and jsd asjdkasf sajkhfadf kjndfsd dsfjhdg sdgjsfg sfk " timeStamp="12:00 pm"/>
   
        </div>
        
        <div id={theme?"bg-secondary-dark":"bg-secondary-light"} className='chat-text-input'>
          <input type='text' placeholder='Type a message' className='chat-input-area'/>
          <iconbutton id={theme?"dark-text":"light-text"} className='chat-send-button'>
            <SendIcon />
          </iconbutton>
        </div>
      </div>
    </div>
  )
}

export default WorkArea
