import Image from "next/image";
import React from "react";
import Button from "../../button";

export default function BlackShadeSection() {
  return (
    <div className="w-full relative max-h-[45rem] h-[35rem] max-[445px]:h-[40rem] overflow-hidden flex justify-center items-center">
      <Image
        src={"/img/large_helene.jpg"}
        alt="helene wnc image"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center gap-9 sm:gap-8 bg-black bg-opacity-50 py-4">
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-scada text-white text-center max-w-3xl">
          Living as Children of{" "}
          <span className="relative text-inherit">
            Light
            <Image
              src={"/img/word_marker.png"}
              alt="word_marker image"
              width={32 * 16}
              height={32 * 9}
              className="w-full h-8 absolute -bottom-5 left-0"
            />
          </span>
          .
        </h1>
        <h5 className="text-lg text-white text-center max-w-2xl max-[445px]:px-3">
          He makes the whole body fit together perfectly. As each part does its own special work, it helps the other parts grow, so that the whole body is healthy and growing and full of love. Living as Children of Light [Eph 4:16]
        </h5>
        <div className="w-full flex flex-row flex-nowrap justify-center item-center gap-10">
          <Button
            href="/donate_now"
            text="Donate Now"
            color="sky-500"
            className="max-[445px]:scale-125 sm:scale-110"
          />
          <Button
            type="a"
            href="/contact_us"
            text="Contact Us"
            color="emerald-400"
            className="max-[445px]:scale-125 sm:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
