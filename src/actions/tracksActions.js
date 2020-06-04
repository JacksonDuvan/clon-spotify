import SpotifyWebApi from "spotify-web-api-js";
import queryString from "query-string";

const spotifyApi = new SpotifyWebApi();

const parsed = queryString.parse(window.location.hash);
const token = parsed.access_token;

window.localStorage.setItem("access_token", token);

const access_token = window.localStorage.getItem("access_token");

export const getTracks = (id) => (dispatch) => {
  spotifyApi.setAccessToken(access_token);
  spotifyApi
    .getTrack(`${id}?market=CO`)
    .then((data) => {
      dispatch({
        type: "traer_track",
        payload: data,
      });
      const cacheList = window.localStorage.getItem("getTracks");
      if (cacheList) {
        return JSON.parse(cacheList);
      }
      window.localStorage.setItem("getTracks", JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAlbums = (id) => (dispatch) => {
  dispatch({
    type: "loading",
  });
  spotifyApi.setAccessToken(access_token);
  spotifyApi
    .getAlbum(`${id}`)
    .then((data) => {
      dispatch({
        type: "traer_album",
        payload: data,
      });
      const cacheList = window.localStorage.getItem("getAlbums");
      if (cacheList) {
        return JSON.parse(cacheList);
      }
      window.localStorage.setItem("getAlbums", JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPlaylist = (id) => (dispatch) => {
  dispatch({
    type: "loading",
  });
  spotifyApi.setAccessToken(access_token);
  spotifyApi
    .getPlaylist(`${id}`)
    .then((data) => {
      dispatch({
        type: "traer_playlist-tracks",
        payload: data,
      });
      const cacheList = window.localStorage.getItem("getPlaylist");
      if (cacheList) {
        return JSON.parse(cacheList);
      }
      window.localStorage.setItem("getPlaylist", JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const Sound = payload => ({
  type: 'sound',
  payload
})