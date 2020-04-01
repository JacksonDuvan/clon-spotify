import React from 'react'
import ContainerSesion from './ContainerSesion'

import '../assets/styles/componets/HeaderPlayer.css'
import user from '../assets/images/user.png'

class HeaderPlayer extends React.Component {

    state = {
        isSesion: false,
    }


    handleClick = () => {
        this.setState({
            isSesion: !this.state.isSesion,
        })
    }


    render(){
        return(
            <div className="header-player">
                <div className="header-player__mejorar">
                    MEJORAR TU CUENTA
                </div>
                <div className="container-button">
                    <button className="header-player__perfil" onClick={this.handleClick}>
                        <div>
                            <img src={user} width="25px" alt="perfil"/>
                        </div>
                        <span>Jzambranogarzon</span>
                    </button>
                    {
                        this.state.isSesion 
                        ? <ContainerSesion/>
                        : <div className="isNone"></div>
                    }
                </div>
            </div>
        )
    }
}

export default HeaderPlayer