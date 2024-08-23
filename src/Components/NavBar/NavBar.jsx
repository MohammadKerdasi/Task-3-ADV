import './NavBar.css'
import menu_icon from './../../../public/images/menu-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

      const [sideBar, setSideBar] = useState(false)
      const toggleMenu = () =>{
            sideBar ? setSideBar(false) : setSideBar(true);

        }

  return (
    <nav className= 'MK-Container '>
          <h1 className='Mk-Villa'>VILLA</h1>
            <ul className={sideBar? '' :'side-bar' }>
              <li><Link className='Mk-navBtn' to={'/'}> Home</Link></li>
              <li> <Link className='Mk-navBtn' to={'/Properties'}>Properties </Link></li>
              <li> <Link className='Mk-navBtn' to={'/PropertyDetails'}>Property Details</Link></li>
              <li> <Link className='Mk-navBtn' to={'/Contact'}>Contact Us</Link></li>
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

