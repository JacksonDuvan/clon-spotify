import React from 'react'
import logoSpotify from  '../utils/images/logo-spotify.png'
import '../utils/styles/componets/Footer.css'
import { Link } from 'react-router-dom'

const Footer = ()  => {
    return(
        <div className="footer">
            <div className="footer-img">
                <Link to="/"> <img src={logoSpotify} alt="logo-spotify"/></Link>
            </div>
            <div className="footer-list">
                <ol>
                    <li>Legal</li>
                    <li>Centro de privacidad</li>
                    <li>Politica de Privacidad</li>
                    <li>Cookies</li>
                    <li>Sobre los anuncios</li>
                </ol>
            </div>
        </div>
    )
}

export default Footer