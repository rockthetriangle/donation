import React from "react";
import BlackShadeSection from "../components/main/components/blackshade_sections";
import FaqSection from "../components/main/components/faq_section";
import BasePage from "../components/base";

export default function MainHome() {
    return (
        <BasePage>
            <BlackShadeSection />
            <FaqSection />
        </BasePage>
    );
}
