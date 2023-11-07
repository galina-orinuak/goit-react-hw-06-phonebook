// import axios from 'axios';

// const API_KEY = '6311677ef041038470aae345cd71bb78';
// const BASE_URL = 'https://api.themoviedb.org/3/';

// export async function getMovies(params, query){
// return await axios.get(`${BASE_URL}${params}?api_key=${API_KEY}&${query}&language=en-US`)

// }

const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWU5ZTQzYmM1YWJkNjJiY2U0YTQxMjI1MGNhMmI0YSIsInN1YiI6IjY0OGRmMWZjYzNjODkxMDBlYjMyOGIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.na6QWvyUcstLt3R2SMZMeFGFAjRDN7q7NqBOmfFB0qU',
  },
};

export function getPopularMovies() {
  const URL = `${BASE_URL}movie/popular`;
  return fetch(URL, options).then(response => response.json());
}

export function getMovieById(movie_id) {
  const URL = `${BASE_URL}movie/${movie_id}`;
  return fetch(URL, options).then(response => response.json());
}

export function findMovie(query) {
  const URL = `${BASE_URL}search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  return fetch(URL, options).then(response => response.json());
}

export function getMovieCast(movie_id) {
  const URL = `${BASE_URL}movie/${movie_id}/credits`;
  return fetch(URL, options).then(response => response.json());
}

export function getMovieReviews(movie_id) {
  const URL = `${BASE_URL}movie/${movie_id}/reviews`;
  return fetch(URL, options).then(response => response.json());
}
