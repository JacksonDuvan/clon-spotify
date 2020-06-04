import React from "react";
import { connect } from "react-redux";
import * as tracksActions from "../actions/tracksActions";
import "../assets/styles/componets/MainTracks.css";
import Tracks from "./Tracks";
import Loading from "./Loading";

class MainPlaylist extends React.Component {
  componentDidMount() {
    const id = this.props.id;

    this.props.getPlaylist(id);

  }

  handleClick = (id) => {
    this.props.getTracks(id);
    this.props.Sound('picture1')
    setTimeout(() => {
      this.props.Sound('picture')
    }, 100)
  };

  render() {
    const { playlistTracks } = this.props;
    const {
      playlistTracks: {
        tracks: { items },
      },
    } = this.props;

    if (this.props.loading) {
      return <Loading />;
    }

    return (
      <div className="main-tracks">
        <div className="main-tracks__img">
          <img
            src={playlistTracks.images[0].url}
            width="250"
            height="250"
            alt=""
          />
          <h1>{playlistTracks.name}</h1>
        </div>
        <div className="list-tracks">
          {items.map((item) => (
            <span
              className="track"
              onClick={() => this.handleClick(item.track.id)}
            >
              <Tracks
                key={item.track.id}
                id={item.track.id}
                name={item.track.name}
                duration={item.track.duration_ms}
                artist={item.track.artists[0].name}
              />
            </span>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state.tracksReducer;
};

export default connect(mapStateToProps, tracksActions)(MainPlaylist);
