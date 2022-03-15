import { ContentBottom, Main } from "./styles";
import { PlayIcon } from "../../icons/PlayIcon";
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "../../context/PlayContextData";

import ImageDefault from '../../images/Ludimilla.png'

interface SongProps {
  image?: string;
  title?: string;
  subTitle?: string;
  music?: string;
  row: any;
}

export default function Songs({ image, title, subTitle, music, row }: SongProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [selected, setSelected] = useState(0)
  const { 
    isPlaying,
    togglePlay,
    setplayingState,
  } = useContext(PlayerContext)

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  return (
    <ContentBottom>
      <Main>
        <div className="questions">
          <div className="songContainer">
            <div className="song">
              <div
                className="artist"
                style={{ backgroundImage: `url(${'http://192.168.15.8:3332/uploads/pergunta/1647351138344.jpeg'})` }}
              />
              <div className="infos">
                <div className="name">{title}</div>
                <span>{subTitle}</span>
              </div>
              <button 
                className="play"
                onClick={togglePlay}
              >
                <PlayIcon />
              </button>

            {music && (
              <audio
                src={music}
                ref={audioRef}
                autoPlay
                onPlay={() => setplayingState(true)}
                onPause={() => setplayingState(false)}
              />
            )}
            </div>
            <div className="score">
              {[0, 1, 2, 3, 4, 5].map((row, key) => (
                <button
                  className={`buttonSound ${
                    row === selected && selected === 0
                      ? "zero"
                      : "" || (row === selected && selected === 1)
                      ? "one"
                      : "" || (row === selected && selected === 2)
                      ? "two"
                      : "" || (row === selected && selected === 3)
                      ? "three"
                      : "" || (row === selected && selected === 4)
                      ? "four"
                      : "" || (row === selected && selected === 5)
                      ? "five"
                      : ""
                  }`}
                  onClick={() => setSelected(key)}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Main>
    </ContentBottom>
  );
}
