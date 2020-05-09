import React from 'react'
import '../assets/styles/componets/ContainerSesion.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutSesion } from '../actions/dataActions'

class ContainerSesion extends React.Component{   

            handleClick = () => {
                this.props.logoutSesion(false)
                this.props.history.push('/')
            }

        render(){
            return(
                <div className="header-player__sesion">
                    <button>Cuenta </button>
                    <hr className="hr-play" />
                    <button onClick={this.handleClick}>Cerrar Sesión</button>
                </div>
            )
        }
}

const mapDispatchToProps = {
    logoutSesion
}

export default withRouter(connect(null, mapDispatchToProps)(ContainerSesion)) 