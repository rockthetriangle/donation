import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";
import FaqSection from "../components/main/components/faq_section";

export default function FaqPage() {
    const more_faqs = [
        {
            title: "What is Rock the Triangle?",
            text: "Rock the Triangle is a faith-driven nonprofit dedicated to providing resources, support, and hope to individuals and families facing hardship, rooted in Matthew 7:24-27.",
        },
        {
            title: "What services does Rock the Triangle provide?",
            text: "We offer mentorship, crisis support, access to essential resources, workshops, and community-building programs to help individuals rebuild their lives with strength and purpose.",
        },
        {
            title: "How can I get involved as a volunteer?",
            text: "You can join as a mentor, event organizer, resource distributor, or support group leader. Visit our “Get Involved” page to learn more.",
        },
        {
            title: "Who does Rock the Triangle serve?",
            text: "We serve individuals and families experiencing hardship, including financial struggles, emotional crises, or loss, regardless of their background or faith.",
        },
        {
            title: "What makes Rock the Triangle unique?",
            text: "Our approach is grounded in faith, combining spiritual encouragement with practical resources to help people rebuild on a firm foundation of hope.",
        },
        {
            title: "How are donations used?",
            text: "Donations directly support crisis relief, workshops, community programs, and essential resources for individuals and families in need.",
        },
        {
            title: "Is Rock the Triangle faith-based?",
            text: "Yes, our mission is inspired by Christian principles and scripture. However, we welcome and support people from all walks of life.",
        },
        {
            title: "Can I get help if I’m not religious?",
            text: "Absolutely. Our resources and support are available to anyone in need, regardless of their religious beliefs.",
        },
        {
            title: "How can I request help from Rock the Triangle?",
            text: "Simply visit our “Contact Us” page and fill out the form, or reach out to us by phone or email. We’re here to help you find strength and support.",
        },
        {
            title: "What events does Rock the Triangle host?",
            text: "We host workshops, support group meetings, volunteer events, and community fundraisers designed to strengthen and uplift our community.",
        },
        {
            title: "Can I donate items instead of money?",
            text: "Yes, we accept donations of essential items like clothing, camping supplies, chainsaws, fuels, and non-perishable foods. Check our donation guidelines on the website for details.",
        },
        {
            title: "Is my personal information secure when donating?",
            text: "Absolutely! We prioritize data security and ensure that your information is protected through encryption and secure protocols.",
        },
        {
            title: "Can I view success stories resulting from donations?",
            text: "Yes, we share success stories and the impact achieved through the generous support of donors like you.",
        },
        {
            title: "Can I donate in cryptocurrencies or other non-traditional forms?",
            text: "Yes, we accept donations in various forms, including cryptocurrencies. Contact us for more information on alternative donation methods.",
        },
        {
            title: "Are there opportunities for corporate or business partnerships?",
            text: "Yes, we offer partnership opportunities for businesses seeking to support our cause and make a significant impact.",
        },
        {
            title: "How often are donation reports or updates provided?",
            text: "We provide regular reports and updates, ensuring donors are informed about the impact of their contributions.",
        },
        {
            title: "Is Rock the Triangle a registered nonprofit?",
            text: "We have filed but are not a registered 501(c)(3) nonprofit organization yet. All donations in the near future will be tax-deductible as allowed by law.",
        },
    ];
    return (
        <BasePage>
            <BreadCrumb
                title={"Frequently Asked Questions"}
                links={[{ text: "Faq's", href: "/faq" }]}
            />
            <FaqSection more={more_faqs} large />
        </BasePage>
    );
}
