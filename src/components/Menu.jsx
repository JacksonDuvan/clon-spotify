import React from "react";
import { Link } from "react-router-dom";
// import "../assets/styles/componets/Header.css";
import "../assets/styles/componets/Menu.css";
import { connect } from "react-redux";
import { logoutSesion } from "../actions/dataActions";
import { authorize } from "../services/AuthToken";

const Menu = (props) => {
  const { burger } = props;

  const { sesion } = props.dataReducer;

  const logout = () => {
    const url = "https://www.spotify.com/logout/";
    const spotifyLogoutWindow = window.open(
      url,
      "Spotify Logout",
      "width=5,height=5,top=0,left=0"
    );
    setTimeout(() => spotifyLogoutWindow.close(), 800);

    localStorage.removeItem("access_token");
    localStorage.removeItem("state");
    props.logoutSesion(false);
  };

  const login = () => {
    authorize();
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
                <Link to="/" onClick={logout}>
                  Cerrar Sesión
                </Link>
              </div>
            ) : (
              <div className="login-register">
                <li>
                  <Link to="/register">Registrarse</Link>
                </li>
                <li>
                  <Link to="#" onClick={login}>
                    Iniciar sesión
                  </Link>
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
                <Link to="/" onClick={logout}>
                  Cerrar Sesión
                </Link>
              </div>
            ) : (
              <div className="login-register">
                <li>
                  <Link to="/register">Registrarse</Link>
                </li>
                <li>
                  <Link to="#" onClick={login}>
                    Iniciar sesión
                  </Link>
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
