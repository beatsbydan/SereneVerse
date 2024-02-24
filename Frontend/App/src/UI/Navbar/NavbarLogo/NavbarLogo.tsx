import React from 'react'
import icon from '../../../Assets/images/logo.svg'
import './NavbarLogo.css'

const NavbarLogo:React.FC = () => {
    return (
        <div className='navbarLogo'>
            <img src={icon} alt="icon" />
            <h3>SereneVerse</h3>
        </div>
    )
}

export default NavbarLogo