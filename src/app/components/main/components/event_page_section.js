import Image from "next/image";
import React from "react";
import { Calendar, Calendar2, Calendar2Date, Calendar3, Calendar3Fill, Calendar4, Check2Square, GeoAlt, GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import Button from "../../button";

export default function EventPageSection({ title }) {
    return (
        <div className="w-full flex flex-row flex-wrap justify-center items-start p-6">
            <div className="w-full md:max-w-2xl flex flex-col justify-start items-start gap-6 p-6">
                <Image
                    src={"/img/sustainable_farming.jpg"}
                    width={32 * 16}
                    height={32 * 9}
                    alt={"Sample Event Page"}
                    className={
                        "w-full h-auto border border-gray-500 rounded-lg"
                    }
                />
                <h1 className="text-3xl font-bold text-slate-800">
                    Upcoming Event - {title}
                </h1>
                <p className="text-xs text-slate-500"></p>
                {[
                    ["Event Feature One", "Event Feature Two"],
                    ["Event Feature Three", "Event Feature Four"],
                    ["Event Feature Five", "Event Feature Six"],
                ].map((e, index) => {
                    return (
                        <div
                            key={String(index) + "_event_detail_value"}
                            className="w-full flex gap-3"
                        >
                            <div className="flex items-center gap-2 w-5/12">
                                <Check2Square className="text-cyan-400 text-base" />
                                <h5 className="text-xs text-slate-800">
                                    {e[0]}
                                </h5>
                            </div>
                            <div className="flex items-center gap-2 w-5/12">
                                <Check2Square className="text-cyan-400 text-base" />
                                <h5 className="text-xs text-slate-800">
                                    {e[1]}
                                </h5>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-col justify-center-items-center p-6 flex-grow max-w-lg">
                <div className="flex flex-col justify-start items-start p-6 bg-blue-50 bg-opacity-30 rounded-lg border gap-4">
                    <h3 className="text-xl font-scada w-11/12 border-l-4 border-sky-95 px-2">
                        Event Info
                    </h3>
                    <div className="w-11/12 flex flex-row flex-nowrap justify-start items-start gap-4 pl-2">
                        <Calendar3 className="text-2xl text-emerald-400" />
                        <div className="flex flex-col justify-start items-start gap-1">
                            <h4 className="text-base font-scada text-slate-800">
                                Event Date & Time
                            </h4>
                            <p className="text-xs text-slate-500"></p>
                        </div>
                    </div>
                    <div className="w-11/12 flex flex-row flex-nowrap justify-start items-start gap-4 pl-2">
                        <GeoAltFill className="text-2xl text-emerald-400" />
                        <div className="flex flex-col justify-start items-start gap-1">
                            <h4 className="text-base font-semibold text-slate-800">
                                Event Venue
                            </h4>
                            <p className="text-xs text-slate-500"></p>
                        </div>
                    </div>
                    <div className="w-11/12 flex flex-row flex-nowrap justify-start items-start gap-4 pl-2">
                        <TelephoneFill className="text-2xl text-emerald-400" />
                        <div className="flex flex-col justify-start items-start gap-1">
                            <h4 className="text-base font-semibold text-slate-800">
                                Contact Number
                            </h4>
                            <p className="text-xs text-slate-500"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
