import { createContext } from 'react'

type Question = {
  title: string;
  subTitle: string;
  image: string;
  caminho: string;
}

type PlayerContextData = {
  episodeList: Question[];
  currentEpisodeIndex: number; 
  isPlaying: boolean;
  play: (quation: Question) => void;
  togglePlay: () => void;
  setplayingState: (state: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerContextData );