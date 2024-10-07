import {configureStore} from '@reduxjs/toolkit'
import themeSlice from './themeSlice'
import moviesSlice from './moviesSlice'
import filterSlice from './filterSlice'

const appStore = configureStore({
    reducer:{
        theme: themeSlice,
        movie:moviesSlice,
        filterItem:filterSlice,
        // add other reducers here if needed...  like user, product etc.
    }
})
export default appStore;