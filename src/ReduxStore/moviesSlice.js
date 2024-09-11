import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        moviesResult:"",
        tvResults:"",
        peopleResults:"",
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
        }
        // add other reducers if needed...  like movieDetails, search etc.
    },
});

export const { addMovies,addTv,addPeople } = moviesSlice.actions;
export default moviesSlice.reducer;
