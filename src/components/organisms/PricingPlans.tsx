import PlanCard from "../molecules/PlanCard";
import Free from "../../assets/Free.svg";
import Standard from "../../assets/Standard.svg";
import Premium from "../../assets/Premium.svg";

function PricingPlans() {
  return (
    <div className="container-plans flex">
      <PlanCard
        imgSrc={Free}
        imgAlt="Free Plan"
        titleId="Pricing.freePlan"
        features={[
          "Pricing.featureOne",
          "Pricing.featureTwo",
          "Pricing.featureFour",
          "Pricing.featureFive",
        ]}
        price={0}
      />
      <PlanCard
        imgSrc={Standard}
        imgAlt="Standard Plan"
        titleId="Pricing.standardPlan"
        features={[
          "Pricing.featureOne",
          "Pricing.featureTwo",
          "Pricing.featureThree",
          "Pricing.featureFive",
          "Pricing.featureSix",
        ]}
        price={9}
      />
      <PlanCard
        imgSrc={Premium}
        imgAlt="Premium Plan"
        titleId="Pricing.PremiumPlan"
        features={[
          "Pricing.featureOne",
          "Pricing.featureTwo",
          "Pricing.featureThree",
          "Pricing.featureFive",
          "Pricing.featureSix",
          "Pricing.featureSeven",
        ]}
        price={12}
      />
    </div>
  );
}

export default PricingPlans;
