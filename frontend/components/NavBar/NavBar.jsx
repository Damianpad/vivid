import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { StyledNav } from "./NavBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faRightFromBracket, faGauge, faRectangleList, faClipboardList, faCreditCard, faCalendarDays, faPeopleGroup, faBullhorn, faChartLine} from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)


  return (
    <StyledNav>
      <div className="NavContainer">
        <div className="title">
          {show? <Link>
                    <img src="src\assets\vivid_white.png" alt="vivid logo" className="logo"/>
                  </Link>: null}
          
        <Link className={show ? "hamburger close" : "hamburger"}
              onClick={toggle}>
          <span className="meat"></span>
          <span className="meat"></span>
          <span className="meat"></span>
          <span className="meat"></span>
        </Link>
      </div>

      <div className="searchContainer">
        {show?<input type="search" />: null}
      </div>
      
        <div className="itemContainer">
         
          {show? <ul>
            <Link to='/dashboard' className="navItem">Dashboard</Link>
            <Link to='/clients' className="navItem">Clients</Link>
            <Link to='/projects' className="navItem">Projects</Link>
            <Link to='/billing' className="navItem">Billing</Link>
            <Link to='/calendar' className="navItem">Calendar</Link>
            <Link to='/team' className="navItem">Team</Link>
            <Link to='/marketing' className="navItem">Marketing</Link>
            <Link to='/analytics' className="navItem">Analytics</Link>

          </ul>: null}
          {!show? <ul className="iconContainer">
            <Link to='/dashboard'><FontAwesomeIcon icon={faGauge} className="navIcon" title="Dashboard"/> </Link>

            <Link  to='/clients'><FontAwesomeIcon icon={faRectangleList} className="navIcon" title="Clients"/></Link>

            <Link to='/projects'>
            <FontAwesomeIcon icon={faClipboardList} className="navIcon" title="Projects"/>
            </Link>

            <Link to='/billing'>
            <FontAwesomeIcon icon={faCreditCard} className="navIcon" title="Billing"/>
            </Link>
            
            <Link to='/calendar'>
            <FontAwesomeIcon icon={faCalendarDays} className="navIcon" title="Calendar"/>
            </Link>
            
            <Link to='/team'>
            <FontAwesomeIcon icon={faPeopleGroup} className="navIcon" title="Team"/>
            </Link>
            
            <Link to='/marketing'>
            <FontAwesomeIcon icon={faBullhorn} className="navIcon" title="Marketing"/>
            </Link>
            
            <Link to='analytics'>
            <FontAwesomeIcon icon={faChartLine} className="navIcon" title="Analytics"/>
            </Link>
            
          </ul>: null}
        </div>



        <div className="profileContainer">
            {show?<img src="https://pbs.twimg.com/profile_images/1567214310358749186/V2q8M1ys_400x400.jpg" alt="" />:null}
          {show?<div className="infoContainer">
            <span>Damian Padilla</span>
            <span>Parallax Films</span>
          </div>:null}
            <FontAwesomeIcon icon={faRightFromBracket} className="logoutIcon"/>
        </div>
        
    </div>

      <div className="mobile-nav">
        <Link>
          <img src="src\assets\vivid_white.png" alt="vivid logo" className="logo"/>
        </Link>
        <Link className={show ? "hamburger close" : "hamburger"}
              onClick={toggle}>
              <span className="meat"></span>
              <span className="meat"></span>
              <span className="meat"></span>
              <span className="meat"></span>
        </Link>

        <div
                            className={
                                show
                                    ? "mobile-nav-container mobile-height"
                                    : "mobile-nav-container"
                            }>
                            {show && (
                                <div className="nav-width">
                                
                                    <Link
                                        className="mobile-nav-item show && 'active'"
                                        to="/dashboard"
                                        onClick={toggle}>
                                        Dashboard
                                    </Link>

                                    <Link
                                        className="mobile-nav-item"
                                        to="/clients"
                                        onClick={toggle}>
                                        Clients
                                    </Link>

                                    <Link
                                        className="mobile-nav-item"
                                        to="/projects"
                                        onClick={toggle}>
                                        Projects
                                    </Link>

                                    <Link
                                        className="mobile-nav-item"
                                        to="/billing"
                                        onClick={toggle}>
                                        Billing
                                    </Link>

                                    <Link
                                        className="mobile-nav-item"
                                        to="/calendar"
                                        onClick={toggle}>
                                        Calendar
                                    </Link>
                                    <Link
                                        className="mobile-nav-item"
                                        to="/team"
                                        onClick={toggle}>
                                        Team
                                    </Link>
                                    <Link
                                        className="mobile-nav-item"
                                        to="/marketing"
                                        onClick={toggle}>
                                        Marketing
                                    </Link>
                                    <Link
                                        className="mobile-nav-item"
                                        to="/analytics"
                                        onClick={toggle}>
                                        Analytics
                                    </Link>
                                    
                                    <div className="profileContainer">
                                        {show?<img src="https://pbs.twimg.com/profile_images/1567214310358749186/V2q8M1ys_400x400.jpg" alt="" />:null}
                                        {show?<div className="infoContainer">
                                        <span>Damian Padilla</span>
                                        <span>Parallax Films</span>
                                        </div>:null}
                                        <FontAwesomeIcon icon={faRightFromBracket} className="logoutIcon"/>
        </div>
        
                                </div>
                                )}
                                </div>

      </div>
    </StyledNav>
   

  )
};

export default NavBar;