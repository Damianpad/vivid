import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { StyledNav } from "./NavBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faRightFromBracket, faGauge, faRectangleList, faClipboardList, faCreditCard, faCalendarDays, faPeopleGroup, faBullhorn, faChartLine} from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
  const [show, setShow] = useState(true)
  const toggle = () => setShow(!show)


  return (
    <StyledNav>
        <div className="NavContainer">
        <div className="title">
          {show?<h1>vivid</h1>: null}
          
          <FontAwesomeIcon icon={faBars} className="bars" onClick={toggle}/>

        </div>

        <div className="searchContainer">


          {show?<input type="search" />: null}
        </div>
        <div className="itemContainer">
         
          {show? <ul>
            <Link to='/dashboard' className="navItem">Dashboard</Link>
            <Link to='/' className="navItem">Clients</Link>
            <Link to='/' className="navItem">Projects</Link>
            <Link to='/' className="navItem">Billing</Link>
            <Link to='/' className="navItem">Team</Link>
            <Link to='/' className="navItem">Marketing</Link>
            <Link to='/' className="navItem">Analytics</Link>

          </ul>: null}
          {!show? <ul className="iconContainer">
            <Link to='/dashboard'><FontAwesomeIcon icon={faGauge} className="navIcon" title="Dashboard"/> </Link>
            <Link  to='/'><FontAwesomeIcon icon={faRectangleList} className="navIcon" title="Clients"/></Link>
            
            <FontAwesomeIcon icon={faClipboardList} className="navIcon" title="Projects"/>
            <FontAwesomeIcon icon={faCreditCard} className="navIcon" title="Billing"/>
            <FontAwesomeIcon icon={faCalendarDays} className="navIcon" title="Calendar"/>
            <FontAwesomeIcon icon={faPeopleGroup} className="navIcon" title="Team"/>
            <FontAwesomeIcon icon={faBullhorn} className="navIcon" title="Marketing"/>
            <FontAwesomeIcon icon={faChartLine} className="navIcon" title="Analytics"/>
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
    </StyledNav>
   

  )
};

export default NavBar;