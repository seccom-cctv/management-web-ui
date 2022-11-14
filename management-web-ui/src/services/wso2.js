import { Base64 } from 'js-base64';

const CLIENT_KEY = process.env.REACT_APP_WSO2_CLIENT_KEY;
const CLIENT_SECRET = process.env.REACT_APP_WSO2_CLIENT_SECRET;
const REDIRECT_URI = process.env.REACT_APP_WSO2_REDIRECT_URI;
const IDP_SERVER_URL = process.env.REACT_APP_IDP_SERVER_URL;

// decides whether it needs to get a code (redirect to wso2 to get code) or an access_token (trade code for access_token)
export const wso2 = (params_code) => {
  if (!params_code && !getWithExpiry("access_token")) {
    redirectToLogin();
  }
  else if (params_code && !getWithExpiry("access_token")) {
    getAcessToken(params_code);
  }
}

export const redirectToLogin = () => {
  window.location.replace(`${IDP_SERVER_URL}/oauth2/authorize?scope=openid+internal_application_mgt_view&response_type=code&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_KEY}`);
}

// trades code parameter received by wso2 for an access_token
function getAcessToken(code) {
  let headerAuthorization = Base64.encode(`${CLIENT_KEY}:${CLIENT_SECRET}`);

  fetch(`${IDP_SERVER_URL}/oauth2/token?code=${code}&redirect_uri=http://localhost&grant_type=authorization_code`, {
    headers: {
      Authorization: `Basic ${headerAuthorization}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  })
    .then((response) => response.json())
    .then((data) => {
      let seconds = data.expires_in;
      setWithExpiry('access_token', data.access_token, seconds * 1000);
      setWithExpiry('id_token', data.id_token, seconds * 1000);
      localStorage.setItem('refresh_token', data.refresh_token);
    });
}

// trades a refresh_token for a new access_token
function getRefreshToken() {
  let headerAuthorization = Base64.encode(`${CLIENT_KEY}:${CLIENT_SECRET}`);
  let refresh_token = localStorage.getItem('refresh_token');

  fetch(`${IDP_SERVER_URL}/oauth2/token?refresh_token=${refresh_token}&grant_type=refresh_token`, {
    headers: {
      Authorization: `Basic ${headerAuthorization}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  })
    .then((response) => response.json())
    .then((data) => {
      let seconds = data.expires_in;
      setWithExpiry('access_token', data.access_token, seconds * 1000);
      setWithExpiry('id_token', data.id_token, seconds * 1000);
      localStorage.setItem('refresh_token', data.refresh_token);
    });
}

// sets item in local storage with time to live in milliseconds
function setWithExpiry(key, value, ttl) {
  const now = new Date()

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  }
  localStorage.setItem(key, JSON.stringify(item))
}

// gets item from localStorage if not expired
export const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key)
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    redirectToLogin();
    return null
  } else if (key === "id_token" && item.expiry - now.getTime() < 600 * 1000) {// added by me: if token expires in 10 minutes, refresh the token
    getRefreshToken();
  }
  return item.value
}