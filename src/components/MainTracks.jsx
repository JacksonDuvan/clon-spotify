import React from "react";
import { connect } from "react-redux";
import * as tracksActions from "../actions/tracksActions";
import "../assets/styles/componets/MainTracks.css";
import Tracks from "./Tracks";
import Loading from "./Loading";

class MainTracks extends React.Component {
  componentDidMount() {
    const id = this.props.id;

    this.props.getAlbums(id);
  }

    
    handleClick = (id) => {
      this.props.getTracks(id)

      this.props.Sound('picture1')
      setTimeout(() => {
        this.props.Sound('picture')
      }, 100)
    };

  render() {
    const { album } = this.props;
    const {
      album: {
        tracks: { items },
      },
    } = this.props;

    if (this.props.loading) {
      return <Loading />;
    }

    return (
      <div className="main-tracks">
        <div className="main-tracks__img">
          <img src={album.images[0].url} width="250" height="250" alt="" />
          <h1>{album.name}</h1>
        </div>
        <div className="list-tracks">
          {items.map((item) => (
            <span
              className="track"
              onClick={() => this.handleClick(item.id)}
            >
              <Tracks
                isMusic
                id={item.id}
                name={item.name}
                duration={item.duration_ms}
                artist={album.artists[0].name}
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

export default connect(mapStateToProps, tracksActions)(MainTracks);
