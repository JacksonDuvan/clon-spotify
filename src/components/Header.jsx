import React from 'react'
import logoSpotify from  '../assets/images/logo-spotify.png'
import '../assets/styles/componets/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="header">
            <div className="header-img">
                <Link to="/"> <img src={logoSpotify} alt="logo-spotify"/></Link>
            </div>
            <div className="header-list">
                <ol>
                    <li><Link to="/">Premium</Link></li>
                    <li><Link to="/">Ayuda</Link></li>
                    <li><Link to="/">Descargar</Link></li>
                    <hr className="hr"/>
                    <li><Link to="/register">Registrarse</Link></li>
                    <li><Link to="/login">Iniciar sesión</Link></li>
                </ol>
            </div>
        </div>
    )
}

export default Header