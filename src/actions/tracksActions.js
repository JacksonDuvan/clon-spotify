import SpotifyWebApi from "spotify-web-api-js";
import queryString from "query-string";

const spotifyApi = new SpotifyWebApi();

const parsed = queryString.parse(window.location.hash);
const token = parsed.access_token;

window.localStorage.setItem("access_token", token);

const access_token = window.localStorage.getItem("access_token");

export const getTracks = (id) => (dispatch) => {
  spotifyApi.setAccessToken(access_token);
  console.log(id);
  spotifyApi
    .getTrack(`${id}?market=CO`)
    .then((data) => {
      dispatch({
        type: "traer_track",
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAlbums = (id) => (dispatch) => {
  spotifyApi.setAccessToken(access_token);
  spotifyApi
    .getAlbum(`${id}`)
    .then((data) => {
      dispatch({
        type: "traer_album",
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPlaylist = (id) => (dispatch) => {
  spotifyApi.setAccessToken(access_token);
  spotifyApi
    .getPlaylist(`${id}`)
    .then((data) => {
      dispatch({
        type: "traer_playlist-tracks",
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
