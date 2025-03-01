'use client';
import Image from "next/image";
import React from "react";
import {
    Linkedin,
    Share,
} from "react-bootstrap-icons";

export default function BlogCard3({
    src,
    title,
    description,
    button_color,
    read_more_link,
    ...props
}) {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div className="flex flex-col justify-center items-center m-3 rounded-lg overflow-hidden border-[0.3px] border-gray-200 max-w-xs" onMouseLeave={() => {setHovered(false)}} onMouseEnter={() => {setHovered(true)}}>
            <div className="relative flex justify-center items-center w-full h-auto">
                <Image
                    src={src}
                    alt="Blog Image"
                    width={32 * 16}
                    height={32 * 9}
                    className="w-[380px] h-[275px]"
                />
                <div
                    className={`z-30 absolute bottom-0 left-0 flex flex-col justify-center items-center gap-6 rounded-tr-lg shadow-inner-lg shadow-${button_color}`}
                >
                </div>
                <div className={hovered ? `z-10 absolute left-0 top-0 w-full h-full bg-gradient-to-t from-${button_color} to-transparent` : "hidden"}></div>
            </div>
            <hr className="h-4 w-full bg-transparent" />
            <div
                className={`flex flex-col justify-center items-center p-7 gap-1 bg-${button_color} w-full`}
            >
                <h4 className="text-white text-xl font-extrabold capitalize">
                    {title}
                </h4>
                <p className="text-white text-base">Volunteer</p>
            </div>
        </div>
    );
}
