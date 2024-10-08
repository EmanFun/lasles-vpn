import React from "react";
import { FeatureSection, HeroSection, Nav } from "../../components";

const Landing: React.FC = () => {
  return (
    <div className="landing-container justify-center h-screen bg-white">
      <div>
        <Nav />
        <HeroSection />
        <FeatureSection />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Landing;
