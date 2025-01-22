import { EVENTS } from "@/app/components/utils/data";
import Image from "next/image";
import {
  Calendar3,
  Check2Square,
  GeoAltFill,
  TelephoneFill,
} from "react-bootstrap-icons";

export default function EventPageSection({ title }) {
  const event = EVENTS.find((e) => e.read_more_link === `/${title}`);

  return (
    <div className="w-full flex flex-row flex-wrap justify-center items-start p-6">
      <div className="w-full md:max-w-2xl flex flex-col justify-start items-start gap-6 p-6">
        <Image
          src={event.src}
          width={32 * 16}
          height={32 * 9}
          alt={"Sample Event Page"}
          className={"w-full h-auto border border-gray-500 rounded-lg"}
        />
        <h1 className="text-3xl font-scada text-slate-800">
          Upcoming Event - {event.title}
        </h1>
        <p className="text-md text-slate-500">{event.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {event.features.map((e, index) => {
            return (
              <ul
                key={String(index) + "_event_detail_value"}
                className="w-full flex gap-2"
              >
                <li className="flex items-center gap-3">
                  <Check2Square className="text-cyan-400 text-3xl" />
                  <h5 className="text-md text-slate-800">{e}</h5>
                </li>
              </ul>
            );
          })}
        </div>
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
              <p className="text-md text-slate-500">{event.date}</p>
            </div>
          </div>
          <div className="w-11/12 flex flex-row flex-nowrap justify-start items-start gap-4 pl-2">
            <GeoAltFill className="text-2xl text-emerald-400" />
            <div className="flex flex-col justify-start items-start gap-1">
              <h4 className="text-base font-semibold text-slate-800">
                Event Venue
              </h4>
              <p className="text-md text-slate-500">{event.place}</p>
            </div>
          </div>
          <div className="w-11/12 flex flex-row flex-nowrap justify-start items-start gap-4 pl-2">
            <TelephoneFill className="text-2xl text-emerald-400" />
            <div className="flex flex-col justify-start items-start gap-1">
              <h4 className="text-base font-semibold text-slate-800">
                Contact Number
              </h4>
              <p className="text-md text-slate-500">{event.contact}</p>
            </div>
          </div>
          <div className="w-11/12 flex flex-row flex-nowrap justify-start items-start gap-4 pl-2">
            {/* Ensure the embedded form renders correctly */}
      		<div className="ml-embedded" data-form="vf3OBJ"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
