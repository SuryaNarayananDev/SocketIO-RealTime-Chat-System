import React from 'react'
import '../Style/Style.css'
import SearchBar from './SearchBar'
import Contacts from './Contacts'
function SideBar() {
  return (
    <div className="side-bar">
        <div className='side-bar-header'>
          header
        </div>
        <SearchBar/>
        <Contacts/>
    </div>
  )
}

export default SideBar
