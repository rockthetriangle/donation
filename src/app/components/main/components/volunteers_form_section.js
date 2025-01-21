import Image from "next/image";
import React from "react";
import Button from "../../button";

export default function VolunteersFormSection() {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center w-full h-auto py-14 gap-8 bg-slate-950">
            <div className="relative w-80 sm:w-72 h-96 w-sm m-10">
                <div className="w-full h-full rounded-xl border-2 border-dashed border-cyan-400"></div>
                <Image
                    src={"/img/clothes.jpg"}
                    alt="clothes image"
                    width={32 * 16}
                    height={32 * 9}
                    className="z-10 w-28 h-28 object-cover rounded-lg absolute -right-5 -top-5"
                />
                <Image
                    src={"/img/crew.jpg"}
                    alt="crew image"
                    width={32 * 16}
                    height={32 * 9}
                    className="z-10 w-32 h-32 object-cover rounded-lg absolute -right-5 -bottom-5"
                />
                <Image
                    src={"/img/helping.jpg"}
                    alt="helping image"
                    width={32 * 16}
                    height={32 * 9}
                    className="z-10 w-40 h-40 object-cover rounded-lg absolute right-2 bottom-36"
                />
                <Image
                    src={"/img/logo.png"}
                    alt="happy_poor_education image"
                    width={32 * 16}
                    height={32 * 16}
                    className="w-80 h-80 object-cover rounded-lg absolute -left-5 top-5"
                />
            </div>
            <div className="flex flex-col justify-start items-start sm:max-w-lg gap-7 p-4 pl-6">
                <h2 className="flex flex-row flex-wrap justify-start items-start text-4xl font-scada text-white capitalize">
                    become a &nbsp;
                    <span className="relative text-inherit">
                        volunteer
                        <Image
                            src={"/img/word_marker.png"}
                            alt="word_marker image"
                            width={32 * 16}
                            height={32 * 9}
                            className="w-full h-8 absolute -bottom-6 left-0"
                        />
                    </span>
                </h2>
                <p className="text-md text-gray-300 w-10/12">
                    When you volunteer with Rock the Triangle, you’re not just giving your time—you’re offering hope, strength, and purpose to those facing life’s hardest challenges. You’ll be part of a faith-driven community that uplifts others, creates meaningful change, and shines God’s love through every act of service. Together, we rebuild lives on a firm foundation of compassion and support. Make a difference—be the rock someone can lean on today!
                </p>
                {/* Ensure the embedded form renders correctly */}
      			<div className="ml-embedded" data-form="HRAknV"></div>
            </div>
        </div>
    );
}
