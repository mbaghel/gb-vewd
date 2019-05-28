import React, { useRef, useState, useEffect, useContext } from "react";
import {
  IoMdPlay,
  IoMdPause,
  IoMdFastforward,
  IoMdRewind
} from "react-icons/io";
import { User } from "./AuthGate";
import "./Player.css";

const Player = ({ savedTime, urls }) => {
  const videoEl = useRef(null);
  const timer = useRef(null);
  const [controlsActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(false);

  const user = useContext(User);

  useEffect(() => {
    const handleKeys = () => {
      setActive(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setActive(false);
      }, 3000);
    };
    window.addEventListener("keydown", handleKeys);
    return () => {
      window.removeEventListener("keydown", handleKeys);
      clearTimeout(timer.current);
    };
  }, []);

  const togglePlay = () => {
    if (isPaused) {
      videoEl.current.play();
    } else {
      videoEl.current.pause();
    }
    setPaused(!isPaused);
  };

  const skip = amt => {
    videoEl.current.currentTime += amt;
  };

  return (
    <div>
      <video
        ref={videoEl}
        src={`${urls.hd_url}?api_key=${user}`}
        type="video/mp4"
        autoPlay
      />
      {controlsActive && (
        <ControlArea
          isActive={controlsActive}
          skip={skip}
          isPaused={isPaused}
          togglePlay={togglePlay}
        />
      )}
    </div>
  );
};

const ControlArea = props => {
  const { isActive, skip, isPaused, togglePlay } = props;

  if (isActive) {
    return (
      <div className="Controls">
        <button onClick={() => skip(-10)}>
          <IoMdRewind />
        </button>
        <button onClick={() => togglePlay()}>
          {isPaused ? <IoMdPlay /> : <IoMdPause />}
        </button>
        <button onClick={() => skip(10)}>
          <IoMdFastforward />
        </button>
      </div>
    );
  }
  return null;
};

export default Player;
