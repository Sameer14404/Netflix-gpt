import { useEffect } from "react";
import { OPTION_KEY_API } from "../Utils/constant";
import {  useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/Redux-tool-kit/moviesSlice";

const useMovieTrailer=(movieId)=>{


   const dispatch=useDispatch()

    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const getMovieVideo=async()=>{
        const data=await fetch(url,OPTION_KEY_API);
        const res= await data.json();
        const filterData = res.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : res.results[0];
      dispatch(addTrailerVideo(trailer?.key))
    }
    useEffect(()=>{
getMovieVideo()
    },[])
}
export default useMovieTrailer