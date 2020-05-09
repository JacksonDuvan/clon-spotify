import React from "react";
import Nav from "../components/Nav";
import HeaderPlayer from "../components/HeaderPlayer";
import MainView from "../components/MainView";
import Reproductor from "../components/Reproductor";
import { withRouter } from "react-router-dom";

class WebPlayer extends React.Component {
  render() {
    return (
      <div className="web-player">
        <Nav />
        <HeaderPlayer />
        <MainView />
        <Reproductor />
      </div>
    );
  }
}

export default withRouter(WebPlayer);
