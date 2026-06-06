import React from 'react'
import '../Style/Style.css'
import ChatArea from './ChatArea'
function WorkArea() {
  return (
    <div className='work-area'>
      <div className='side-bar-header'>
        workarea - header
      </div>
      <ChatArea/>
    </div>
  )
}

export default WorkArea
