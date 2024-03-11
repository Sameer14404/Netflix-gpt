import { OPTION_KEY_API } from "../Utils/constant.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/Redux-tool-kit/moviesSlice.js"; 
 export const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();

    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const FetchNowPlayingMovies = async () => {
      const res = await fetch(url, OPTION_KEY_API);
      const ans = await res.json();
  dispatch(addNowPlayingMovies(ans.results))

    };
    useEffect(() => {
      FetchNowPlayingMovies();
    }, []);
}
