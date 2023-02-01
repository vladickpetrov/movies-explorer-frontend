export const baseUrl = "https://api.videovlad.nomoredomains.club";

function getResponseData(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

function request(url, options) {
  return fetch(url, options).then(getResponseData);
}

export function register(name, email, password) {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, email }),
  });
}

export function login(email, password) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  });
}

export function checkToken(jwt) {
  return request(`${baseUrl}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });
}
