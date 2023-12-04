import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const navLinks = [
        {
            label: "Offices",
            key: "offices",
            path: "/",
        },
        {
            label: "Meeting rooms",
            key: "meeting",
            path: "/meeting",
        },
        {
            label: "Facilities",
            path: "/facilities",
            key: "facilities",
        },
        {
            label: "Contact",
            key: "contact",
            path: "/contact",
        },
    ];

    const [activeTab, setActiveTab] = useState("offices");
    const [navExpanded, setNavExpanded] = useState(false);

    return (
        <div className="z-[10000] sticky top-0 left-0 border-b border-primary bg-primary flex justify-center items-center">
            <div className="container w-[100vw] flex justify-between items-left sm:gap-10 p-3 py-4 sm:px-8 flex-col sm:flex-row">
                <div className="w-full flex justify-between items-center">
                    <img
                        className="h-[35px] sm:h-[55px]"
                        src="images/logo.png"
                    />
                    <div
                        className="sm:hidden pr-2"
                        onClick={() => setNavExpanded((prev) => !prev)}
                    >
                        <RxHamburgerMenu size={30} color="#fff" />
                    </div>
                </div>
                <nav>
                    <ul
                        className={`flex gap-2 transition-all items-center ease-in-out text-sm whitespace-nowrap duration-300 flex-col sm:flex-row h-0 sm:h-full opacity-0 sm:opacity-100 ${
                            navExpanded && "h-full opacity-100"
                        }`}
                    >
                        {navLinks.map((nav, i) => (
                            <Link key={i} to={nav.path}>
                                <li
                                    className={`uppercase w-fit cursor-pointer text-mainbg px-4 py-2 rounded-full font-bold mt-3 sm:mt-0 ${
                                        activeTab === nav.key
                                            ? "bg-mainbg !text-primary px-8 sm:px-4"
                                            : ""
                                    }`}
                                    onClick={() => setActiveTab(nav.key)}
                                >
                                    {nav.label}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
                {navExpanded && (
                    <div className="flex justify-end sm:hidden">
                        <GoogleTranslate />
                    </div>
                )}
            </div>
            <div className="hidden sm:flex">
                <GoogleTranslate />
            </div>
        </div>
    );
};

export default Header;
