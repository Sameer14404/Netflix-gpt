import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies.js";
import { usePopularMovies } from "../customHooks/usePopularMovies.js";
import Headers from "./Headers.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondryContainer from "./SecondryContainer.jsx";

export function Browse() {
 useNowPlayingMovies()
usePopularMovies()
  return (
    <>
      <Headers />
      <MainContainer/>
      <SecondryContainer/>
    </>
  );
}
