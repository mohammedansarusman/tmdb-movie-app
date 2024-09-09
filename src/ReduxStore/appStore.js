import {configureStore} from '@reduxjs/toolkit'
import themeSlice from './themeSlice'
import moviesSlice from './moviesSlice'


const appStore = configureStore({
    reducer:{
        theme: themeSlice,
        movie:moviesSlice,
        // add other reducers here if needed...  like user, product etc.
    }
})
export default appStore;