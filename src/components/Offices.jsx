import React from "react";
import Hero from "../components/common/Hero";
import OfficeCard from "./common/OfficeCard";

const Offices = () => {
    const officeTypes = [
        {
            image: "off_1.jpg",
            title: "Private Office",
            subTitle: "from € 730 per month",
        },
        {
            image: "off_2.jpeg",
            title: "Flex Office",
            subTitle: "from € 8.50 per hou",
        },
        {
            image: "off_3.jpeg",
            title: "Coworking",
            subTitle: "from € 40 per month",
        },
        {
            image: "off_4.jpeg",
            title: "Virtual Office",
            subTitle: "from € 95 per month",
        },
        {
            image: "off_5.jpeg",
            title: "Meeting Rooms",
            subTitle: "from € 150 per meeting",
        },
    ];

    return (
        <div className="w-full mb-10">
            <Hero text="OFFICES" bgUrl="images/offices.jpg" />

            <div className="p-2 text-center text-lg my-6">
                <span class="">
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
                            <OfficeCard office={office} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offices;
