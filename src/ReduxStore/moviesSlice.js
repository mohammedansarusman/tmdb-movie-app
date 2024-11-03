import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        moviesResult:"",
        tvResults:"",
        peopleResults:"",
        movieDetails:"",
        videoKey:"",
        tvDetails:"",
        moviePage:1,
        providers:"",
        searchResult:"",
    },
    reducers: {
        addMovies: (state, action)=>{
            state.moviesResult = action.payload;
        },
        addTv: (state, action) => {
            state.tvResults = action.payload;
        },
        addPeople: (state,action)=>{
            state.peopleResults = action.payload
        },
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },
        addVideoKey: (state, action) => {
            state.videoKey = action.payload;
        },
        addTvDetails:(state,action) =>{
            state.tvDetails = action.payload;
        },
        addMoviePage:(state,action) =>{
            state.moviePage = action.payload;
        },
        addProviders:(state,action)=>{
            state.providers = action.payload;
        },
        addSearchResult:(state,action) =>{
            state.searchResult = action.payload;
        }

        // add other actions if needed...  like search, filter etc.
        // add other reducers if needed...  like movieDetails, search etc.
    },
});

export const { addMovies,addTv,addPeople,addMovieDetails,addVideoKey,addTvDetails,addMoviePage,addProviders, addSearchResult } = moviesSlice.actions;
export default moviesSlice.reducer;
