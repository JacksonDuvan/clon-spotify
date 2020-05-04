import React from 'react'
import Nav from '../components/Nav'
import HeaderPlayer from '../components/HeaderPlayer'
import Reproductor from '../components/Reproductor'
import MainTracks from '../components/MainTracks'



class WebTracks extends React.Component{


    render(){
        const { id } = this.props.match.params
        return(
            <div className="web-player">
                <Nav/>
                <HeaderPlayer />
                <MainTracks id={id} />    
                <Reproductor /> 
            </div>               
        )
    }
}

export default WebTracks