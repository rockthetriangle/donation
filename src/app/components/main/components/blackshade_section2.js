import Image from "next/image";
import React from "react";
import BlogCard from "./blog_card";
import Button from "../../button";

export default function BlackShadeSection2() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-96 py-14 gap-4 bg-black bg-opacity-70">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-scada text-white capitalize text-center">
                Sow Seeds of {" "}
                <span className="relative text-inherit">
                    Hope
                    <Image
                        src={"/img/word_marker.png"}
                        alt="word_marker image"
                        width={32 * 16}
                        height={32 * 9}
                        className="w-full h-8 absolute -bottom-5 left-0"
                    />
                </span>
            </h2>
            <p className="text-md text-gray-50 text-center my-6 w-11/12">
                Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.” — Luke 6:38

Your generosity plants the seeds of hope, strength, and restoration in the lives of those facing hardship. Every gift—big or small—helps transform lives, bringing warmth, purpose, and faith to those in need. Let’s grow something beautiful together.
            </p>
            <Button
                color="cyan-400"
                href="/donate_now"
                text="donate now"
                className="max-[445px]:scale-125 sm:scale-110"
            />
            <Image
                src={"/img/large_poor_children_laughing.jpg"}
                width={32 * 16}
                height={16 * 9}
                alt="poor_children_bg"
                className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
            />
        </div>
    );
}
