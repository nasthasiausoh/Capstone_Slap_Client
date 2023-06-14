import { useEffect, useState } from "react";
import useSound from "use-sound"; //handles sound
import Snooze from "../../assets/Music/Snooze.mp3"; // gets mp3 from assets
import {AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai";// icons for play and pause
import { IconContext } from "react-icons"; //customising icons

const Player = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {pause, duration, sound}] = useSound(Snooze);

    const playingButton = () => {
        if (isPlaying) {
            pause(); //pauses audio
        } else {
            play(); // plays audio
            setIsPlaying(true);
        }
    };

    return ( 
        <div className="player-scomponent">
        <h2>Playing Now</h2>
        <img
          className="musicCover"
        //   src="https://picsum.photos/200/200"
        />
        <div>
          <h3 className="SongTitle">Snooze</h3>
          <p className="Artist">SZA</p>
        </div>
        <div>
          {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
        </div>
      </div>



     );
}
 
export default Player;