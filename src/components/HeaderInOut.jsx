import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo1.png'
import '../assets/styles/HeaderInOut.css'

const HeaderInOut = () => {
    return(
        <div className="header-login">
            <Link to="/"><img src={Logo} alt="Logo-spotify"/></Link>
        </div>
    )
}

export default HeaderInOut
