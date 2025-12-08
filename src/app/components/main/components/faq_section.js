"use client";

import React, { useRef, useState, useMemo } from "react";
import FaqElement from "./faq_element";
import Button from "../../button";
import { PlayFill, PauseFill, VolumeMuteFill, VolumeUpFill } from "react-bootstrap-icons";

export default function FaqSection({ more = null, large = false }) {
  const baseFaq = [
    {
      title: "Find Strength and Hope",
      text:
        "Facing life’s storms? Discover ministries and partners who walk beside you with prayer, resources, and encouragement—helping you rebuild on the solid foundation of Christ.",
    },
    {
      title: "Unite and Serve Together",
      text:
        "Explore how churches, organizations, and individuals across the Triangle are joining forces to strengthen the body of Christ and bring light to our communities.",
    },
    {
      title: "Be the Bridge",
      text:
        "Whether through volunteering, giving, or sharing your story, your support helps others stand firm and find purpose. Together, we build hope that lasts.",
    },
  ];

  // Combine base + extra FAQs safely
  const faqItems = useMemo(() => {
    const extra = Array.isArray(more) ? more : [];
    return [...baseFaq, ...extra];
  }, [more]);

  // Video state and controls
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) v.pause();
    else v.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      className={`flex ${large ? "flex-col" : "flex-row flex-wrap"} justify-center items-center w-full py-14 gap-8`}
    >
      {/* Portrait Video Section (9:16 aspect) */}
      <div
        className={`relative ${large ? "w-96" : "w-80"} aspect-[9/16] m-10 overflow-hidden`}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-10"
          src="/vid/intro_1080.mov"
          loop
          playsInline
          muted={isMuted}
        />

        {/* Control Buttons */}
        <div className="absolute bottom-3 left-3 z-30 flex gap-3 bg-black/40 rounded-full px-3 py-2">
          <button onClick={togglePlay} className="text-white">
            {isPlaying ? <PauseFill size={20} /> : <PlayFill size={20} />}
          </button>
          <button onClick={toggleMute} className="text-white">
            {isMuted ? <VolumeMuteFill size={20} /> : <VolumeUpFill size={20} />}
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div
        className={`flex flex-col justify-start items-start ${
          large ? "w-11/12" : "w-sm sm:max-w-lg"
        } gap-4 p-2 pl-3 pb-16`}
      >
        <h2 className="text-2xl font-scada text-black">
          Things are getting real, <br /> Time to get REAL!
        </h2>

        <div className={`flex flex-col gap-2 ${large ? "h-auto" : "h-96"}`}>
          {faqItems.map((item, index) => (
            <FaqElement key={`${item.title}-${index}`} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
