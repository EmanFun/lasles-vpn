import SectionTitle from "../atoms/SectionTitle";
import { useIntl } from "react-intl";
import SectionSubtitle from "../atoms/SectionSubtitle";
import PricingPlans from "../organisms/PricingPlans";

function PricingSection() {
  const intl = useIntl();
  return (
    <div className="flex items-center justify-center flex-col p-12 ">
      <div className="flex items-center flex-col">
        <SectionTitle title={intl.formatMessage({ id: "Pricing.title" })} />
        <SectionSubtitle
          subTitle={intl.formatMessage({ id: "Pricing.textTitle" })}
        />
      </div>
      <PricingPlans />
    </div>
  );
}

export default PricingSection;
