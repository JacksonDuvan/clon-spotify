import React from 'react'
import LogoSpotify from '../assets/images/logo-spotify.png'
import { Link } from 'react-router-dom'
import home from '../assets/images/home.png'

import '../assets/styles/componets/Nav.css'

class Nav extends React.Component{
    render(){
        return(
            <div className="nav">
                <div className="nav-img">
                    <Link to="/">
                        <img src={LogoSpotify} alt="Logo Spotify"/>
                    </Link>
                </div>
                <div className="nav-list">
                    <ol>
                        <li><Link to="#">Inicio</Link></li>
                        <li><Link to="#">Buscar</Link></li>
                        <li><Link to="#">Tu Biblioteca</Link></li>
                    </ol>
                </div>

                <div className="nav-playlist">
                    <h2>PLAYLISTS</h2>

                    <ol>
                        <li><Link>Crear <span translate="no">playlist</span></Link></li>
                        <li><Link>Canciones que te <br/> gustan</Link></li>
                    </ol>
                </div>
                <hr className="hr"/>
                <h2 className="nav-h2"><Link>Hip Hop</Link></h2>
                <h2 className="nav-h2"><Link>RapCaviar</Link></h2>
            </div>
        )
    }    
}

export default Nav