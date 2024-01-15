import React from "react";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Footer = () => {
    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Offices",
            path: "offices",
        },
        {
            name: "Meeting rooms",
            path: "meeting",
        },
        {
            name: "Facilities",
            path: "facilities",
        },
        {
            name: "Contact",
            path: "contact",
        },
    ];

    const offices = [
        {
            name: "Flex Office",
            path: "offices/flex",
        },
        {
            name: "Conference rooms",
            path: "/meeting",
        },
        {
            name: "Postmail",
            path: "offices/co",
        },
        {
            name: "Workshop space",
            path: "offices/prv",
        },
        {
            name: "Reception room",
            path: "offices/virtual",
        },
    ];

    const officeTypes = [
        {
            image: "off_2.jpeg",
            title: "Flex Office",
            subTitle: "from € 190 per month",
            link: "flex",
        },
        {
            image: "of_5.jpg",
            title: "Conference rooms",
            subTitle: "from € 10 per hour",
            link: "/meeting",
        },
        {
            image: "off_3.jpeg",
            title: "Postmail",
            subTitle: "from € 30 per month",
            link: "co",
        },
        {
            image: "off_1.jpg",
            title: "Workshop space",
            subTitle: "from € 125 per day",
            link: "prv",
        },
        {
            image: "off_4.jpeg",
            title: "Reception room",
            subTitle: "from € 250 per day",
            link: "virtual",
        },
    ];

    return (
        <div>
            <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
                <div className="container mx-auto px-4">
                    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                            <h5 className="text-xl font-bold mb-6">Links</h5>
                            <ul className="list-none footer-links">
                                {links.map((li, i) => (
                                    <li key={i} className="mb-2">
                                        <Link to={li.path}>
                                            <span className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">
                                                {li.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                            <h5 className="text-xl font-bold mb-6">Offices</h5>
                            <ul className="list-none footer-links">
                                {offices.map((off, i) => (
                                    <li key={i} className="mb-2">
                                        <Link to={off.path}>
                                            <span className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">
                                                {off.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
                                Address
                            </h5>
                            <div className="mb-4">
                                <span>CoworkInn</span>
                                <br />
                                <span>Korte Lozanastraat 26,</span>
                                <br />
                                <span>2018 Antwerpen</span>
                                <br />
                            </div>
                        </div>
                    </div>

                    <div className="w-full text-center mt-4">
                        All rights reserved © 2024 Coworkinn
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
