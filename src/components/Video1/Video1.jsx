import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="w-full h-full">
      <video
        src="/Video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoPlayer;
