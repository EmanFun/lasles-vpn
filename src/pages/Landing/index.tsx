import React from "react";
import { HeroSection, Nav } from "../../components";
import PricingSection from "../../components/sections/PricingSection";
import GlobalNetworkSection from "../../components/sections/GlobalNetworkSection";
import FeaturesSection from "../../components/sections/FeaturesSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import SubscribeSection from "../../components/sections/SubscribeSection";
const Landing: React.FC = () => {
  return (
    <div className="landing-container justify-center h-screen bg-white">
      <div>
        <Nav />
        <HeroSection />
        <FeaturesSection />
      </div>
      <div className="bg-gradient-to-b from-[#fafafa] to-white ">
        <PricingSection />
        <GlobalNetworkSection />
        <TestimonialsSection />
      </div>
      <div className="bg-gradient-to-b from-[#fafafa] to-white ">
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Landing;
