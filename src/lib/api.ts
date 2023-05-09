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
  