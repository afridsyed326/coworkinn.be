import React from "react";
import Hero from "./common/Hero";
import { Link } from "react-router-dom";
import { LiaCarSolid } from "react-icons/lia";
import { GiTwoCoins } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";

const Home = () => {
    const features = [
        {
            name: "Come in with a smile",
            icon: <LiaCarSolid />,
            desc: "Ample, spacious parking for you and your visitors",
        },
        {
            name: "Worthwhile solution right from the start",
            icon: <GiTwoCoins />,
            desc: "Cost-effective whichever formula you opt for",
        },
        {
            name: "Comfortable, efficient and hospitable",
            icon: <MdSupportAgent />,
            desc: "The basic tenets of a contemporary office space",
        },
    ];

    return (
        <div className="w-full">
            <Hero
                text="WORKSPACE WITH A TAILORED WORKSPACE PACKAGE"
                bgUrl="images/facilities.jpg"
                customJsx={
                    <Link to="offices">
                        <div className="mt-6">
                            <div className="bg-primary sm:mt-0 text-center cursor-pointer text-white px-8 pt-2 pb-3 rounded-full font-bold text-sm sm:text-2xl">
                                Discover our offices
                            </div>
                        </div>
                    </Link>
                }
            />

            <div className="bg-secondbg px-2 py-4 sm:px-10 sm:py-20 ">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10 sm:mt-0">
                    {features.map((fe, i) => (
                        <div
                            key={i}
                            className="flex flex-col justify-center items-center"
                        >
                            <span className="text-[70px] mb-5 text-white">
                                {fe.icon}
                            </span>
                            <span className="text-white mb-4 px-10 text-lg text-center font-bold">
                                {fe.name}
                            </span>
                            <span className="text-center text-2xl text-slate-300 font-bold mb-4 flex-wrap whitespace-pre-wrap">
                                {fe.desc}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="sm:mx-20 mt-10 bg-white sm:rounded-full flex flex-col sm:flex-row items-center justify-between py-4 sm:px-6">
                    <div className="text-4xl text-primary font-bold">
                        Facilities
                    </div>
                    <div className="text-center w-2/3 mt-4 sm:mt-0">
                        Cowork Inn has a whole range of facilities to match your
                        user needs, leaving you to focus 100% on your core
                        business.
                    </div>
                </div>
                <div className="w-full justify-center flex  mt-10 mb-5">
                    <Link to="/facilities">
                        <div className="bg-primary sm:mt-0 text-center cursor-pointer text-white px-8 pt-2 pb-3 rounded-full font-bold text-sm sm:text-2xl">
                            Discover all our facilities
                        </div>
                    </Link>
                </div>
            </div>

            <div className="text-primary font-bold my-10 mx-2 sm:mx-32">
                <p>
                    Cowork Inn offers versatile workspace solutions, including
                    Private Offices, Flex Offices, and Coworking Spaces. Elevate
                    your meetings with our state-of-the-art Meeting Rooms. Find
                    the perfect office formula for your entrepreneurial journey.
                    Our objective? Providing start-ups and international players
                    with a base whilst they gain a foothold in Europe, and
                    providing them with the best opportunities to evolve their
                    business in as ideal a setting as possible. That is what
                    Cowork Inn is all about: helping entrepreneurship ferment
                    and brew into profitable concerns. We provide a professional
                    base to dynamic entrepreneurs, with access to
                    state-of-the-art facilities and an office layout based on
                    individual requirements and growth plans.
                </p>
            </div>

            <div className="bg-primary px-2 sm:px-52">
                <div className="mt-10 p-10 sm:py-14 sm:px-24  flex flex-col gap-6 justify-between items-center">
                    <div className="text-white font-bold text-2xl sm:text-4xl">
                        Would you like to view our offices?
                    </div>
                    <Link to="/contact">
                        <div className="bg-textClr mt-4 sm:mt-0 text-center cursor-pointer text-white px-8 pt-2 pb-3 rounded-full font-bold text-sm sm:text-2xl">
                            Request a free show around
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
