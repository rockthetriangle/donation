import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";
import BlogCard5 from "../components/main/components/blog_card5";
    
export default function CausesPage() {
  const defaultValue = [
    // 1
    {
      src: "/img/winter_survival_pack.jpg",
      button_color: "yellow-600",
      title: "Winter Survival Pack",
      description:
        "Provides warmth, food, and shelter to those in need during cold winters.",
      raised_value: 6200,
      goal_value: 12500,
    },
    // 2
    {
      src: "/img/refugees.jpg",
      button_color: "red-600",
      title: "Shelter for Refugees",
      description:
        "Providing safe housing and support to displaced individuals and families.",
      raised_value: 8800,
      goal_value: 15000,
    },
    // 3
    {
      src: "/img/clean_water.jpg",
      button_color: "teal-400",
      title: "Clean Water Initiative",
      description:
        "Bringing clean and safe drinking water to communities in need around the world.",
      raised_value: 3600,
      goal_value: 10000,
    },
  ];
  return (
    <BasePage>
      <BreadCrumb
        title={"Our causes"}
        links={[{ text: "Causes", href: "/causes" }]}
      />
      <div className="flex flex-row flex-wrap justify-evenly items-center p-4 py-12">
        {defaultValue.map((e, index) => {
          return (
            <BlogCard5
              key={String(index) + "_blog_card_5"}
              src={e.src}
              button_color={e.button_color}
              title={e.title}
              description={e.description}
              raised_value={e.raised_value}
              goal_value={e.goal_value}
            />
          );
        })}
      </div>
    </BasePage>
  );
}
