const INITIAL_STATE = {

    album:{
        name: '',
        images: [
            {url: ''}
        ],
        tracks: {
            items: [
                {name: ''},
                {duration_ms: ''},
            ]
        },
        artists: [
            {name: ''}
        ]

    },

    tracks: {
        preview_url: ''
    },

    playlistTracks: {
        name: '',
        images: [
            {url: ''}
        ],
        tracks: {
            items: [
                {track: {
                    name: '',
                  duration_ms: '',
                  artists: [
                    {name: ''}
                  ]
                }},
                
            ]
        },
    },
    animation: false


}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'traer_album':
            return {
                ...state,
                album: action.payload,
            }    
    
        case 'traer_track':
            return {
                ...state,
                tracks: action.payload,
                animation: true
            }
        case 'traer_playlist-tracks':
            return {
                ...state,
                playlistTracks: action.payload
            }
    
        default:
            return state
    }
}