import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">
          <h4>{video.snippet.title}</h4>
        </div>
        <div className="description">
          <div className="channelTitle">{video.snippet.channelTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
