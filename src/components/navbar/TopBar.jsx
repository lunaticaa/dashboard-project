import React from 'react'
import './TopBar.css'
import { Language, NotificationsNone, Settings } from '@mui/icons-material';
function TopBar() {
  return (
    <div className='topbar'>
      <div className="topbar-wrapper">
        <div className="top-left"><span className='logo'>USTA</span></div>
        <div className="top-right">
          <div className='top-icon-container'>
            <NotificationsNone />
            <span className='top-icon-badge'>2</span>
          </div>
          <div className='top-icon-container'>
            <Language />
            <span className='top-icon-badge'>1</span>
          </div>
          <div className='top-icon-container'>
            <Settings />
          </div>
          <img src="./src/assets/imgs/prof1.jpg" alt="profile" className='topAvatar' />
        </div>
      </div>

    </div>
  )
}

export default TopBar
