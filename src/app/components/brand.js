import React from "react";
import Image from "next/image";

export default function Brand({
  size = "text-3xl",
  color = "text-sky-950",
  overlay = false,
}) {
  return (
    <div className="relative flex justify-center items-center w-fit h-full">
      {/* Logo */}
      <Image
        src="/img/logo.png"
        alt="Rock the Triangle"
        width={300}
        height={300}
        className={`w-16 h-auto object-cover relative z-10 ml-20 ${
          overlay ? "brightness-200 contrast-90" : ""
        }`}
      />

      {/* Optional white overlay layer */}
      {overlay && (
        <div className="absolute inset-0 w-96 h-auto bg-white/50 mix-blend-overlay pointer-events-none z-20" />
      )}

      {/* Text */}
      <h4
        className={`font-scada ${size} ${color} relative z-30 ml-2 whitespace-nowrap`}
      >
        Rock the Triangle
      </h4>
    </div>
  );
}
