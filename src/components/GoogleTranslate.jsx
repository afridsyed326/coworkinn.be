import React, { useEffect } from "react";
import "./googleTranslate.css";

import { useRef } from "react";

function GoogleTranslate({ lang }) {
    const googleTranslateRef = useRef(null);

    useEffect(() => {
        // const script = document.createElement("script");
        // script.type = "text/javascript";
        // script.src =
        //     "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        // script.async = true;
        // script.defer = true;
        // document.body.appendChild(script);

        // window.googleTranslateElementInit = googleTranslateElementInit;

        // // Cleanup function for reinitialization
        // return () => {
        //     const translateElement = document.getElementById(
        //         "google_translate_element"
        //     );
        //     translateElement.innerHTML = "";
        // };
    }, []);

    const googleTranslateElementInit = () => {
        // Remove existing widget
        const translateElement = document.getElementById(
            "google_translate_element"
        );
        translateElement.innerHTML = "";

        // Initialize the Google Translate widget with the new language
        googleTranslateRef.current =
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "en,nl,fr",
                    autoDisplay: false,
                    layout:
                        window.innerWidth > 768
                            ? window.google.translate.TranslateElement
                                  .FloatPosition.TOP_LEFT
                            : window.google.translate.TranslateElement
                                  .InlineLayout.SIMPLE,
                },
                "google_translate_element"
            );
    };

    useEffect(() => {
        // Reinitialize the Google Translate widget when lang changes
        if (googleTranslateRef.current) {
            googleTranslateElementInit();
        }
    }, [lang]);

    return <div id="google_translate_element" className="custom-icon"></div>;
}

export default GoogleTranslate;
