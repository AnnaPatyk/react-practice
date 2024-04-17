import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ btnState, videoId }) => {
  return (
    <div className={btnState ? "video-show" : "video"}>
      <YouTube videoId={videoId()} />
    </div>
  );
};

export default VideoPlayer;
