import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterItem",
    initialState: {
        position: 100,
        startYear:1990,
        endYear:2024,
        startYear2:1900,
        endYear2:2024,
        startRating:0,
        endRating:10,
        startRating2:0,
        endRating2:10,
    },
    reducers: {
        changeScreen: (state, action) => {
            state.position = action.payload;
        },
        changeStartYear: (state, action) => {
            state.startYear = action.payload;
        },
        changeEndYear: (state, action) => {
            state.endYear = action.payload;
        },
        changeStartYear2: (state, action) => {
            state.startYear2 = action.payload;
        },
        changeEndYear2: (state, action) => {
            state.endYear2 = action.payload;
        },
        changeStartRating: (state, action) => {
            state.startRating = action.payload;
        },
        changeEndRating: (state, action) => {
            state.endRating = action.payload;
        },
        changeStartRating2: (state, action) => {
            state.startRating2 = action.payload;
        },
        changeEndRating2: (state, action) => {
            state.endRating2 = action.payload;
        },
    },
})

export const { 
    changeScreen, 
    changeStartYear, 
    changeEndYear, 
    changeStartYear2, 
    changeEndYear2, 
    changeStartRating, 
    changeEndRating,
    changeStartRating2, 
    changeEndRating2 
} = filterSlice.actions;
export default filterSlice.reducer;
