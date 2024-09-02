import {configureStore} from '@reduxjs/toolkit'
import themeSlice from './themeSlice'

const appStore = configureStore({
    reducer:{
        theme: themeSlice,
        // add other reducers here if needed...  like user, product etc.
    }
})
export default appStore;