import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()
const access_token = 'BQDEECCNY6eOzDe30qy2evOlLR_IFYbdsDY-12kQOxeqwy-dHEpRpFgytfxaoJFqWEElD4sDL8ZQYyutFleFt71bkgqcE9PHFjpwpm7ZF4dfYPaWYv6T2PROPiplLTbHkJ1GlMoxkVwnQHj8mYacD42aiL7IeXNXQ9ReDLXEEGUReGOKeKdEqeqFYP5UkCR9gii1wMx-Nrkz6vQbqw'

export const getTracks = id => dispatch => {
    spotifyApi.setAccessToken(access_token)
    console.log(id)
    spotifyApi.getTrack(`${id}?market=CO`)
    .then(data => {
        dispatch({
            type: 'traer_track',
            payload:data
        })
    })
    .catch(error => {
        console.log(error)
    })
}

export const getAlbums = id => dispatch => {
    spotifyApi.setAccessToken(access_token)
    spotifyApi.getAlbum(`${id}`)
    .then(data => {
        dispatch({
            type: 'traer_album',
            payload: data
        })
    })
    .catch(error => {
        console.log(error)
    })
}

export const getPlaylist = id => dispatch => {
    spotifyApi.setAccessToken(access_token)
    spotifyApi.getPlaylist(`${id}`)
    .then(data => {
        dispatch({
            type: 'traer_playlist-tracks',
            payload: data
        })
    })
    .catch(error => {
        console.log(error)
    })
}


