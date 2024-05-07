import React from "react";
import Video from "./Video";
import video from "../../assets/mov_bbb.mp4";
import video2 from "../../assets/5899379-hd_1920_1080_24fps.mp4";
import video3 from "../../assets/17895933-hd_1920_1080_50fps.mp4";
const videoArr = [video, video2, video3];

const VideoPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      {videoArr.map((src, index) => {
        return <Video video={src} key={index} />;
      })}
    </div>
  );
};

export default VideoPage;
