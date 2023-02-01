export class MoviesApi {
  constructor() {
    this.link = "https://api.nomoreparties.co/beatfilm-movies";
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._getResponseData);
  }

  getMovies() {
    return this._request(`${this.link}`, {
      method: "GET",
    });
  }
}

const movieApi = new MoviesApi();

export default movieApi;
