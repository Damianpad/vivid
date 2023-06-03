import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { StyledNav } from "./NavBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faRightFromBracket, faDisplay, faUserGroup, faShapes, faDollarSign, faCalendarDays, faUsers, faBullhorn, faChartLine} from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)


  return (
    <StyledNav className={show ? "openWidth" : null }>
      <div className={show ? "NavContainer openWidth" : "NavContainer "}>
        <div className="title">
          {show? <Link className="logoContainer">
                    <img src="src\assets\vivid_white.png" alt="vivid logo" className="logo"/>
                  </Link>: null}
          
<div>
<Link className={show ? "hamburger close" : "hamburger"}
              onClick={toggle}>
          <span className="meat"></span>
          <span className="meat"></span>
          <span className="meat"></span>
          <span className="meat"></span>
        </Link>
</div>
      </div>

      <div className="searchContainer">
        {show?<input type="search" placeholder="Search"/>: null}
      </div>
      
        <div className="itemContainer">
         
          {show? <ul className="itemList">
            <Link to='/dashboard' className="navItem">
              <FontAwesomeIcon icon={faDisplay} className="pairIcon" title="Dashboard"/>Dashboard
              </Link>
            <Link to='/clients' className="navItem">
              <FontAwesomeIcon icon={faUserGroup} className="pairIcon" title="Clients"/>Clients
              </Link>
            <Link to='/projects' className="navItem">
              <FontAwesomeIcon icon={faShapes} className="pairIcon" title="Projects"/>Projects
              </Link>
            <Link to='/billing' className="navItem">
            <FontAwesomeIcon icon={faDollarSign} className="pairIcon" title="Billing"/>
              Billing
            </Link>
            <Link to='/calendar' className="navItem">
            <FontAwesomeIcon icon={faCalendarDays} className="pairIcon" title="Calendar"/>Calendar
            </Link>
            <Link to='/team' className="navItem">
            <FontAwesomeIcon icon={faUsers} className="pairIcon" title="Team"/>
            Team
            </Link>
            <Link to='/marketing' className="navItem">
            <FontAwesomeIcon icon={faBullhorn} className="pairIcon" title="Marketing"/>Marketing
            </Link>

          </ul>: null}
          {!show? <ul className="iconContainer">
            <Link to='/dashboard'>
              <FontAwesomeIcon icon={faDisplay} className="navIcon" title="Dashboard"/> 
            </Link>

            <Link  to='/clients'>
              <FontAwesomeIcon icon={faUserGroup} className="navIcon" title="Clients"/>
            </Link>

            <Link to='/projects'>
              <FontAwesomeIcon icon={faShapes} className="navIcon" title="Projects"/>
            </Link>

            <Link to='/billing'>
              <FontAwesomeIcon icon={faDollarSign} className="navIcon" title="Billing"/>
            </Link>
            
            <Link to='/calendar'>
              <FontAwesomeIcon icon={faCalendarDays} className="navIcon" title="Calendar"/>
            </Link>
            
            <Link to='/team'>
              <FontAwesomeIcon icon={faUsers} className="navIcon" title="Team"/>
            </Link>
            
            <Link to='/marketing'>
              <FontAwesomeIcon icon={faBullhorn} className="navIcon" title="Marketing"/>
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