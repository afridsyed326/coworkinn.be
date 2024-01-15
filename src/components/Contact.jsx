import React, { useState, useEffect } from "react";
import Hero from "./common/Hero";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

const Contact = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Optional: adds smooth scrolling animation
        });
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        comoany: "",
        phone: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            emailjs
                .send(
                    "service_b0kh738",
                    "template_sldv91b",
                    formData,
                    "ipFes2WvRLImRGoT2"
                )
                .then(
                    (result) => {
                        toast("Thank you, we will reach out to you soon!");
                        setLoading(false);
                    },
                    (error) => {
                        setLoading(false);
                    }
                );
        } catch (e) {
            setLoading(false);
        }
    };

    return (
        <div>
            <Hero text="CONTACT" bgUrl="images/meet.jpg" />

            <div className="flex flex-col sm:flex-row justify-center my-10">
                <div className="p-2">
                    <div className="font-bold">Queries or comments?</div>
                    <div className="font-bold mb-4">
                        Get in touch by email or via this form.
                    </div>

                    <div className="mb-4">
                        <span>CoworkInn</span>
                        <br />
                        <span>Korte Lozanastraat 26,</span>
                        <br />
                        <span>2018 Antwerpen</span>
                        <br />
                    </div>

                    <div>
                        <span className="font-bold">Phone: </span>
                        <span>
                            <a href="tel:+32-3-346-04-58">+32 3 346 04 58</a>
                        </span>
                        <br />
                        <span className="font-bold">E-mail: </span>
                        <span>
                            <a href="mailto:office@coworkinn.be">
                                office@coworkinn.be
                            </a>
                        </span>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="p-5 w-auto">
                    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="block py-2.5 px-0 w-full sm:w-[350px] text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label
                                htmlFor="name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Name
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="company"
                                name="company"
                                id="company"
                                className="block py-2.5 px-0 w-full sm:w-[350px] text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                value={formData.company}
                                onChange={handleChange}
                                required
                            />
                            <label
                                htmlFor="company"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Company
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="phone"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full sm:w-[350px] text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="phone"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Phone
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full sm:w-[350px] text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full sm:w-[350px] text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Message
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="text-white text-center bg-primary hover:bg-blue-800 hover:shadow-lg w-[120px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 flex justify-center rounded-full"
                        >
                            {loading ? (
                                <ThreeDots
                                    visible={true}
                                    height="25"
                                    width="25"
                                    color="#fff"
                                    radius="9"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            ) : (
                                "Send"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
