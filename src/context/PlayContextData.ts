import { createContext } from 'react'

type Episode = {
  title: string;
  subTitle: string;
  image: string;
  caminho: string;
}

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number; 
  isPlaying: boolean;
  play: (episode: Episode) => void;
  togglePlay: () => void;
  setplayingState: (state: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerContextData );