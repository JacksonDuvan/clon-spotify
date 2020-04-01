import React from 'react'
import '../assets/styles/componets/ContainerSesion.css'
import { withRouter } from 'react-router-dom'

const ContainerSesion = (props) =>{   

        const handleClick = () => {
            props.history.push('/')
        }

        return(
            <div className="header-player__sesion">
                <button>Cuenta </button>
                <hr className="hr-play" />
                <button onClick={handleClick}>Cerrar Sesión</button>
            </div>
        )
}

export default withRouter(ContainerSesion ) 