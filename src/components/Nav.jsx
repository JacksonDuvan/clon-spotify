import React from 'react'
import LogoSpotify from '../assets/images/logo-spotify.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { search } from '../actions/dataActions'

import '../assets/styles/componets/Nav.css'

class Nav extends React.Component{

    state = {
        isSearch: true
    }

    handleSearch = () => {
        this.setState({
            isSearch: !this.state.isSearch
        })
        this.props.search(this.state.isSearch)
    }


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
                        <li>
                            <Link to="/webplayer">
                                <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z" fill="currentColor"></path>
                                </svg>
                                <span>Inicio</span>
                            </Link>
                        </li>
                        <li className="buscar">
                            <Link to='/webplayer' onClick={this.handleSearch}>
                                <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                                <span>Buscar</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#'>
                                <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor"></path>
                                </svg>
                                <span>Tu Biblioteca</span>
                            </Link>
                        </li>
                    </ol>
                </div>

                <div className="nav-playlist">
                    <h2>PLAYLISTS</h2>

                    <ol>
                        <li><Link to='#'>Crear <span translate="no">playlist</span></Link></li>
                        <li><Link to='#'>Canciones que te <br/> gustan</Link></li>
                    </ol>
                </div>
                <hr className="hr-nav"/>
                <h2 className="nav-h2"><Link to='#'>Hip Hop</Link></h2>
                <h2 className="nav-h2"><Link to='#'>RapCaviar</Link></h2>
            </div>
        )
    }    
}

const mapDispactToProps = {
    search
}

export default connect(null, mapDispactToProps)(Nav)