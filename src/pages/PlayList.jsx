import React from "react";
import Nav from "../components/Nav";
import HeaderPlayer from "../components/HeaderPlayer";
import MainPlaylist from "../components/MainPlaylist";

class PlayList extends React.Component {
  render() {
    const key = this.props.match.params.id;

    return (
      <div className="web-player">
        <Nav />
        <HeaderPlayer />
        <MainPlaylist id={key} />
      </div>
    );
  }
}

export default PlayList;
