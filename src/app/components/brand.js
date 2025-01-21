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
            <h4 className={`font-scada ${size} text-cyan-400`}>Rock the</h4><h4 className={`font-scada ${size} text-emerald-400`}> Triangle</h4>
        </div>
    );
}
