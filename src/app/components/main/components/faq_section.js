import Image from "next/image";
import React from "react";
import Button from "../../button";
import { CurrencyDollar, EnvelopeHeart } from "react-bootstrap-icons";
import FaqElement from "./faq_element";

export default function FaqSection({ more=null, large=false }) {
    const faq_items = [
        {
            title: "How can we help you rebuild?",
            text: "Whether you're looking for support during a difficult season or want to help others through volunteering or donations, we’re here to stand with you every step of the way.",
        },
        {
            title: "Learn how Jesus is your Rock.",
            text: "Facing life’s storms? Reach out for guidance, resources, or encouragement. Ready to make a difference? Join us in creating strength and hope for those in need.",
        },
        {
            title: "What upport do you need today?",
            text: "Everyone needs a helping hand sometimes. Let us know how we can assist you or how you’d like to help others rebuild on a firm foundation of hope and purpose.",
        },
        {
            title: "Where does your support go?",
            text: "Your donations and contributions directly provide resources, guidance, and hope to individuals and families rebuilding after life’s storms. Together, we create lasting change, one act of kindness at a time.",
        },
    ];
    more ? more.map((e) => faq_items.push(e)) : null;
    return (
        <div className={`flex ${large ? "flex-col" : "flex-row flex-wrap"} justify-center items-center w-full h-auto py-14 gap-8`}>
            <div className={`relative ${large ? "w-96" : "w-80"} h-96 w-sm m-10`}>
                <div className="w-full h-full rounded-xl border-2 border-dashed border-emerald-400"></div>
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
            <div className={`flex flex-col justify-start items-start ${large ? "w-11/12" : "w-sm sm:max-w-lg"} gap-7 p-4 pl-6`}>
                <h2 className="flex flex-row flex-wrap justify-start items-start text-3xl font-scada text-black">
                    How we help you find strength, 
                    purpose, or support to withstand&nbsp;
                    <span className="relative text-inherit">
                         life’s storms?
                        <Image
                            src={"/img/word_marker.png"}
                            width={32 * 16}
                            height={32 * 9}
                            className="w-full h-8 absolute -bottom-6 left-0"
                        />
                    </span>
                </h2>
                <p className="text-sm text-gray-500 w-10/12">
                    Explore our FAQ section for quick answers on donations,
                    impact, and ways to support those in need.
                </p>
                <div className={`flex flex-col justify-start items-start gap-2 ${large ? "h-auto": "h-96"}`}>
                    {faq_items.map((e, index) => {
                        return (
                            <FaqElement
                                key={String(index) + "faq_element"}
                                title={e.title}
                                text={e.text}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
