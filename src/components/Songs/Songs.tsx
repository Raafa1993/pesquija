import { ContentBottom, Main } from "./styles";
import { PlayIcon } from "../../icons/PlayIcon";
import { useEffect, useState } from "react";

import { PauseIcon } from "../../icons/PauseIcon";

interface SongProps {
  index?: any;
  image?: string;
  title?: string;
  subTitle?: string;
  music?: string;
  positionAudio: number;
  setPositionAudio: (index: number) => void;
  handleOnOption: (item: any) => void;
  handleOnPlay: () => void;
}

export default function Songs({
  image,
  title,
  index,
  subTitle,
  music,
  handleOnOption,
  positionAudio,
  setPositionAudio,
}: SongProps) {
  const [selected, setSelected] = useState({});

  const [audio] = useState(new Audio(music));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => finishMusic());
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [positionAudio]);

  function handleOnSelect(item: any) {
    setSelected(item.rating);
    handleOnOption(item);
  }

  function finishMusic() {


    
    positionAudio >= index
      ? setPositionAudio(index + 1)
      : setPositionAudio(index);
    setPlaying(false);
  }

  return (
    <ContentBottom className="animate__animated animate__zoomIn">
      <Main>
        
        <div className="questions">
          <div className="songContainer">
            <div className="song">
              <div
                className={`artist ${
                  positionAudio >= index ? "" : "isDisabled"
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
              <div className="infos">
                <div className="name">{title}</div>
                <span>{subTitle}</span>
              </div>
              <button
                type="button"
                className="play"
                onClick={toggle}
                disabled={positionAudio >= index ? false : true}
              >
                {playing ? <PauseIcon /> : <PlayIcon />}
              </button>
            </div>
            <div className="score">
              {[0, 1, 2, 3, 4, 5].map((rowButton, keyButton) => (
                <button
                  key={keyButton}
                  type="button"
                  disabled={positionAudio >= index ? false : true}
                  className={`buttonSound ${
                    rowButton === selected && selected === 0
                      ? "zero"
                      : "" || (rowButton === selected && selected === 1)
                      ? "one"
                      : "" || (rowButton === selected && selected === 2)
                      ? "two"
                      : "" || (rowButton === selected && selected === 3)
                      ? "three"
                      : "" || (rowButton === selected && selected === 4)
                      ? "four"
                      : "" || (rowButton === selected && selected === 5)
                      ? "five"
                      : ""
                  }`}
                  onClick={() =>
                    handleOnSelect({
                      key: index,
                      rating: rowButton,
                      title: title,
                    })
                  }
                >
                  {keyButton}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Main>
    </ContentBottom>
  );
}
