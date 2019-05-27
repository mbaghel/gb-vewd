import React, { useRef, useState, useEffect } from "react";
import {
  IoMdPlay,
  IoMdPause,
  IoMdFastforward,
  IoMdRewind
} from "react-icons/io";
import "./Player.css";

const Player = ({ savedTime, urls, setVideo }) => {
  const videoEl = useRef(null);
  const timer = useRef(null);
  const [controlsActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    const handleKeys = e => {
      if (e.keyCode === window.VK_BACK_SPACE) {
        e.preventDefault();
        setVideo(null);
        return;
      }
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
  }, [setVideo]);

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
        src={`${urls.hd_url}?api_key=${localStorage.getItem("gbKey")}`}
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
