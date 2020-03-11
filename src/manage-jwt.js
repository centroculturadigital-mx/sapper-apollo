// module for saving tokens to local storage
const TOKEN_KEY = "testToken";
// tokens = { accessToken: "xyz", refreshToken: "abc" }
export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export function getToken() {
  return JSON.parse(localStorage.getItem(TOKEN_KEY));
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
}
