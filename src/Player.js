import React, { useRef, useState, useEffect, useContext } from "react";
import {
  IoMdPlay,
  IoMdPause,
  IoMdFastforward,
  IoMdRewind
} from "react-icons/io";
import { User } from "./AuthGate";
import "./Player.css";
import formatTime from "./lib/formatTime";
import { saveTime } from "./lib/fetching";

const Player = props => {
  const {
    id,
    saved_time: savedTime,
    length_seconds: lengthSeconds,
    name,
    ...urls
  } = props;

  const videoEl = useRef(null);
  const controlTimer = useRef(null);
  const videoTimer = useRef(null);
  const [controlsActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const [currTime, setCurrTime] = useState(0);

  const user = useContext(User);

  // enable controls on keydown events and disable after 3 seconds
  useEffect(() => {
    const handleKeys = () => {
      setActive(true);
      clearTimeout(controlTimer.current);
      controlTimer.current = setTimeout(() => {
        setActive(false);
      }, 3000);
    };
    window.addEventListener("keydown", handleKeys);
    return () => {
      window.removeEventListener("keydown", handleKeys);
      clearTimeout(controlTimer.current);
    };
  }, []);

  // update current time every second while video playing
  const keepTime = () => {
    clearInterval(videoTimer.current);
    videoTimer.current = setInterval(() => {
      setCurrTime(Math.floor(videoEl.current.currentTime));
    }, 1000);
  };
  // stop updating current time before unmounting
  useEffect(
    () => () => {
      clearInterval(videoTimer.current);
    },
    []
  );

  // set video to start at savedTime if it exists
  const setStartTime = () => {
    const startTime = savedTime ? parseFloat(savedTime) : 0;
    videoEl.current.currentTime = startTime;
  };
  // store savedTime to api when unmounting
  useEffect(
    () => () => {
      saveTime(user, id, videoEl.current.currentTime);
    },
    [id, user]
  );

  const togglePlay = () => {
    if (videoEl.current.paused) {
      videoEl.current.play();
    } else {
      videoEl.current.pause();
    }
  };

  const skip = amt => {
    videoEl.current.currentTime += amt;
  };

  const timeZone = (
    <div>
      <div className="video-info">
        <p className="title">{name}</p>
        <p>
          {formatTime(currTime)}/{formatTime(lengthSeconds)}
        </p>
      </div>
      <div className="time-bar">
        <div
          className="time-inner"
          style={{ width: `${(currTime / lengthSeconds) * 100}%` }}
        />
      </div>
    </div>
  );

  const buttonZone = (
    <div className="button-zone">
      <button onClick={() => skip(-30)}>
        <IoMdRewind />
      </button>
      <button onClick={() => togglePlay()}>
        {isPaused ? <IoMdPlay /> : <IoMdPause />}
      </button>
      <button onClick={() => skip(30)}>
        <IoMdFastforward />
      </button>
    </div>
  );

  return (
    <div>
      <video
        ref={videoEl}
        src={`${urls.hd_url}?api_key=${user}`}
        type="video/mp4"
        onDurationChange={setStartTime}
        onPlay={() => {
          keepTime();
          setPaused(false);
        }}
        onPause={() => {
          clearInterval(videoTimer.current);
          setPaused(true);
        }}
        onEnded={() => {
          window.history.back();
        }}
        autoPlay
      />
      <ControlArea
        isActive={controlsActive}
        timeZone={timeZone}
        buttonZone={buttonZone}
      />
    </div>
  );
};

const ControlArea = props => {
  let className = "controls";
  if (props.isActive) {
    className += " controls-active";
  }
  return (
    <div className={className}>
      {props.timeZone}
      {props.buttonZone}
    </div>
  );
};

export default Player;
