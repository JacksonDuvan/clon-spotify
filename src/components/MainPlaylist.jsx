import React from "react";
import { connect } from "react-redux";
import * as tracksActions from "../actions/tracksActions";
import "../assets/styles/componets/MainTracks.css";
import Tracks from "./Tracks";
import { Link } from "react-router-dom";
import Loading from "./Loading";

class MainPlaylist extends React.Component {
  componentDidMount() {
    const id = this.props.id;

    this.props.getPlaylist(id);

    this.handleClick = (id) => {
      this.props.getTracks(id);
    };
  }

  render() {
    // console.log(this.props);
    const { playlistTracks } = this.props;
    const { id } = this.props.playlistTracks;
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
            <Link
              to={`/playlist/track/${id}/${item.track.id}`}
              className="track"
              onClick={() => this.handleClick(item.track.id)}
            >
              <Tracks
                id={item.track.id}
                name={item.track.name}
                duration={item.track.duration_ms}
                artist={item.track.artists[0].name}
              />
            </Link>
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
