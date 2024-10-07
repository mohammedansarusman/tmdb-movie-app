import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterItem",
    initialState: {
        position: 100,
    },
    reducers: {
        changeScreen: (state, action) => {
            state.position = action.payload;
        }
    },
})

export const { changeScreen } = filterSlice.actions;
export default filterSlice.reducer;
