import React, { FC, useState, useRef } from "react";

const Card: FC<{
  title: string;
  tag: string;
  description: string;
  audioSrc: string;
}> = ({ title, tag, description, audioSrc }) => {
  let audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(audioSrc) : undefined
  );
  const [isPlaying, setIsPlaying] = useState(false);
  
  const clickHandler = () => {
    if (isPlaying) {
      audio.current?.pause();
      setIsPlaying(false);
    } else {
      audio.current?.play();
      setIsPlaying(true);
    }
    };

  audio.current?.addEventListener("ended", () => {
    setIsPlaying(false);
  });

  return (
    <div className="relative h-72 w-72 px-5 py-8 group rounded-2xl bg-pink-400 overflow-hidden shadow-xl">
      <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0"></div>
      <div className="absolute inset-x-5 text-white">
        <h2 className="text-4xl font-semibold mb-2">{title}</h2>
        <p className="text-xs font-medium uppercase tracking-wider mb-3 bg-pink-500 inline-block p-1 rounded-md">
          {tag}
        </p>
        <p className="line-clamp-3">{description}</p>
      </div>
      <button className="absolute text-black inset-x-5 bottom-8 p-3 rounded-full font-semibold bg-white shadow-lg" onClick={clickHandler}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Card;
