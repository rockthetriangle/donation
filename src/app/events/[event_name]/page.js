import React from "react";
import BasePage from "@/app/components/base";
import BreadCrumb from "@/app/components/main/components/breadcrumb";
import BlackShadeSection2 from "@/app/components/main/components/blackshade_section2";
import removeUnderscoresAndCapitalize from "@/app/components/utils/capitalizer";
import EventPageSection from "@/app/components/main/components/event_page_section";

export async function generateStaticParams() {
  const eventNames = [
    "supporting_hope_a_charity_gala",
    "warmth_in_winter_clothing_drive",
    "crisis_relief_assistance",
  ];
  return eventNames.map((data) => ({
    event_name: data.toString(),
  }));
}

export default function EventsDetailPage({ params }) {
  const event_name = params.event_name;
  return (
    <BasePage>
      <BreadCrumb
        title={"Our Events"}
        links={[
          { text: "Events", href: "/events" },
          {
            text: removeUnderscoresAndCapitalize(event_name),
            href: `/events/${event_name}`,
          },
        ]}
      />
      <div className="w-full flex justify-center items-center">
        <EventPageSection title={removeUnderscoresAndCapitalize(event_name)} />
      </div>
      <BlackShadeSection2 />
    </BasePage>
  );
}
