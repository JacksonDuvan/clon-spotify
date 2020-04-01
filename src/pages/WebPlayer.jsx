import React from 'react'
import Nav from '../components/Nav'
import HeaderPlayer from '../components/HeaderPlayer'
import MainView from '../components/MainView'
import Reproductor from '../components/Reproductor'
import '../assets/styles/componets/WebPlayer.css'

class WebPlayer extends React.Component{

    render(){
        return(
            <div className="web-player">
                <Nav/>
                <HeaderPlayer />
                <MainView />
                <Reproductor /> 
            </div>               
        )
    }
}

export default WebPlayer