import React, { useEffect } from "react";
import Hero from "./common/Hero";

const Meeting = () => {
    const meetingsRooms = [
        {
            name: "Ename",
            capacity: "24",
        },
        {
            name: "Cambrinus",
            capacity: "14",
        },
        {
            name: "Horst",
            capacity: "8",
        },
        {
            name: "Ommegang",
            capacity: "24",
        },
        {
            name: "Tempelier",
            capacity: "14",
        },
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

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Optional: adds smooth scrolling animation
        });
    }, []);

    return (
        <div className="w-full mb-10">
            <Hero text="MEETING ROOMS" bgUrl="images/meet.jpg" />
            <div className="p-2 text-center text-lg my-6">
                <span className="">
                    <br />
                    Do you require an ad-hoc meeting?
                    <br />
                    Non-residents can also book a meeting room with us.
                    <br />
                    Greet your visitors in a professional setting with all the
                    facilities you may require.
                    <br />
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-2 sm:gap-10 mx-2 sm:mx-32">
                <div className="bg-primary text-center cursor-pointer text-white px-8 py-2 rounded-full font-bold text-lg">
                    Already a User? Log in now
                </div>
                <div className="bg-textClr text-center cursor-pointer text-white px-8 py-2 rounded-full font-bold text-lg">
                    New User? Request your login details
                </div>
            </div>

            <div className="mt-24 grid grid-cols-2 sm:grid-cols-3 gap-5 mx-2 sm:mx-32 justify-center items-center">
                {meetingsRooms.map((mr, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-center items-center"
                    >
                        <div className="text-primary font-bold text-2xl">
                            {mr.name}
                        </div>
                        <div className="font-bold mt-2">
                            Up to {mr.capacity} people
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full bg-gray-100 p-3 sm:px-24 mt-10">
                <div className="w-full text-center font-bold text-3xl my-3">
                    Our meeting rooms
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3">
                    {meetingImages.map((mi, i) => (
                        <div
                            key={i}
                            className="h-[300px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url('images/${mi.image}')`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="bg-primary px-2 sm:px-52">
                <div className="mt-10 p-10 sm:py-14 sm:px-24  flex flex-col gap-6 justify-between items-center">
                    <div className="text-white font-bold text-2xl sm:text-4xl">
                        Need a meeting room?
                    </div>
                    <div className="bg-textClr mt-4 sm:mt-0 text-center cursor-pointer text-white px-8 pt-2 pb-3 rounded-full font-bold text-sm sm:text-2xl">
                        Book a meeting room
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meeting;
