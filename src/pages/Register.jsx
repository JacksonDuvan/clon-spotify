import React from 'react'
import '../assets/styles/componets/Register.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import HeaderInOut from '../components/HeaderInOut'


class Register extends React.Component {

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

        try {
            this.props.history.push('/webplayer')
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <div className="register">
                <HeaderInOut/>
                <hr className="hr1"/>
                
                <div className="register-div">
                    <h4>Regístrate con tu dirección de email</h4>
                    <form className="register-form" onSubmit={this.handleSubmit}>
                        <input 
                            name="email" 
                            type="text" 
                            placeholder="Correo electronico" 
                            autoFocus="autofocus" 
                            onChange={this.handleChange}
                        />
                        <input 
                            name="text" 
                            type="text" 
                            placeholder="Nombre y Apellido" 
                            onChange={this.handleChange}
                        />
                        <input 
                            name="password" 
                            type="password" 
                            placeholder="Contraseña" 
                            onChange={this.handleChange}
                        />
                        <div className="register-button">
                            <button className="btn">REGISTRARSE</button>
                        </div>
                    </form>
                    <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
                </div>
                <Footer/>
            </div>
        )
    }
    
}

export default Register