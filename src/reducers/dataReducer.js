const INITIAL_STATE = {

    user: {
        display_name: ''
     },
    searching: {
        albums:{
            items: [
                { 
                    name: '',
                    images: [
                        {url: ''}
                    ],
                    label: ''
                }
            ]
        }
    },

    artist:{
        items: [
            { 
                name: '',
                images: [
                    {url: ''}
                ],
                label: ''
            }
        ]
    },
    albums: {
        albums:[
            { 
                name: '',
                images: [
                    {url: ''}
                ],
                label: '' 

            }
        ]
    },
    playlist: {
       
        
        items: [
            {   
                name: '',
                images: [
                        {url: ''},
                ],
            }
        ]
    },
    isSearching: false,

    search: false,


}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'artist_datos':
            return {
                ...state,
                artist: action.payload
            }
        case 'albums_datos':
            return {
                ...state,
                albums: action.payload
            }
        case 'playlist_datos':
            return {
                ...state,
                playlist: action.payload
            }
        case 'searching':
            return{
                ...state,
                searching: action.payload
            }
        case 'FLAG':
            return {
                ...state,
                isSearching: action.payload
            }
        case 'SEARCH':
            return {
                ...state,
                search: action.payload
            }    
        case 'get_me':
            return{
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}