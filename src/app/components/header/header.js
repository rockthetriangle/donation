"use client";
import * as React from "react";
import { InfoCircle, List, Person, Phone, Search } from "react-bootstrap-icons";
import Button from "../button";
import Brand from "../brand";
import SearchBoxContext from "../contexts/search_bar_context";
import Link from "next/link";

export default function Header() {
    const [headerFixed] = React.useState(true);
    const [menuOpen, setMenuOpen] = React.useState(true);
    const { open, setOpen } = React.useContext(SearchBoxContext);
    return (
        <header
            className={`${
                headerFixed ? "sticky top-0 left-0" : ""
            } w-full h-20 max-[745px]:h-16 flex justify-center items-center px-4 z-50 bg-white`}
        >
            <div className="relative w-full max-[745px]:w-11/0.12 h-20 flex flex-row flex-nowrap justify-between max-[900px]:justify-center items-center px-4">
                <Link href={"/"}>
                    <Brand />
                </Link>
                <div className="flex flex-row flex-nowrap flex-grow justify-end items-center px-6 max-[745px]:px-4 h-full">
                    <nav className="flex jusitfy-center items-center gap-12 h-full">
                        <ul className="flex flex-row justify-center items-center gap-3 h-8">
                            <li className="text-xl">
                                <h4
                                    className="text-inherit cursor-pointer"
                                    onClick={() => setOpen(!open)}
                                >
                                    <Search
                                        className="text-inherit"
                                        color="rgb(107,114,128)"
                                    />
                                </h4>
                            </li>
                            <li className="w-[0.6px] h-full bg-gray-300 m-2"></li>
                            <li className="hidden min-[745px]:block text-2xl">
                                <Link href={"#account"}>
                                    <h4 className="text-inherit">
                                        <Person
                                            className="text-inherit"
                                            color="rgb(107,114,128)"
                                        />
                                    </h4>
                                </Link>
                            </li>
                            <li className="hidden max-[745px]:block text-2xl">
                                <h4 className="text-inherit" onClick={() => setMenuOpen(!menuOpen)}>
                                    <List
                                        className="text-inherit"
                                        color="rgb(107,114,128)"
                                    />
                                </h4>
                            </li>
                        </ul>
                        <div className="max-[900px]:hidden flex justify-center items-center">
                            <Button
                                href="/donate_now"
                                text="Donate Now"
                                color="red-600"
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
