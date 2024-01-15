import React, { useEffect } from "react";
import Hero from "../components/common/Hero";
import OfficeCard from "./common/OfficeCard";
import { Link } from "react-router-dom";

const Offices = () => {
    const officeTypes = [
        // {
        //     image: "off_1.jpg",
        //     title: "Private Office",
        //     subTitle: "from € 730 per month",
        //     link: "prv",
        // },
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

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Optional: adds smooth scrolling animation
        });
    }, []);

    return (
        <div className="w-full mb-10">
            <Hero text="OFFICES" bgUrl="images/of_1.jpg" />

            <div className="p-2 text-center text-lg my-6">
                <span className="">
                    Cowork Inn has the right office formula for you:
                    <br />
                    the Private Office provides you with your own, standard
                    office space,
                    <br />
                    the Flex Office your own office space on the days you need
                    it,
                    <br />
                    and the Coworking Space lets you work together with fellow
                    entrepreneurs
                    <br />
                    in a communal area at the times you specify. <br />
                    We also have Meeting Rooms available.
                </span>
            </div>

            <div className="p-2 sm:mx-[150px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                    {officeTypes.map((office, i) => (
                        <div key={i}>
                            <Link to={office.link}>
                                <OfficeCard office={office} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offices;
