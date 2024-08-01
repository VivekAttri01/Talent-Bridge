// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

 // Correct import
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import WhyTalentBridgePage from "./pages/WhyTalentBridgePage";
import ExplorePage from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FindWorkPage from "./pages/FindWorkPage";
import FindPeerPage from "./pages/FindPeerPage";
import FindMentorPage from "./pages/FindMentorPage";
import ProjectsPage from "./pages/ProjectsPage";
import PricingPage from "./pages/PricingPage";
import UserProfile from "./pages/UserProfile";
import CategoriesPage from "./pages/CategoriesPage";
import "./App.css";

const App = () => {
  return (
    // <div> <Navbar /> <LandingPage /></div>
    <Router>
      {" "}
      {/* Ensure this is BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/why-talentbridge" element={<WhyTalentBridgePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find-work" element={<FindWorkPage />} />
        <Route path="/find-peer" element={<FindPeerPage />} />
        <Route path="/find-mentor" element={<FindMentorPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/profile" element={<UserProfile />} />

        
      </Routes>
    </Router>
  );
};

export default App;
