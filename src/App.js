import React from "react";
import Offices from "./components/Offices";
import Meeting from "./components/Meeting";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Offices />} />
                    <Route exact path="/meeting" element={<Meeting />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
