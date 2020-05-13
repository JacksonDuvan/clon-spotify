import { generateRandomString } from "../services/generateRandomString";

export const authorize = () => {
  let client_id = "7cd459dfc6a94248aa12f166d777a0e2"; // Your client id
  let redirect_uri = "https://clon-spotify-app.herokuapp.com/webplayer/"; // Your redirect uri

  let state = generateRandomString(16);

  localStorage.setItem("state", state);

  let scope = "user-read-private user-read-email";

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&state=" + encodeURIComponent(state);

  window.location = url;
};
