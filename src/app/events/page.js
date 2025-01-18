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
      button_color: "indigo-500",
      title: "Crisis Relief Assistance",
      description:
        "Offer a helping hand to those affected by crises. Together, we restore hope.",
      read_more_link: "/crisis_relief_assistance",
      date: "20th JUN, 2024",
      place: "Guwahati, Assam",
    },
    // 2
    {
      src: "/img/winter_clothing_drive.jpg",
      button_color: "teal-500",
      title: "Warmth in Winter: Clothing Drive",
      description:
        "Keep the cold at bay by donating winter clothing. Spread warmth and cheer!",
      read_more_link: "/warmth_in_winter_clothing_drive",
      date: "1st MAR, 2024",
      place: "Leh, Ladakh, Jammu & Kashmir",
    },
    // 3
    {
      src: "/img/charity_event.jpg",
      button_color: "blue-500",
      title: "Supporting Hope: A Charity Gala",
      description:
        "Join us in making a difference for the needy through compassion and support.",
      read_more_link: "/supporting_hope_a_charity_gala",
      date: "12th NOV, 2023",
      place: "Gr. Noida, U.P.",
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
