import React from 'react'
import Nav from '../components/Nav'
import HeaderPlayer from '../components/HeaderPlayer'
import Reproductor from '../components/Reproductor'
import MainPlaylist from '../components/MainPlaylist'



class WebTracks extends React.Component{

    render(){
        const { id } = this.props.match.params

        return(
            <div className="web-player">
                <Nav/>
                <HeaderPlayer />
                <MainPlaylist/> 
                <Reproductor key={id} /> 
            </div>               
        )
    }
}

export default WebTracks