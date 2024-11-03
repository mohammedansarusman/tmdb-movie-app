export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:process.env.REACT_APP_API_KEY,
    },
};

export const MOVIES_URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
export const PAGE = "&page=";
export const POSTER_URL = "https://image.tmdb.org/t/p/w220_and_h330_face"
export const TV_URL = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US'
export const PEOPLE_URL = "https://api.themoviedb.org/3/trending/person/day?language=en-US"
export const PEOPLE1 = 'https://api.themoviedb.org/3/person/'
export const NO_IMAGE = "https://cdn.vectorstock.com/i/500p/50/20/no-photography-sign-image-vector-23665020.jpg"
export const DETAILS_MOVIE = "https://api.themoviedb.org/3/movie/"
export const VIDEO_URL = "/videos?language=en-US"
export const DETAILS_TV = "https://api.themoviedb.org/3/tv/"
export const PROVIDERS = "https://api.themoviedb.org/3/watch/providers/movie?language=en-US"
export const FILTER_MOVIES1="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&"
export const FILTER_CRITERIA_1 = "&release_date.gte="
export const FILTER_CRITERIA_2 = "-01-01&release_date.lte="
export const FILTER_CRITERIA_3 = "-12-31&sort_by=popularity.desc"
export const FILTER_CRITERIA_4 ="&vote_average.gte="
export const FILTER_CRITERIA_5 = "&vote_average.lte="
export const SEARCH1 = "https://api.themoviedb.org/3/search/multi?query="
export const SEARCH2 = "&include_adult=false&language=en-US"






