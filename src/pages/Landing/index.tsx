import React from "react";
import { HeroSection, Nav } from "../../components";

const Landing: React.FC = () => {
  return (
    <div className="landing-container justify-center h-screen bg-white">
        <Nav/>
        <HeroSection />
    </div>
);
};

export default Landing;
