import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { PlayerContext } from "./context/PlayContextData";
import { AuthProvider } from "./hooks/Auth";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";

function App() {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode: any) {
    setEpisodeList([episode] as any);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setplayingState(state: boolean) {
    setIsPlaying(state);
  }
  return (
    <>
      <BrowserRouter>
        <PlayerContext.Provider
          value={{
            episodeList,
            currentEpisodeIndex,
            play,
            isPlaying,
            togglePlay,
            setplayingState,
          }}
        >
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </PlayerContext.Provider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
