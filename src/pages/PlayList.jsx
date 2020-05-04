import React from 'react'
import Nav from '../components/Nav'
import HeaderPlayer from '../components/HeaderPlayer'
import Reproductor from '../components/Reproductor'
import MainPlaylist from '../components/MainPlaylist'



class PlayList extends React.Component{


    render(){
        const key = this.props.match.params.id
        return(
            <div className="web-player">
                <Nav/>
                <HeaderPlayer />
                <MainPlaylist id={key} />    
                <Reproductor /> 
            </div>               
        )
    }
}

export default PlayList