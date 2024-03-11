import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../Redux-tool-kit/userSlice"
import moviesReducer from "../Redux-tool-kit/moviesSlice"

const appStore=configureStore({
   reducer:{
    user:userReducer,
    movies:moviesReducer
   } 
})

export default appStore