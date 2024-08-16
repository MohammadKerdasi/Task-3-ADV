import './NavBar.css'
import menu_icon from './../../../public/images/menu-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react'

const NavBar = () => {

      const [sideBar, setSideBar] = useState(false)
      const toggleMenu = () =>{
            sideBar ? setSideBar(false) : setSideBar(true);

        }

  return (
    <nav className= 'MK-Container '>
          <h1 className='Mk-Villa'>VILLA</h1>
            <ul className={sideBar? '' :'side-bar' }>
              <li><a className='Mk-navBtn'> Home</a></li>
              <li> <a className='Mk-navBtn'>Properties </a></li>
              <li> <a className='Mk-navBtn' >Property Details</a></li>
              <li> <a className='Mk-navBtn' >Contact Us</a></li>
              <li className='Mk-lastItem'>  
                <button className="Mk-button">
                <div className="Mk-icon-container">
                    <FontAwesomeIcon icon={faCalendarAlt} className="Mk-scheduleIcon" />
                </div>
                    <span className="button-text">Schedule a visit</span>
                </button> 
              </li>

        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default NavBar

