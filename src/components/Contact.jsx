import React from "react";
import Hero from "./common/Hero";

const Contact = () => {
    return (
        <div>
            <Hero text="CONTACT" bgUrl="images/meet.jpg" />

            <div className="flex flex-col sm:flex-row justify-center  my-10">
                <div className="p-2">
                    <div className="font-bold">Queries or comments?</div>
                    <div className="font-bold mb-4">
                        Get in touch by email or via this form.
                    </div>

                    <div className="mb-4">
                        <span>Cowork Inn </span>
                        <br />
                        <span>2004, Exchange Tower</span>
                        <br />
                        <span>Busiess Bay</span>
                        <br />
                        <span>Dubai</span>
                        <br />
                    </div>

                    <div className="mb-4">
                        <a
                            href="maps.google.com"
                            target="_blank"
                            className="underline"
                        >
                            Google maps
                        </a>
                    </div>

                    <div>
                        <span className="font-bold">Phone: </span>
                        <span>
                            <a href="tel:+32-484-17-21-27">+32 484 17 21 27</a>
                        </span>
                        <br />
                        <span className="font-bold">E-mail: </span>
                        <span>
                            <a href="mailto:info@coworkinn.be">
                                info@coworkinn.be
                            </a>
                        </span>
                        <br />
                        <span className="font-bold">Company number: </span>
                        <span>BTW BE 'COMPANY_NUMBER'</span>
                        <br />
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfeA-DQJnqQC-5Hbd6rBs1x9Cu9QTZ2HfOWqwNu7lMqb6qpaQ/viewform?embedded=true"
                        width={window.innerWidth > 764 ? "600" : "100%"}
                        height="1200"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
