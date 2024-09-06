import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name:"theme",
    initialState: {
        searchColor: "bg-slate-700",
        longSearchBar: false,
    },
    reducers:{
        changeColor:(state,action)=>{
            // console.log("action",action)
            state.searchColor = action.payload;
        },
        changeSearchBar:(state,action)=>{
            state.longSearchBar = action.payload;
        }
    }
});

export default themeSlice.reducer;
export const {changeColor,changeSearchBar} = themeSlice.actions;

// the 'state' means the INITIAL STATE of the searchColor
// the toggleSearchColor is the DISPATCH AN ACTION IN RECUX
// (state,action)=>state.searchColor = ....  this is reducer function which modifies the state varioable in store.