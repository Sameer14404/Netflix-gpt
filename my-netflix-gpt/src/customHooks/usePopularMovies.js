import { OPTION_KEY_API } from "../Utils/constant.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/Redux-tool-kit/moviesSlice.js"; 
 export const usePopularMovies=()=>{
    const dispatch = useDispatch();

    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const FetchNowPlayingMovies = async () => {
      const res = await fetch(url, OPTION_KEY_API);
      const ans = await res.json();
  dispatch(addPopularMovies(ans.results))

    };
    useEffect(() => {
      FetchNowPlayingMovies();
    }, []);
}
