import React from "react";

const Hero = ({ text, bgUrl, desc = "", customJsx = "" }) => {
    return (
        <div
            className="h-[500px] bg-cover bg-center relative bg-blend-overlay"
            style={{
                backgroundImage: `url(${bgUrl})`,
                backgroundColor: "rgba(0,0,0, 0.2)",
            }}
        >
            <div
                className="absolute top-[50%] left-[50%] flex flex-col justify-center items-center translate-x-[-50%] 
                translate-y-[-50%] h-[100px] w-full sm:w-auto  font-extrabold text-4xl text-white text-center"
            >
                <div>{text}</div>
                <div className="font-light mt-2 text-2xl">{desc}</div>
                {customJsx}
            </div>
        </div>
    );
};

export default Hero;
