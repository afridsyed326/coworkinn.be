import React, { useEffect } from "react";
import Hero from "./common/Hero";
import { LiaFileContractSolid } from "react-icons/lia";
import { TbSquareRoot2 } from "react-icons/tb";
import { MdOutlineDesk } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { MdLocalPostOffice } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuThermometerSnowflake } from "react-icons/lu";
import { FaShower } from "react-icons/fa";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { MdElectricCar } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
import { GrLounge } from "react-icons/gr";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { MdOutlineFastfood } from "react-icons/md";
import { LiaCarSolid } from "react-icons/lia";
import { GiVacuumCleaner } from "react-icons/gi";
import { PiBicycleLight } from "react-icons/pi";
import { IoTrashBinOutline } from "react-icons/io5";
import { MdMoreTime } from "react-icons/md";
import { Link } from "react-router-dom";

const Facilities = () => {
    const allFacilities = [
        {
            name: "Flexible contracts",
            icon: <LiaFileContractSolid />,
        },
        {
            name: "Variable square footage to match your needs",
            icon: <TbSquareRoot2 />,
        },
        {
            name: "Furnished",
            icon: <MdOutlineDesk />,
        },
        {
            name: "Welcoming/Reception service",
            icon: <MdSupportAgent />,
        },
        {
            name: "Correspondence and postal administration",
            icon: <MdLocalPostOffice />,
        },
        {
            name: "Parcel receipt service",
            icon: <LiaFileInvoiceDollarSolid />,
        },
        {
            name: "High speed internet",
            icon: <IoSpeedometerOutline />,
        },
        {
            name: "Comfort airco",
            icon: <LuThermometerSnowflake />,
        },
        // {
        //     name: "Comfort douche",
        //     icon: <FaShower />,
        // },
        {
            name: "Comfort coffee corner",
            icon: <MdOutlineCoffeeMaker />,
        },
        {
            name: "Charging stations",
            icon: <MdElectricCar />,
        },
        // {
        //     name: "Access to meeting rooms",
        //     icon: <IoPeople />,
        // },
        {
            name: "Accessible 24/7",
            icon: <MdMoreTime />,
        },
        {
            name: "Copy/scan (excl. usage)",
            icon: <FiPrinter />,
        },
        // {
        //     name: "Outdoor lounge",
        //     icon: <GrLounge />,
        // },
        {
            name: "Dedicated staff",
            icon: <LiaPeopleCarrySolid />,
        },
        {
            name: "Catering service",
            icon: <MdOutlineFastfood />,
        },
        {
            name: "Ample parking",
            icon: <LiaCarSolid />,
        },
        {
            name: "Covered bicycle parking",
            icon: <PiBicycleLight />,
        },
        {
            name: "Cleaning and maintenance",
            icon: <GiVacuumCleaner />,
        },
        {
            name: "Waste management (container)",
            icon: <IoTrashBinOutline />,
        },
    ];

    const features = [
        {
            name: "Calendar integration",
            desc: "Registered User? Book your appointment online to use our meeting room. If you are a new user please log in first.",
        },
        {
            name: "Quote",
            desc: "Request a quote. We will get back to you promptly with a tailored quote.",
        },
        {
            name: "Show Around",
            desc: "Book your show-around here. We are always delighted to personally show you around Business Brewery.",
        },
    ];

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Optional: adds smooth scrolling animation
        });
    }, []);

    const heroDesc =
        "Cowork Inn offers its tenants various facilities such as; meeting room, workshop room, reception room, copy place, etc.. Let us know what your wishes are and we will take care of this!";

    return (
        <div className="w-full mb-10">
            <Hero
                text="FACILITIES"
                bgUrl="images/facilities.jpg"
                desc={heroDesc}
            />

            <div className="m-2 mt-10 sm:mt-14 sm:m-14">
                <div className="font-bold text-4xl">Our Facilities</div>
                <div className="flex w-full justify-center">
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-2 w-full justify-center items-center">
                        {allFacilities.map((fac, i) => (
                            <div
                                key={i}
                                className="flex gap-4 items-center text-primary"
                            >
                                <span className="text-4xl">{fac.icon}</span>
                                <span>{fac.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="bg-gray-100 py-4 px-2 sm:px-48 sm:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    {features.map((fe, i) => (
                        // <Link to="contact" key={i}>
                        <div
                            key={i}
                            className="px-3 pb-10 pt-6 bg-white cursor-pointer group hover:translate-y-[-25px] transition-all ease-in-out"
                        >
                            <Link to="/contact">
                                <div className="font-bold text-2xl text-center group-hover:text-primary">
                                    {fe.name}
                                </div>
                                <div className="mt-3 text-center">
                                    {fe.desc}
                                </div>
                            </Link>
                        </div>
                        // </Link>
                    ))}
                </div>
            </div> */}

            <div className="bg-primary px-2 sm:px-52">
                <div className="p-10 sm:py-14 sm:px-24  flex flex-col gap-6 justify-between items-center">
                    <div className="text-white font-bold text-2xl sm:text-4xl">
                        Would you link to be shown around our offices?
                    </div>
                    <Link to="/contact">
                        <div className="bg-textClr mt-4 sm:mt-0 text-center cursor-pointer text-white px-8 pt-2 pb-3 rounded-full font-bold text-sm sm:text-2xl">
                            Get a free show-around
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Facilities;
