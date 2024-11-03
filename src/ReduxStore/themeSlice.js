import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name:"theme",
    initialState: {
        searchColor: "bg-gray-950",
        longSearchBar: false,
        inputValue:"",
    },
    reducers:{
        // action using to change the search bar color
        changeColor:(state,action)=>{
            state.searchColor = action.payload;
        },
        changeSearchBar:(state,action)=>{
            state.longSearchBar = action.payload;
        },
        
        // the value/string entering in search bar
        changeInputValue:(state,action)=>{
            state.inputValue = action.payload;
        }
    }
});

export default themeSlice.reducer;
export const {changeColor,changeSearchBar,changeInputValue} = themeSlice.actions;

// the 'state' means the INITIAL STATE of the searchColor
// the toggleSearchColor is the DISPATCH AN ACTION IN RECUX
// (state,action)=>state.searchColor = ....  this is reducer function which modifies the state varioable in store.