import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies.js";
import Headers from "./Headers.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondryContainer from "./SecondryContainer.jsx";

export function Browse() {
 useNowPlayingMovies()
  return (
    <>
      <Headers />
      <MainContainer/>
      <SecondryContainer/>
    </>
  );
}
