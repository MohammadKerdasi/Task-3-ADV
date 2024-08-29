import "./NavBar.css";
import menu_icon from "./../../../public/images/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    sideBar ? setSideBar(false) : setSideBar(true);
  };

  return (
    <nav className={`MK-Container ${fixed ? 'nav-fixed' : ''}`}>
      <h1 className="Mk-Villa">VILLA</h1>
      <ul className={sideBar ? "" : "side-bar"}>
        <li>
        <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">Home </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Properties">Properties </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/PropertyDetails">Property Details </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Contact">Contact Us </NavLink>
        </li>
        <li className="Mk-lastItem">
          <button className="Mk-button">
            <div className="Mk-icon-container">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="Mk-scheduleIcon"
              />
            </div>
            <span className="button-text">Schedule a visit</span>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default NavBar;
