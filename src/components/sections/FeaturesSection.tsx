import Illustration from "../../assets/Illustration-feature.svg";
import SectionTitle from "../atoms/SectionTitle";
import SectionSubtitle from "../atoms/SectionSubtitle";
import FeaturesList from "../molecules/FeaturesList";
import { useIntl } from "react-intl";
const FeaturesSection = () => {
  const intl = useIntl();
  return (
    <div className="flex items-center justify-center gap-4 my-8 py-8">
      <div>
        <img src={Illustration} alt="Illustration feature" />
      </div>
      <div className="sm:mt-6">
        <SectionTitle
          title={intl.formatMessage({ id: "Feature.title" })}
          width="500px"
        />
        <SectionSubtitle
          subTitle={intl.formatMessage({ id: "Feature.textTitle" })}
          width="500px"
        />
        <FeaturesList
          features={[
            "Feature.featureOne",
            "Feature.featureTwo",
            "Feature.featureThree",
            "Feature.featureFour",
          ]}
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
