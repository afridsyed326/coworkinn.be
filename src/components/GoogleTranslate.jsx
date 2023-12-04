import React, { useEffect } from "react";
import "./googleTranslate.css";

function GoogleTranslate() {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        window.googleTranslateElementInit = googleTranslateElementInit;
        // }
    }, []);

    let isGoogleTranslateInitialized = false;

    const googleTranslateElementInit = () => {
        if (!isGoogleTranslateInitialized) {
            isGoogleTranslateInitialized = true;

            // initialize the Google Translate widget
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
        }
    };

    return <div id="google_translate_element" className="custom-icon"></div>;
}

export default GoogleTranslate;
