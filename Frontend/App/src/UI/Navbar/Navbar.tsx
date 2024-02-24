import React, { ReactNode } from 'react'
import './Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'
import NavbarLogo from './NavbarLogo/NavbarLogo'
import bell from '../../Assets/icons/bell.svg'

const CustomNavLink:React.FC<{to: string, children:ReactNode}> = (props) => {
    const location = useLocation();
    const isActive = location.pathname === props.to

    return(
        <NavLink to={props.to} className={isActive ? "navLink active" : "navLink"}>
            {props.children}
        </NavLink>
    )
}

const Navbar :React.FC= () => {
    return (
        <div className='navBar'>
            <NavbarLogo/>
            <nav className="navLinks">
                <CustomNavLink to="/home" >Home</CustomNavLink>
                <CustomNavLink to="/tracker" >Tracker</CustomNavLink>
                <CustomNavLink to="/resources" >Resources</CustomNavLink>
                <CustomNavLink to="/profile" >Profile</CustomNavLink>
            </nav>
            <div className="navProfile">
                {/* <img src="" alt="" /> */}
                <div className="img"></div>
                <div className="personInfo">
                    <h4>Hi, Femi</h4>
                    <small>Patient</small>
                </div>
            </div>
            <div className="notification">
                <img src={bell} alt="" />
            </div>
        </div>
    )
}

export default Navbar