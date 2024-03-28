import React, { useEffect } from "react";
import Hero from "../common/Hero";
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

const Prvte = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Optional: adds smooth scrolling animation
        });
    }, []);

    const allFacilities = [
        {
            name: "Flexible contracts",
            icon: <LiaFileContractSolid />,
            available: true,
        },
        {
            name: "Variable square footage to match your needs",
            icon: <TbSquareRoot2 />,
            available: true,
        },
        {
            name: "Furnished",
            icon: <MdOutlineDesk />,
            available: true,
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
        // {
        //     name: "Charging stations",
        //     icon: <MdElectricCar />,
        // },
        // {
        //     name: "Access to meeting rooms",
        //     icon: <IoPeople />,
        // },
        // {
        //     name: "Accessible 24/7",
        //     icon: <MdMoreTime />,
        //     available: true,
        // },
        {
            name: "Copy/scan (excl. usage)",
            icon: <FiPrinter />,
        },
        // {
        //     name: "Outdoor lounge",
        //     icon: <GrLounge />,
        //     available: true,
        // },
        // {
        //     name: "Dedicated staff",
        //     icon: <LiaPeopleCarrySolid />,
        // },
        {
            name: "Catering service",
            icon: <MdOutlineFastfood />,
        },
        // {
        //     name: "Ample parking",
        //     icon: <LiaCarSolid />,
        //     available: true,
        // },
        {
            name: "Covered bicycle parking",
            icon: <PiBicycleLight />,
        },
        {
            name: "Cleaning and maintenance",
            icon: <GiVacuumCleaner />,
        },
        // {
        //     name: "Waste management (container)",
        //     icon: <IoTrashBinOutline />,
        // },
    ];

    const meetingImages = [
        {
            image: "of_5.jpg",
        },
        {
            image: "meet.jpg",
        },
        {
            image: "meet_3.jpeg",
        },
    ];

    return (
        <div>
            <Hero text="WORKSHOP SPACE" desc="If you need a workspace for just a few days, you can do so at Cowork Inn. We provide an optimal workspace with all necessary facilities. You only pay an amount per day and can immediately use your office space." bgUrl="../images/of_1.jpg" />

            <div className="m-2 mt-10 sm:mt-14 sm:m-14">
                <div className="font-bold text-4xl">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
                        <div className="font-bold text-4xl">
                            Discover our facilities
                            <div className="text-xl my-1 text-primary font-bold">
                                From € 125 per day
                            </div>
                        </div>
                        <Link to="/offices">
                            <div className="bg-textClr mt-4 sm:mt-0 text-center cursor-pointer text-white px-8 pt-2 pb-3 rounded-full font-bold text-sm sm:text-2xl">
                                Back to offices
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-2 w-full justify-center items-center">
                        {allFacilities.map((fac, i) => (
                            <div
                                key={i}
                                className={`flex gap-4 items-center text-primary ${
                                    fac.available && "font-extrabold"
                                }`}
                            >
                                <span className="text-4xl">{fac.icon}</span>
                                <span>{fac.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-2 sm:px-52">
                <div className="mt-10 p-10 sm:py-14 sm:px-24  flex flex-col gap-6 justify-between items-center">
                    <div className="text-primary font-bold text-2xl sm:text-4xl">
                        Would you like to visit our offices?
                    </div>
                    <Link to="/contact">
                        <div className="bg-textClr mt-4 sm:mt-0 text-center cursor-pointer text-white px-8 pt-2 pb-3 rounded-full font-bold text-sm sm:text-2xl">
                            Get a free show around
                        </div>
                    </Link>
                </div>
            </div>

            <div className="w-full bg-gray-100 p-3 sm:px-24 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3">
                    {meetingImages.map((mi, i) => (
                        <div
                            key={i}
                            className="h-[300px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url('../images/${mi.image}')`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="px-2 sm:px-52 bg-primary">
                <div className="mt-10 p-10 sm:py-14 sm:px-24  flex flex-col gap-6 justify-between items-center">
                    <div className="text-white font-bold text-2xl sm:text-4xl">
                        Would you like to visit our offices?
                    </div>
                    <Link to="/contact">
                        <div className="bg-textClr mt-4 sm:mt-0 text-center cursor-pointer text-white px-8 pt-2 pb-3 rounded-full font-bold text-sm sm:text-2xl">
                            Get a free show around
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Prvte;
