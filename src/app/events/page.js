import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";
import BlogCard6 from "../components/main/components/blog_card6";
import BlackShadeSection2 from "../components/main/components/blackshade_section2";
import { EVENTS } from "../components/utils/data";

export default function EventsPage() {
  const defaultValue = EVENTS;

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
