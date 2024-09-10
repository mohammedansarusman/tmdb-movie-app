import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        moviesResult:"",
        tvResults:"",
    },
    reducers: {
        addMovies: (state, action)=>{
            state.moviesResult = action.payload;
        },
        addTv: (state, action) => {
            state.tvResults = action.payload;
        },
        // add other reducers if needed...  like movieDetails, search etc.
    },
});

export const { addMovies,addTv } = moviesSlice.actions;
export default moviesSlice.reducer;
