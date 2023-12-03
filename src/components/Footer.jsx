import React from "react";

const Footer = () => {
    const links = [
        "Home",
        "Offices",
        "Meeting rooms",
        "About us",
        "Activities",
        "Facilities",
        "Contact",
    ];

    const offices = [
        "Private Office",
        "Flex Office",
        "Coworking",
        "Virtual Office",
        "Meeting Rooms",
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
                                        <a
                                            href="#"
                                            className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                        >
                                            {li}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                            <h5 className="text-xl font-bold mb-6">
                                Resources
                            </h5>
                            <ul className="list-none footer-links">
                                {offices.map((off, i) => (
                                    <li key={i} className="mb-2">
                                        <a
                                            href="#"
                                            className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                        >
                                            {off}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">About</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Team
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Locations
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Privacy
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                        {/* <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">Help</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Support
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
                                Address
                            </h5>
                            <div>Exchange tower, 2004, Buisness Bay, Dubai</div>
                        </div>
                    </div>

                    <div className="w-full text-center mt-4">
                        All rights reserved © 2023 Coworkinn
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
