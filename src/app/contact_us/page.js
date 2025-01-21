import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";

export default function AboutUsPage() {
  return (
    <BasePage>
      <BreadCrumb
        title={"Contact Us"}
        links={[{ text: "Contact Us", href: "/contact_us" }]}
      />
      {/* Ensure the embedded form renders correctly */}
      <div className="ml-embedded" data-form="HRAknV"></div>
    </BasePage>
  );
}
