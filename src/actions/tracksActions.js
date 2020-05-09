import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();
const access_token =
  "BQBZ3lssKF0Y7snZewuJuffnPO1PAkyD5BbxMSyuzNKQ-l-AaPIx4_4aWXiFhMsL8uf3VbepEcsJxCk3XlupEE0NMpzn2Et2YolSdWZmdIgK-Clq4ajSyPz3MVL6OEF2IQXO9icE2n1y7MK_66hJ8henUONQKskkXGfFhHoMHtNKlEwM_lBSNwsAS5d5Dfid2UCpLjq4zn1kxYU32w";

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
