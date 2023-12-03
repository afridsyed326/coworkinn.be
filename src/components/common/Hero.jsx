import React from "react";

const Hero = ({ text, bgUrl }) => {
    return (
        <div
            className="h-[400px] bg-cover bg-center relative bg-blend-overlay"
            style={{
                backgroundImage: `url(${bgUrl})`,
                backgroundColor: "rgba(0,0,0, 0.2)",
            }}
        >
            <div
                className="absolute top-[50%] left-[50%] flex justify-center items-center translate-x-[-50%] 
                translate-y-[-50%] h-[100px]  font-extrabold text-4xl text-white text-center"
            >
                {text}
            </div>
        </div>
    );
};

export default Hero;
