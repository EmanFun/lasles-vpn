import React from "react";
import { HeroSection } from "../../components";
import PricingSection from "../../components/sections/PricingSection";
import GlobalNetworkSection from "../../components/sections/GlobalNetworkSection";
import FeaturesSection from "../../components/sections/FeaturesSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import SubscribeSection from "../../components/sections/SubscribeSection";
import Nav from "../../components/organisms/Nav";
import FooterSection from "../../components/sections/FooterSection";
import { LangType } from "../../@types";

interface LandingProps {
  switchLanguage: (lang: "es" | "en") => void;
  locale: LangType;
}

const Landing: React.FC<LandingProps> = ({switchLanguage, locale}) => {
  return (
    <div className="landing-container justify-center h-screen bg-white">
      <div>
        <Nav switchLanguage={switchLanguage} locale={locale}/>
        <section id="heroSection">
          <HeroSection />
        </section>
        <section id="featuresSection">
          <FeaturesSection />
        </section>
      </div>
      <div className="bg-gradient-to-b from-[#fafafa] to-white ">
        <section id="pricingSection">
          <PricingSection />
        </section>
        <GlobalNetworkSection />
        <section id="testimonialsSection">
          <TestimonialsSection />
        </section>
      </div>
      <div className="bg-gradient-to-b from-[#fafafa] to-white ">
        <SubscribeSection />
        <section id="helpSection">
          <FooterSection/>
        </section>
      </div>
    </div>
  );
};

export default Landing;
