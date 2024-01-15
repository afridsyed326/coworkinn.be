import React from "react";
import Offices from "./components/Offices";
import Meeting from "./components/Meeting";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Facilities from "./components/Facilities";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Prvte from "./components/Offices/Prvte";
import Flex from "./components/Offices/Flex";
import Cowork from "./components/Offices/Cowork";
import Virtual from "./components/Offices/Virtual";

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/offices" element={<Offices />} />
                    <Route exact path="offices/prv" element={<Prvte />} />
                    <Route exact path="offices/flex" element={<Flex />} />
                    <Route exact path="offices/co" element={<Cowork />} />
                    <Route exact path="offices/virtual" element={<Virtual />} />
                    <Route exact path="/meeting" element={<Meeting />} />
                    <Route exact path="/facilities" element={<Facilities />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
