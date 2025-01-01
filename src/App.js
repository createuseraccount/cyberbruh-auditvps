import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import ScanPage from "./pages/ScanPage";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/scan" element={<ScanPage />} />
            </Routes>
        </Router>
    );
};

export default App;
