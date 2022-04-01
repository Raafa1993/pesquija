import { ContentBottom, Main } from "./styles";
import { PlayIcon } from "../../icons/PlayIcon";
import { useEffect, useRef, useState } from "react";

import { PauseIcon } from "../../icons/PauseIcon";

interface SongProps {
  index?: any;
  image?: string;
  title?: string;
  subTitle?: string;
  music?: string;
  positionAudio: number;
  play?: boolean;
  setPositionAudio: (index: number) => void;
  handleOnOption: (item: any) => void;
  positionAudioPlay:number,
  setPositionAudioPlay(position:number):void
}

export default function Songs({
  image,
  title,
  index,
  subTitle,
  music,
  play = false,
  handleOnOption,
  positionAudio,
  setPositionAudio,
  positionAudioPlay,
  setPositionAudioPlay = () => {}
}: SongProps) {
  const [selected, setSelected] = useState({});

  const audio = useRef<any>();
  const [playing, setPlaying] = useState(play);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing === true) setPositionAudioPlay(index)
  }, [playing])

  useEffect(() => {

    if ( playing === true && positionAudioPlay !== index ) {
      setPlaying(false)
    }

  }, [positionAudioPlay])

  useEffect(() => {
    if(playing) {
      audio.current?.play()  
    } else {
      audio.current?.pause()
      setPlaying(false)
    }
  }, [playing, audio]);

  useEffect(() => {
    audio.current?.addEventListener("ended", () => setPlaying(false));
    audio.current?.addEventListener("timeupdate", (e:any) => {

      if ( e.target.currentTime >= 5 && positionAudio >= index) {
        finishMusic()
      }

    })
  }, [positionAudio, playing, audio]);

  function handleOnSelect(item: any) {
    setSelected(item.rating);
    handleOnOption(item);
  }

  function finishMusic() {
    positionAudio >= index
      ? setPositionAudio(index + 1)
      : setPositionAudio(index);
  }

  return (
    <ContentBottom onClick={() => positionAudio < index && alert('Ouça a musica acima para desbloquear.')} className={`animate__animated animate__zoomIn ${positionAudio < index ? 'disabled' : 'enabled'}`}>
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
                <audio controls={positionAudio < index ? false : true} ref={audio}>
                  <source src={positionAudio < index ? music : music}/>
                </audio>
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
                {positionAudio > index && [0, 1, 2, 3, 4, 5].map((rowButton, keyButton) => (
                  <button
                    key={keyButton}
                    type="button"
                    disabled={positionAudio > index ? false : true}
                    className={`buttonSound animate__animated animate__fadeInDown ${
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
