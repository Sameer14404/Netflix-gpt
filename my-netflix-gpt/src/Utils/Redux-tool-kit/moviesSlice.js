import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        popularMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
          },
    }
})
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies} =MoviesSlice.actions;
export default MoviesSlice.reducer;