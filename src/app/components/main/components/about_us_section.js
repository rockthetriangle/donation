import Image from "next/image";
import React from "react";
import Button from "../../button";
import { CurrencyDollar, EnvelopeHeart } from "react-bootstrap-icons";

export default function AboutUsSection() {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center w-full h-auto py-14 gap-8">
            <div className="relative w-80 h-96 w-sm m-10">
                <div className="w-full h-full rounded-xl border-2 border-dashed border-sky-950"></div>
                <Image src={"/img/father_son.jpg"} alt="father son image" width={32*16} height={32*9} className="w-48 h-48 object-cover rounded-lg absolute -left-5 top-5" />
                <Image src={"/img/forklift.jpg"} alt="forklift image" width={32*16} height={32*9} className="w-32 h-32 object-cover rounded-lg absolute -left-5 -bottom-5" />
                <Image src={"/img/refugees.jpg"} alt="refugees image" width={32*16} height={32*9} className="w-32 h-32 object-cover rounded-lg absolute -right-5 -top-5"/>
                <Image src={"/img/sara.jpg"} alt="sara image" width={32*16} height={32*9} className="w-48 h-48 object-cover rounded-lg absolute -right-5 bottom-5" />
                <Image src={"/img/education_kids.jpg"} alt="education kids image" width={32*16} height={32*9} className="w-24 h-24 object-cover rounded-lg absolute bottom-36 right-32"/>
            </div>
            <div className="flex flex-col justify-start items-start w-sm sm:max-w-lg gap-7 p-4 pl-6">
                <h2 className="flex flex-row flex-wrap justify-start items-start text-4xl font-scada text-black capitalize">
                    Building Strength and &nbsp;
                    <span className="relative text-inherit">
                        Hope Together
                        <Image
                            src={"/img/word_marker.png"}
                            width={32 * 16}
                            height={32 * 9}
                            className="w-full h-8 absolute -bottom-6 left-0"
                        />
                    </span>
                </h2>
                <p className="text-sm text-gray-500 w-10/12">
                    We are a faith-driven community dedicated to helping individuals rebuild their lives with purpose, resources, and support, grounded on the firm foundation of God’s love.
                </p>
                <div className="flex flex-col justify-start items-start gap-6">
                    <div className="flex flex-row justify-between gap-3">
                        <div className="w-16 h-14 rounded-full flex justify-center items-center bg-cyan-400">
                            <CurrencyDollar className="text-3xl text-white" />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-1">
                            <h1 className="text-gray-800 text-2xl font-scada">
                                Be one of our volunteers to meet the needs of others
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-3">
                        <div className="w-16 h-14 rounded-full flex justify-center items-center bg-emerald-400">
                            <EnvelopeHeart className="text-3xl text-white" />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-1">
                            <h1 className="text-gray-800 text-2xl font-scada">
                                Volunteers are available to help you just reach out
                            </h1>
                        </div>
                    </div>
                </div>
                <Button
                    href="/events"
                    text="view all events"
                    hovered
                    color="sky-950"
                    className="ml-3 scale-110"
                />
            </div>
        </div>
    );
}
