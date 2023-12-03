import React from "react";

const OfficeCard = ({ office }) => {
    return (
        <div className="p-1">
            <div className="overflow-hidden">
                <img
                    src={`images/${office.image}`}
                    className="hover:scale-110 transition-all duration-300"
                />
            </div>
            <div className="text-2xl font-bold my-2">{office.title}</div>
            <div className="text-xl my-1 text-primary font-bold">
                {office.subTitle}
            </div>
            <div className="py-2 mt-2 px-4 w-fit rounded-full bg-primary text-center text-white font-bold">
                Discover our {office.title}
            </div>
        </div>
    );
};

export default OfficeCard;
