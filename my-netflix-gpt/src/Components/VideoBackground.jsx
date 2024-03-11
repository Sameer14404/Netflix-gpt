import { useEffect } from "react";
import { OPTION_KEY_API } from "../Utils/constant";
import {  useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/Redux-tool-kit/moviesSlice";

const VideoBackground=()=>{
const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);
console.log(trailerVideo)
   const dispatch=useDispatch()

    const url = `https://api.themoviedb.org/3/movie/932420/videos?language=en-US`;
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
    return<>
     <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo+
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
    </>
}

export default VideoBackground;