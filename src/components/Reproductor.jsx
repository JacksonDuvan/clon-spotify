import React from "react";
import "../assets/styles/componets/Reproductor.css";
import { connect } from "react-redux";
import { search } from "../actions/dataActions";
import { withRouter } from "react-router-dom";
import Sound from "react-sound";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

class Reproductor extends React.Component {
  state = {
    isSearch: true,
    controlled: true,
    playStatus: Sound.status.PLAYING,
    isButton: true,
    loop: false,
    position: 0,
    volume: 100,
    isAnimated: false,
  };

  handleSearch = () => {
    this.setState({
      isSearch: !this.state.isSearch,
    });
    this.props.search(this.state.isSearch);
  };

  onPlay = () => {
    this.setState({
      playStatus: Sound.status.PLAYING,
      isButton: false,
      isAnimated: true,
    });
  };

  onStop = () => {
    this.setState({
      playStatus: Sound.status.PAUSED,
      isButton: true,
      isAnimated: false,
    });
  };

  render() {
    const { preview_url } = this.props.tracksReducer.tracks;

    let { volume } = this.state;

    return (
      <div className="reproductor">
        <div className="movil">
          <Link to="/webplayer" className="home">
            <svg
              viewBox="0 0 512 512"
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>

          <Link onClick={this.handleSearch} className="searchButton">
            <svg
              viewBox="0 0 512 512"
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </Link>

          {this.state.isButton ? (
            <i className="material-icons play-pause" onClick={this.onPlay}>
              play_circle_outline
            </i>
          ) : (
            <i className="material-icons play-pause" onClick={this.onStop}>
              pause_circle_outline
            </i>
          )}
        </div>

        <div className="player">
          <hr />
          <CSSTransition
            in={this.state.isAnimated}
            timeout={31000}
            classNames="fade"
            onEnter={this.onPlay}
            onExited={this.onStop}
          >
            <div className="picture "></div>
          </CSSTransition>
        </div>

        <div className="volume">
          <i
            onClick={() =>
              this.setState({
                volume: volume <= 0 ? volume : volume - 10,
              })
            }
            className="material-icons button"
          >
            volume_down
          </i>
          <i
            onClick={() =>
              this.setState({
                volume: volume >= 100 ? volume : volume + 10,
              })
            }
            className="material-icons button"
          >
            volume_up
          </i>
        </div>

        <Sound
          url={preview_url}
          playStatus={this.state.playStatus}
          volume={volume}
          onLoading={() => this.setState({ isButton: false, isAnimated: true })}
          onPlay={this.onPlay}
          onPause={this.onStop}
          onFinishedPlaying={() =>
            this.setState({ playStatus: Sound.status.STOPPED, isButton: true })
          }
        />
      </div>
    );
  }
}
const mapStateToProps = ({ tracksReducer }) => {
  return {
    tracksReducer,
  };
};

const mapDispatchToProps = {
  search,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Reproductor)
);
