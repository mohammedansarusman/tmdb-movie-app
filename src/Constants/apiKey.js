export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:process.env.REACT_APP_API_KEY,
    },
};

export const MOVIES_URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
export const POSTER_URL = "https://image.tmdb.org/t/p/w220_and_h330_face"
export const TV_URL = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US'
