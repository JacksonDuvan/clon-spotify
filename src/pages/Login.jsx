import React from 'react'
import '../utils/styles/componets/Login.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import HeaderInOut from '../components/HeaderInOut'


class Login extends React.Component {

    state = {}


    handleChange = e =>{
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    render(){
        return(
            <div className="login">
                <HeaderInOut/>
                <hr className="hr1"/>
                
                <div className="login-div">
                    <h4>Para continuar, inicia sesión en Spotify.</h4>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input 
                            className="login-form__input" 
                            name="email" type="" 
                            placeholder="Correo electronico o nombre de usuario" 
                            autoFocus="autofocus" onChange={this.handleChange}
                        />
                        <input 
                            className="login-form__input" 
                            name="password" type="password" 
                            placeholder="Contraseña" 
                            onChange={this.handleChange}/>
                        <div className="login-button">
                        <label>
                            <input type="checkbox"/>Recordarme
                        </label>
                        <button className="btn">INICIAR SESIÓN</button>
                        </div>
                    </form>
                    <Link to="#">¿Has olvidado tu contraseña?</Link>
                    <hr/>
                    <h4>¿No tienes cuenta?</h4>
                    <Link to="/register">
                        <button className="btn-r">REGÍSTRATE EN SPOTIFY</button>
                    </Link>
                </div>
                <Footer/>
            </div>
        )
    }
    
}

export default Login