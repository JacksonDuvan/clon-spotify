import React from 'react'
import '../assets/styles/componets/Reproductor.css'
import { connect } from 'react-redux'
import * as tracksActions from '../actions/dataActions'
import { withRouter} from 'react-router-dom'
import Sound from 'react-sound'
import { CSSTransition } from 'react-transition-group'


class Reproductor extends React.Component{

        state = {
            controlled: true,
            playStatus: Sound.status.PLAYING,
            isButton: true,
            loop: false,
            position: 0,
            volume: 100,
            isAnimated: false
        }

        onPlay = () => {
            this.setState({
                playStatus: Sound.status.PLAYING,
                isButton: false,
                isAnimated: true
            }) 
        }

        onStop = () => {
            this.setState({
                playStatus: Sound.status.PAUSED,
                isButton: true,
                isAnimated: false
            })
        }


        render(){
        const { preview_url } = this.props.tracksReducer.tracks

        let { volume } = this.state

        return(
            <div className="reproductor">

                    {
                    this.state.isButton
                    ? <a  onClick={this.onPlay}><i className="material-icons">play_circle_outline</i></a> 
                    :  <a onClick={this.onStop}><i className="material-icons">pause_circle_outline</i></a>
                    
                    }


                    <div className="player">
                        <hr/>
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
                            onClick={() => this.setState({
                                volume: volume <= 0 
                                ? volume
                                : volume - 10 
                               })} 
                            className="material-icons button"
                            >
                                volume_down
                        </i>
                        <i 
                            onClick={() => this.setState({
                                 volume: volume >= 100 
                                 ? volume
                                 : volume + 10 
                                })} 
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
                        onPlay={this.onPlay }
                        onPause={this.onStop}
                        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED, isButton: true})}
                    />
            </div>
        )
    }
}
const mapStateToProps = ({ tracksReducer }) => {
    return {
        tracksReducer
    }
}

export default withRouter(connect(mapStateToProps, tracksActions)(Reproductor))