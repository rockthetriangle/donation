import React from "react";
import Image from "next/image";

export default function Brand({size="text-3xl"}) {
    return (
        <div className="flex justify-center items-center w-fit h-full">
            <Image
            	src="/img/logo.png" 
            	alt="Rock the Triangle" 
            	width={300} height={300} 
            	className="w-16 h-16 object-cover" 
            />
            <h4 className={`font-bold ${size}`}>Rock the Triangle</h4>
        </div>
    );
}
