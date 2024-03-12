import { useSelector } from "react-redux";
import MovieList from "./MoviesList";

const SecondryContainer=()=>{
    const movies=useSelector(store=>store.movies)
   
    
  return (
    <div className="bg-black">
       <div className=" mt-0 md:-mt-47 pl-4 md:pl-12 relative z-30">
       <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
       <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
       </div>
    </div>
  )
}

export default SecondryContainer;