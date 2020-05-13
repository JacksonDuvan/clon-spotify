import React from "react";
import "../assets/styles/componets/ContainerSesion.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutSesion } from "../actions/dataActions";

class ContainerSesion extends React.Component {
  logout = () => {
    const url = "https://www.spotify.com/logout/";
    const spotifyLogoutWindow = window.open(
      url,
      "Spotify Logout",
      "width=5,height=5,top=0,left=0"
    );
    setTimeout(() => spotifyLogoutWindow.close(), 800);

    localStorage.removeItem("access_token");
    localStorage.removeItem("state");
    this.props.logoutSesion(false);
    this.props.history.push("/");
  };

  render() {
    let state = localStorage.getItem("state");
    console.log(state);
    return (
      <div className="header-player__sesion">
        <button>Cuenta </button>
        <hr className="hr-play" />
        <button onClick={this.logout}>Cerrar Sesión</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  logoutSesion,
};

export default withRouter(connect(null, mapDispatchToProps)(ContainerSesion));
