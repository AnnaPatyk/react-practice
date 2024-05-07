import React, { useEffect, useRef, useState } from "react";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import PausePresentationIcon from "@mui/icons-material/PausePresentation";

const Video = ({ video }) => {
  const videoElement = useRef();
  const [timeVideo, setTimeVideo] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(video)) {
      setTimeVideo(localStorage.getItem(video));
    } else {
      localStorage.setItem(video, timeVideo);
    }
    videoElement.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      if (videoElement.current) {
        videoElement.current.removeEventListener(
          "timeupdate",
          handleTimeUpdate
        );
      }
    };
  }, [video]);

  const handleTimeUpdate = () => {
    const currentTime = videoElement.current.currentTime;
    setTimeVideo(currentTime);
    localStorage.setItem(video, currentTime);
  };
  const handleClickPlay = () => {
    videoElement.current.currentTime = timeVideo;
    videoElement.current.play();
    setPlay(() => {
      return !play;
    });
  };
  const handleClickPause = () => {
    videoElement.current.pause();
    setPlay(() => {
      return !play;
    });
  };
  const playBtn = (
    <div onClick={handleClickPlay}>
      <SmartDisplayIcon style={{ color: "red", fontSize: "36px" }} />
    </div>
  );
  const pauseBtn = (
    <div onClick={handleClickPause}>
      <PausePresentationIcon style={{ color: "green", fontSize: "36px" }} />
    </div>
  );

  return (
    <div
      className="video-player"
      style={{
        padding: "16px",
        flex: "0 1 30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <video
        style={{ overflow: "hidden", maxHeight: "200px" }}
        src={video}
        ref={videoElement}
        onEnded={() => {
          setPlay(() => {
            return !play;
          });
        }}
      ></video>
      {play ? playBtn : pauseBtn}
    </div>
  );
};

export default Video;
