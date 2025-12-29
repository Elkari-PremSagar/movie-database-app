export const API_KEY = '96c3115fc4b936625b81ceba126482ff'

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export const popularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`

export const topRatedMoviesURL = page =>
  `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`

export const upcomingMoviesURL = page =>
  `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`

export const movieDetailsURL = id =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`

export const movieCastURL = id =>
  `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`

export const searchMoviesURL = (query, page) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
