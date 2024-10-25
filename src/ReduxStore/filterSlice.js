import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterItem",
    initialState: {
        position: 100,
        startYear:2000,
        endYear:2010,
        startYear2:0,
        endYear2:0,
        startRating:0,
        endRating:10,
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
    },
})

export const { changeScreen, changeStartYear, changeEndYear, changeStartYear2, changeEndYear2, changeStartRating, changeEndRating } = filterSlice.actions;
export default filterSlice.reducer;
