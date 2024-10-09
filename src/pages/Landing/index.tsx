import React from "react";
import { FeatureSection, HeroSection, Nav, PricingSection } from "../../components";

const Landing: React.FC = () => {
  return (
    <div className="landing-container justify-center h-screen bg-white">
      <div>
        <Nav />
        <HeroSection />
        <FeatureSection />
      </div>
      <div className="bg-gradient-to-b from-[#fafafa] to-white h-full">
        <PricingSection />
        
      </div>
    </div>
  );
};

export default Landing;
