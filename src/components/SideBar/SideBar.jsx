import React from 'react'
import './sidebar.css'
import { AttachMoney, ChatBubbleOutline, DynamicFeed, Equalizer, LineStyle, MailOutline, PermIdentity, Storefront, Timeline, TrendingUp, WorkOutline, Report } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function SideBar({ show, handleClick }) {

  return (
    <>
      <div className='side-bar'>
        <div className="side-bar-wrapper">
          <div className="side-bar-menu">
            <h3 className='side-bar-title'>DashBoard</h3>
            <ul className='side-bar-list'>
              <li className={`side-bar-item ${show === '/home' ? 'active' : ''}`}>
                <LineStyle className='side-bar-icon' />
                <Link to="/home" onClick={() => handleClick('/home')}>
                  Home
                </Link>
              </li>
              <li className={`side-bar-item ${show === '/analytices' ? 'active' : ''}`}>
                <Timeline className='side-bar-icon' />
                <Link to="/analytics" onClick={() => handleClick('/analytics')}>
                  Analytics
                </Link>
              </li>
              <li className={`side-bar-item ${show === '/sales' ? 'active' : ''}`}>
                <TrendingUp className='side-bar-icon' />
                <Link to="/sales" onClick={() => handleClick('/sales')}>
                  Sales
                </Link>
              </li>
            </ul>
          </div>
          <div className="side-bar-menu">
            <h3 className='side-bar-title'>Quick Menu</h3>
            <ul className='side-bar-list'>
              <li className="side-bar-item ">
                <PermIdentity className={`side-bar-item ${show === '/users' ? 'active' : ''}`} />
                <Link to="/users" onClick={() => handleClick('/users')}>Users</Link>
              </li>
              <li className="side-bar-item">
                <Storefront className={`side-bar-item ${show === '/product' ? 'active' : ''}`} />
                <Link to="/Products" onClick={() => handleClick('/Products')}>
                  Products
                </Link>
              </li>
              <li className="side-bar-item">
                <AttachMoney className='side-bar-icon' />
                Transactions
              </li>
              <li className="side-bar-item">
                <Equalizer className={`side-bar-item ${show === '/report' ? 'active' : ''}`} />
                <Link to="/Reports" onClick={() => handleClick('/Reports')}>
                  Reports
                </Link>
              </li>
            </ul>
          </div>
          <div className="side-bar-menu">
            <h3 className='side-bar-title'>Notifications</h3>
            <ul className='side-bar-list'>
              <li className="side-bar-item ">
                <MailOutline className={`side-bar-item ${show === '/mail' ? 'active' : ''}`} />
                <Link to="/Mails" onClick={() => handleClick('/Mails')}>
                  Mails
                </Link>
              </li>
              <li className="side-bar-item">
                <DynamicFeed className='side-bar-icon' />
                Feedback
              </li>
              <li className="side-bar-item">
                <ChatBubbleOutline className='side-bar-icon' />
                Messages
              </li>
            </ul>
          </div>
          <div className="side-bar-menu">
            <h3 className='side-bar-title'>Stuff</h3>
            <ul className='side-bar-list'>
              <li className="side-bar-item ">
                <WorkOutline className='side-bar-icon' />
                Manage
              </li>
              <li className="side-bar-item">
                <Timeline className='side-bar-icon' />
                Analytics
              </li>
              <li className="side-bar-item">
                <Report className='side-bar-icon' />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
