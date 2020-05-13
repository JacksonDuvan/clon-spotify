import SpotifyWebApi from "spotify-web-api-js";
import queryString from "query-string";

const spotifyApi = new SpotifyWebApi();

const parsed = queryString.parse(window.location.hash);
const token = parsed.access_token;

window.localStorage.setItem("access_token", token);

const access_token = window.localStorage.getItem("access_token");

export const getMe = () => (dispatch) => {
  spotifyApi.setAccessToken(access_token);
  spotifyApi
    .getMe()
    .then((data) => {
      dispatch({
        type: "get_me",
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const artistData = () => (dispatch) => {
  spotifyApi.setAccessToken(access_token);
  spotifyApi
    .getArtistAlbums("4gzpq5DPGxSnKTe4SA8HAU", { limit: 50 })
    // getArtistTopTracks('1vyhD5VmyZ7KMfW5gqLgo5', 'CO')
    .then((data) => {
      dispatch({
        type: "artist_datos",
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const albumsData = () => (dispatch) => {
  spotifyApi.setAccessToken(access_token);
  spotifyApi
    .getAlbums([
      "5U4W9E5WsYb2jUQWePT8Xm",
      "3KyVcddATClQKIdtaap4bV",
      "7w19PFbxAjwZ7UVNp9z0uT",
      "6xS6mQz1fQZ6eZE654J15I",
      "3IJDtKfCEZcMgDJePCiXFa",
    ])
    .then((data) => {
      dispatch({
        type: "albums_datos",
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const playlistData = (id) => (dispatch) => {
  spotifyApi
    .getUserPlaylists(id, { limit: 50 })
    .then((data) => {
      dispatch({
        type: "playlist_datos",
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const searchAlbums = (e) => (dispatch) => {
  spotifyApi
    .searchAlbums(e, { limit: 50 })
    .then((album) => {
      dispatch({
        type: "searching",
        payload: album,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const flag = (payload) => ({
  type: "FLAG",
  payload,
});

export const search = (payload) => ({
  type: "SEARCH",
  payload,
});

export const loginSesion = (payload) => ({
  type: "login_sesion",
  payload,
});

export const logoutSesion = (payload) => ({
  type: "logout_sesion",
  payload,
});
