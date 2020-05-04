import React from 'react'
import Header from '../components/Header'
import PageLogin from '../components/PageLogin'
import Footer from '../components/Footer'
import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()

class Home extends React.Component {

    componentDidMount(){
        const params = this.getHashParams()

        spotifyApi.setAccessToken(params.access_token)
    }

    getHashParams() {
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
    
    render(){

        return(
            <>
                <Header />
                <PageLogin/>
                <Footer/>
            </>
        )
    }
}

export default Home