import React from "react";
import ContainerSesion from "./ContainerSesion";
import { connect } from "react-redux";

import "../assets/styles/componets/HeaderPlayer.css";
import user from "../assets/images/user.png";
import Search from "../components/Search";

class HeaderPlayer extends React.Component {
  state = {
    isSesion: false,
  };

  handleClick = () => {
    this.setState({
      isSesion: !this.state.isSesion,
    });
  };
  render() {
    let { search } = this.props.dataReducer;
    let {
      user: { display_name },
    } = this.props.dataReducer;

    return (
      <div className="header-player">
        {search ? (
          <Search />
        ) : (
          <div className="header-player__mejorar">MEJORAR TU CUENTA</div>
        )}

        <div className="container-button">
          <button className="header-player__perfil" onClick={this.handleClick}>
            <div>
              <img src={user} width="25px" alt="perfil" />
            </div>
            <span>{display_name}</span>
          </button>
          {this.state.isSesion ? (
            <ContainerSesion />
          ) : (
            <div className="isNone"></div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataReducer: state.dataReducer,
});

export default connect(mapStateToProps, null)(HeaderPlayer);
