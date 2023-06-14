import { useEffect, useState } from "react";
import useSound from "use-sound"; //handles sound
import {AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai";// icons for play and pause
import { IconContext } from "react-icons"; //customising icons
import {Music} from "../../assets/Music.js"

export default function Player() {

  const randomValue = Math.floor(Math.random() * Music.length);

  const [selectedSong, setSelectedSong] = useState();
  const [playingSong, setPlayingSong] = useState(Music[randomValue]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });

  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(); // current position of the audio in seconds

  const [play, { pause, duration, sound }] = useSound(playingSong.audio_path);



  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  
  useEffect(() => {
    if (isPlaying) {
      pause(); //pauses audio
      setIsPlaying(false);
    }
  }, [playingSong])


  const playingButton = () => {
    if (isPlaying) {
      pause(); //pauses audio
      setIsPlaying(false);
    } else {
      play(); // plays audio
      setIsPlaying(true);
    }
  };

  const handleSliderChange = (e) => {
    sound.seek([e.target.value]);
  }
  

  const handleSelectSong = (e) => {
    selectSong(e);
    changeSong(e);
  }

  const selectSong = (e) => {
    setSelectedSong(e.target.value);
    // console.log(selectedSong);
  }

  const changeSong = (e) => {
    const foundSong = Music.find(Music => Music.title === e.target.value);
    setPlayingSong(foundSong);
    console.log(playingSong);
  }




  return (
    <div className="player-component">
      <div className="select-component">
        <select value={selectedSong} onChange={handleSelectSong}>
        {Music.map(({title}) => <option value={title}> {title} </option>)}
        </select>
      </div>

      <h2>Listening To</h2>
      <img className="musicImage" src={playingSong.image_path} />
      
      <div>
        <h3 className="songTitle">{playingSong.title}</h3>
        <p className="artistSubTitle">{playingSong.artist}</p>
      </div>
      
      <div>
        <div className="time">
          <p>{currTime.min}:{currTime.sec}</p>
          <p>{time.min}:{time.sec}</p>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={handleSliderChange}
        />
      </div>
      
      <div className="music-buttons">
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "green" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "green" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
      </div>

    </div>
  );
}
