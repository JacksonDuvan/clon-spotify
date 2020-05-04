import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()
const access_token = 'BQDEECCNY6eOzDe30qy2evOlLR_IFYbdsDY-12kQOxeqwy-dHEpRpFgytfxaoJFqWEElD4sDL8ZQYyutFleFt71bkgqcE9PHFjpwpm7ZF4dfYPaWYv6T2PROPiplLTbHkJ1GlMoxkVwnQHj8mYacD42aiL7IeXNXQ9ReDLXEEGUReGOKeKdEqeqFYP5UkCR9gii1wMx-Nrkz6vQbqw'

export const getMe = () => dispatch => {
    spotifyApi.setAccessToken(access_token)
    spotifyApi.getMe()
    .then(data => {
            dispatch({
                type: 'get_me',
                payload: data
        })
    })
    .catch(err => {
            console.log(err)
        })
}

export const artistData = () => dispatch => {
    spotifyApi.setAccessToken(access_token)
    spotifyApi.getArtistAlbums('4gzpq5DPGxSnKTe4SA8HAU', { limit: 50 })
    // getArtistTopTracks('1vyhD5VmyZ7KMfW5gqLgo5', 'CO')
    .then(data => {
        dispatch({
            type: 'artist_datos',
            payload: data
        })
    })
    .catch(error => {
        console.log(error)
    })
}

export const albumsData = () => dispatch => {
    spotifyApi.setAccessToken(access_token)
    spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV', '7w19PFbxAjwZ7UVNp9z0uT', '6xS6mQz1fQZ6eZE654J15I', '3IJDtKfCEZcMgDJePCiXFa'])
    .then(data => {
        dispatch({
            type: 'albums_datos',
            payload: data
        })
    })
    .catch(error => {
        console.log(error)
    })

}


export const playlistData = id => dispatch => {
    // spotifyApi.setAccessToken(access_token)
    // imrjulian
    // h5vspm1zw8j1ytrzififrowsv
    spotifyApi.getUserPlaylists(id, { limit: 50 })
    .then(data => {
        dispatch({
            type: 'playlist_datos',
            payload: data
        })
    })
    .catch(error => {
        console.log(error)
    })
}

export const searchAlbums = e => dispatch =>{
    spotifyApi.searchAlbums(e, { limit: 50 })
        .then(album => {
            dispatch({
                type: 'searching',
                payload: album
            })
        })
        .catch(err => {
            console.log(err)
        })
}

export const flag = payload => ({
    type: 'FLAG',
    payload,
})

export const search = payload => ({
    type: 'SEARCH',
    payload  
})








