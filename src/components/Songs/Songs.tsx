import { ContentBottom, Main } from "./styles";
import { PlayIcon } from "../../icons/PlayIcon";
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "../../context/PlayContextData";

import ImageDefault from '../../images/Ludimilla.png'
import { PauseIcon } from "../../icons/PauseIcon";

interface SongProps {
  image?: string;
  title?: string;
  subTitle?: string;
  music?: string;
  row: any;
}

export default function Songs({ image, title, subTitle, music, row }: SongProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [selected, setSelected] = useState({})
  const { 
    isPlaying,
    togglePlay,
    setplayingState,
  } = useContext(PlayerContext)

  console.log(selected)

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
                style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'})` }}
              />
              <div className="infos">
                <div className="name">{title}</div>
                <span>{subTitle}</span>
              </div>
              <button 
                type="button"
                className="play"
                onClick={togglePlay}
              >
                <button type="button" className="play" onClick={togglePlay}>
                  {isPlaying ? (
                    <PlayIcon />

                  ) : (
                    <PauseIcon />
                  )}
                </button>
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
                  type="button"
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
                  onClick={() => setSelected(row)}
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
