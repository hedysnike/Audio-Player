export function login(username: string, password: string) {
    return fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  }
  
  export function register( password: string, username: string ) {
    return fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, username }),
    });
  }
  
  
  export function checkUsernameExists(username: string) {
    return fetch(`/api/checkusername?username=${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  
  export function createPlaylist( name: string, image: string, userId: string ) {
  return fetch("/api/playlists/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, image, userId }),
  });
}

export function getPlaylist() {
  return fetch("/api/playlists/get", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
