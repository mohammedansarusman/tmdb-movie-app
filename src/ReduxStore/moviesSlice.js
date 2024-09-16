import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        moviesResult:"",
        tvResults:"",
        peopleResults:"",
        movieDetails:"",
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
        // add other actions if needed...  like search, filter etc.
        // add other reducers if needed...  like movieDetails, search etc.
    },
});

export const { addMovies,addTv,addPeople,addMovieDetails } = moviesSlice.actions;
export default moviesSlice.reducer;
