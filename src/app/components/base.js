"use client";
import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import SearchBox from "./main/components/search_box";
import MailerliteScript from "./main/components/MailerliteScript";
import SearchBoxContext from "./contexts/search_bar_context";

export default function BasePage({ children }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <MailerliteScript />
      <SearchBoxContext.Provider value={{ open, setOpen }}>
        <div className={open ? "relative overflow-hidden h-screen" : ""}>
          <Header />
          <div className="bg-sky-950 border-sky-950 w-full "></div>
          {children}
          <Footer />
          <SearchBox />
        </div>
      </SearchBoxContext.Provider>
    </>
  );
}
