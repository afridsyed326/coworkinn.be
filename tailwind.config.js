/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                mainbg: "#fff",
                primary: "#041F60",
                textClr: "#3e5966",
                secondary: "#5C529A",
                accent: "#A7B6FA",
            },
        },
    },

    plugins: [],
};
