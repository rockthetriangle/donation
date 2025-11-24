import Image from "next/image";
import React from "react";
import BlogCard3 from "./blog_card3";

export default function VolunteersSection() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto py-14 gap-4">
            <h2 className="flex flex-row flex-nowrap whitespace-nowrap justify-center items-center text-3xl font-scada text-sky-950 text-center mb-2">
                Our Volunteers: &nbsp;
                <span className="relative text-inherit">
                    The Heart of Hope
                    <Image
                        src={"/img/word_marker.png"}
                        alt="word_marker image"
                        width={32 * 16}
                        height={32 * 9}
                        className="w-full h-8 absolute -bottom-5 left-0"
                    />
                </span>
            </h2>
            <p className="text-md text-gray-500 text-center w-11/12">
                Our volunteers are the beating heart of our mission, bringing compassion, dedication, and love to every effort. Their selfless service creates lasting change, offering strength and hope to those in need. ❤️
            </p>
            <div className="flex flex-row flex-wrap justify-center items-center gap-5">
                <BlogCard3
                    src={"/img/sara.jpg"}
                    title={"Sara S."}
                    button_color={"cyan-400"}
                />
                <BlogCard3
                    src={"/img/shiloh.jpg"}
                    title={"Shiloh S"}
                    button_color={"emerald-400"}
                />
                <BlogCard3
                    src={"/img/brad_vol.jpg"}
                    title={"Bradley S"}
                    button_color={"sky-400"}
                />
            </div>
        </div>
    );
}
