import React from "react";
import { Link } from "react-router-dom";
// import "../assets/styles/componets/Header.css";
import "../assets/styles/componets/Menu.css";
import { connect } from "react-redux";
import { logoutSesion } from "../actions/dataActions";

const Menu = (props) => {
  const { burger } = props;

  const { sesion } = props.dataReducer;

  const handleClick = () => {
    props.logoutSesion(false);
  };

  return (
    <>
      {burger ? (
        <div className="isActive">
          <ol>
            <li>
              <Link to="/">Premium</Link>
            </li>
            <li>
              <Link to="/">Ayuda</Link>
            </li>
            <li>
              <Link to="/">Descargar</Link>
            </li>
            <hr className="hr" />
            {sesion ? (
              <div className="login-register">
                <Link to="/" onClick={handleClick}>
                  Cerrar Sesión
                </Link>
              </div>
            ) : (
              <div className="login-register">
                <li>
                  <Link to="/register">Registrarse</Link>
                </li>
                <li>
                  <Link to="/login">Iniciar sesión</Link>
                </li>
              </div>
            )}
          </ol>
        </div>
      ) : (
        <div className="header-list">
          <ol>
            <li>
              <Link to="/">Premium</Link>
            </li>
            <li>
              <Link to="/">Ayuda</Link>
            </li>
            <li>
              <Link to="/">Descargar</Link>
            </li>
            <hr className="hr" />
            {sesion ? (
              <div>
                <Link to="/" onClick={handleClick}>
                  Cerrar Sesión
                </Link>
              </div>
            ) : (
              <div className="login-register">
                <li>
                  <Link to="/register">Registrarse</Link>
                </li>
                <li>
                  <Link to="/login">Iniciar sesión</Link>
                </li>
              </div>
            )}
          </ol>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  dataReducer: state.dataReducer,
});

const mapDispactToProps = {
  logoutSesion,
};

export default connect(mapStateToProps, mapDispactToProps)(Menu);
