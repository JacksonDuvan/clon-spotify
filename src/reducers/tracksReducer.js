const INITIAL_STATE = {
  album: {
    id: "",
    name: "",
    images: [{ url: "" }],
    tracks: {
      items: [{ name: "" }, { duration_ms: "" }],
    },
    artists: [{ name: "" }],
  },

  tracks: {
    preview_url: "",
  },

  playlistTracks: {
    name: "",
    images: [{ url: "" }],
    tracks: {
      items: [
        {
          track: {
            name: "",
            duration_ms: "",
            artists: [{ name: "" }],
          },
        },
      ],
    },
  },
  animation: false,
  loading: false,
  error: null,
  sound: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "traer_album":
      return {
        ...state,
        album: action.payload,
        loading: false,
      };

    case "traer_track":
      return {
        ...state,
        tracks: action.payload,
        animation: true,
        loading: false,
      };
    case "traer_playlist-tracks":
      return {
        ...state,
        playlistTracks: action.payload,
        loading: false,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'sound':
      return{
        ...state,
        sound: action.payload
      }

    default:
      return state;
  }
};
