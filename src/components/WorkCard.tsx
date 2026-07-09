"use client";

import { useRef } from "react";

type WorkCardProps = {
  videoSrc: string;
  category: string;
  title: string;
  description: string;
};

export default function WorkCard({
  videoSrc,
  category,
  title,
  description,
}: WorkCardProps) {
  const thumbRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const playVideo = () => {
    const thumb = thumbRef.current;
    const iframe = iframeRef.current;
    if (!thumb || !iframe) return;

    iframe.src = videoSrc;
    thumb.classList.add("playing");
  };

  return (
    <div className="work-card">
      <div className="work-thumb" ref={thumbRef} onClick={playVideo}>
        <div className="play-cover">
          <div className="play-btn">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="play-label">Play Video</span>
        </div>
        <iframe ref={iframeRef} allowFullScreen allow="autoplay" title={title} />
      </div>
      <div className="work-meta">
        <div className="work-category">{category}</div>
        <div className="work-title">{title}</div>
        <div className="work-desc">{description}</div>
      </div>
    </div>
  );
}
