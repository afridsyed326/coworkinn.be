import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";

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

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const link = path.split("/")[1];
        setActiveTab(path === "/" ? "offices" : link);
    }, [activeTab]);

    const [lang, setLang] = useState("");

    const langs = ["EN", "NL", "FR"];

    const changeLanguage = (lang) => {
        const ln = lang.toLowerCase();
        setLang(ln);
        window.setCookie("googtrans", `/en/${ln}`, 1);
        window.location.reload();
    };

    return (
        <div className="z-[10000] sticky top-0 left-0 border-b border-primary bg-primary flex justify-center items-center">
            <div className="container w-[100vw] flex justify-between items-left sm:gap-10 p-3 py-4 sm:px-8 flex-col sm:flex-row">
                <Link to="/">
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
                </Link>
                <nav>
                    <ul
                        className={`flex gap-2 transition-all items-center ease-in-out text-sm whitespace-nowrap duration-300 flex-col sm:flex-row h-0 sm:h-full opacity-0 sm:opacity-100 ${
                            navExpanded && "h-full opacity-100"
                        }`}
                    >
                        {navLinks.map((nav, i) => (
                            <Link key={i} to={nav.path}>
                                <li
                                    className={`uppercase w-fit hover:text-accent transition-all ease-in-out cursor-pointer text-mainbg px-4 py-2 rounded-full font-bold mt-3 sm:mt-0 ${
                                        activeTab === nav.key
                                            ? "bg-mainbg !text-primary px-8 sm:px-4 hover:bg-accent"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        setActiveTab(nav.key);
                                        setNavExpanded(false);
                                    }}
                                >
                                    {nav.label}
                                </li>
                            </Link>
                        ))}
                        <li>
                            <div className="sm:border-l border-white text-sm">
                                <GoogleTranslate lang={lang} />
                                <div className="flex justify-center sm:ml-2 mt-5 sm:mt-0 gap-2 text-white font-bold">
                                    {langs.map((ln, i) => (
                                        <span
                                            key={i}
                                            className="notranslate cursor-pointer transition-all ease-in-out hover:text-accent"
                                            onClick={() => changeLanguage(ln)}
                                        >
                                            {ln}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
