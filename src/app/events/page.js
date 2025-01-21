import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";
import BlogCard6 from "../components/main/components/blog_card6";
import BlackShadeSection2 from "../components/main/components/blackshade_section2";

export default function EventsPage() {
  const defaultValue = [
    // 1
    {
      src: "/img/crisis_relief.jpg",
      button_color: "emerald-400",
      title: "Warmth and Hope for Western North Carolina",
      description:
        "This winter, we’re delivering essential supplies—coats, blankets, and more—to those devastated and still in great need in Western North Carolina. Together, we can bring comfort and hope to our neighbors.",
      read_more_link: "/warmth_and_hope",
      date: "8th FEB, 2025",
      place: "Canton, North Carolina",
    },
    // 2
    {
      src: "/img/winter_clothing_drive.jpg",
      button_color: "cyan-400",
      title: "Gear Up for Good: Winter Coat & Camping Gear Drive",
      description:
        "Help us provide warmth and shelter to those in need! Donate winter coats, sleeping bags, and camping gear to support individuals facing harsh conditions this winter.",
      read_more_link: "/gear_up_for_good",
      date: "1st FEB 2025",
      place: "Loading Dock, Raleigh NC",
    },
    // 3
    {
      src: "/img/charity_event.jpg",
      button_color: "sky-400",
      title: "Clean Streets, Stronger Community",
      description:
        "Join us for a local street cleanup to beautify our neighborhoods and show pride in our community. Together, we can make a lasting impact—one street at a time!",
      read_more_link: "/clean_streets_stronger_community",
      date: "25th JAN, 2025",
      place: "TBD, Raleigh NC",
    },
  ];

  return (
    <BasePage>
      <BreadCrumb
        title={"Our Events"}
        links={[{ text: "Events", href: "/events" }]}
      />
      <div className="flex flex-row flex-wrap justify-evenly items-center p-1 sm:p-4 py-12">
        {defaultValue.map((e, index) => {
          return (
            <BlogCard6
              key={String(index) + "_blog_card_6"}
              date={e.date}
              place={e.place}
              src={e.src}
              button_color={e.button_color}
              title={e.title}
              description={e.description}
              read_more_link={"/events" + e.read_more_link}
            />
          );
        })}
      </div>
      <BlackShadeSection2 />
    </BasePage>
  );
}
