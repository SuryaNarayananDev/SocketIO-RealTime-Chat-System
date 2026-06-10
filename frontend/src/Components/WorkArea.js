import React from 'react'
import '../Style/Style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import MessageSelf from './MessageSelf';
import MessageOthers from './MessageOthers';
import { useSelector } from 'react-redux';

function WorkArea() {
  const themeValue = useSelector((state) => state.theme.value);
  return (
    <div id={themeValue?"bg-dark":"bg-light"} className='work-area'>
      <div id={themeValue?"bg-component-dark":"bg-component-light"} className="work-area-header">
        
          <div className="chat-profile">1</div>

          <div id={themeValue?"bg-component-dark":"bg-component-light"} className="chat-info">
              <p className="chat-name">Surya</p>
              <p className="chat-last-seen">Last seen: 10:00 PM</p>
          </div>
          
          <div id={themeValue?"dark-text":"light-text"} className='chat-delete'>
            <IconButton >
              <DeleteIcon className="chat-delete-icon" />
            </IconButton>
          </div>
        </div>

      <div id={themeValue?"bg-component-dark":"bg-component-light"} className='chat-area'>
        
          
        <div className="message-container">
          <MessageOthers theme={themeValue} message="Hi" timeStamp="12:00 pm"/>
          <MessageSelf theme={themeValue} message="Hello" timeStamp="12:00 pm"/>
          <MessageOthers theme={themeValue} message="How are you?" timeStamp="12:00 pm"/>
          <MessageSelf theme={themeValue} message="I'm fine, what about you brooo ! and jsd asjdkasf sajkhfadf kjndfsd dsfjhdg sdgjsfg sfk " timeStamp="12:00 pm"/>
          <MessageOthers theme={themeValue} message="Hi" timeStamp="12:00 pm"/>
          <MessageSelf theme={themeValue} message="Hello" timeStamp="12:00 pm"/>
          <MessageOthers theme={themeValue} message="How are you?" timeStamp="12:00 pm"/>
          <MessageSelf theme={themeValue} message="I'm fine, what about you brooo ! and jsd asjdkasf sajkhfadf kjndfsd dsfjhdg sdgjsfg sfk " timeStamp="12:00 pm"/>
   
        </div>
        
        <div id={themeValue?"bg-secondary-dark":"bg-secondary-light"} className='chat-text-input'>
          <input type='text' placeholder='Type a message' className='chat-input-area'/>
          <iconbutton id={themeValue?"dark-text":"light-text"} className='chat-send-button'>
            <SendIcon />
          </iconbutton>
        </div>
      </div>
    </div>
  )
}

export default WorkArea
