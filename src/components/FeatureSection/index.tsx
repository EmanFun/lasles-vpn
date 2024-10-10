import Illustration from "../../assets/Illustration-feature.svg";
import { BiSolidCheckCircle } from "react-icons/bi";
import { useIntl } from "react-intl";

function FeatureSection() {
  const intl = useIntl();
  return (
    <div className="flex items-center justify-center gap-4 my-8 py-8">
      <div>
        <img src={Illustration} alt="Illustration feature" />
      </div>
      <div className="sm:mt-6">
        <h2 className="font-medium text-4xl max-w-[500px]">
          {intl.formatMessage({ id: "Feature.title" })}
        </h2>
        <p className="max-w-[450px] text-base">
          {intl.formatMessage({ id: "Feature.textTitle" })}
        </p>
        <ul className="font-light text-[14px] space-y-4">
          <li className="flex items-center gap-3">
            <BiSolidCheckCircle size={20} color={"#2FAB73"} />
            {intl.formatMessage({ id: "Feature.featureOne" })}
          </li>
          <li className="flex items-center gap-3">
            <BiSolidCheckCircle size={20} color={"#2FAB73"} />
            {intl.formatMessage({ id: "Feature.featureTwo" })}
          </li>
          <li className="flex items-center gap-3">
            <BiSolidCheckCircle size={20} color={"#2FAB73"} />
            {intl.formatMessage({ id: "Feature.featureThree" })}
          </li>
          <li className="flex items-center gap-3">
            <BiSolidCheckCircle size={20} color={"#2FAB73"} />
            {intl.formatMessage({ id: "Feature.featureFour" })}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeatureSection;
