"use client";

import Link from "next/link";
import React from "react";

export default function Button({
  type = "Link", // Supports "a", "Link", or "button"
  href = "#button",
  text = "Button",
  color = "sky-950",
  hovered = false,
  onClick = null,
  ...props
}) {
  const defaultClassName = `relative rounded-md p-3 px-5 text-white whitespace-nowrap uppercase font-scada text-xs w-fit bg-${color}`;
  const [className] = React.useState(
    props.className
      ? defaultClassName + " " + props.className
      : defaultClassName
  );
  const [isHovered, setIsHovered] = React.useState(hovered);

  const hoverEffectClass = `absolute -z-20 right-[0.30rem] top-[0.30rem] border-2 border-dashed rounded-md transition-all duration-300 ease-in-out ${
    !isHovered
      ? "border-transparent w-7/12 h-1"
      : `border-${color} w-full h-full`
  }`;

  const handleMouseEnter = () => {
    setIsHovered(hovered ? false : true);
  };

  const handleMouseLeave = () => {
    setIsHovered(hovered ? true : false);
  };

  const CommonContent = (
    <>
      {text}
      <span className={hoverEffectClass}></span>
    </>
  );

  if (type === "button") {
    return (
      <button
        className={className}
        title={text}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {CommonContent}
      </button>
    );
  } else if (type === "Link") {
    return (
      <Link
        href={href}
        className={className}
        title={text}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {CommonContent}
      </Link>
    );
  } else {
    return (
      <a
        href={href}
        className={className}
        title={text}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {CommonContent}
      </a>
    );
  }
}
