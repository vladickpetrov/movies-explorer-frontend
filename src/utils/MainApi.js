const link = "https://api.videovlad.nomoredomains.club";

function getResponseData(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

function request(url, options) {
  return fetch(url, options).then(getResponseData);
}

export function getUserInfo(jwt) {
  return request(`${link}/users/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });
}

export function sendUserInfo(jwt, name, email) {
  return request(`${link}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });
}

export function getUserMovies(jwt) {
  return request(`${link}/movies`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });
}

export function sendMovie(jwt, filmProps) {
  return request(`${link}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filmProps),
  });
}

export function deleteMovie(jwt, movieId) {
  return request(`${link}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });
}
