import React from 'react'
import '../assets/styles/componets/Tracks.css'

class Tracks extends React.Component{


    render(){
        const { name, duration, artist } = this.props
        return(
                <div className="main-tracks__list">
                <div className="music">
                    <div>
                        <p className="name">{name}</p>
                        <p className="artist">{artist}</p>
                    </div>
                    <div className="duration">
                        {parseInt(duration).toFixed().slice(0, 3)}
                    </div>
                </div>
            </div>
        )
    }
}


export default Tracks