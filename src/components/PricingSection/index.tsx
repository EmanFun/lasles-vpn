import Free from "../../assets/Free.svg";
import Standard from "../../assets/Standard.svg";
import Premium from "../../assets/Premium.svg";
import { BiCheck } from "react-icons/bi";
import { useIntl } from "react-intl";

function PricingSection() {
  const intl = useIntl();
  return (
    <div className="flex items-center justify-center flex-col p-12 ">
      <div className="flex items-center flex-col">
        <h1 className="text-4xl font-medium m-4">
          {intl.formatMessage({ id: "Pricing.title" })}
        </h1>
        <p className="text-base font-normal m-4">
          {intl.formatMessage({ id: "Pricing.textTitle" })}
        </p>
      </div>
      <div className="container-plans flex">
        <div className="plan lg:h-[760px] lg:w-[330px] bg-white border-2 border-cardBorder rounded-md lg:px-8 lg:py-12 lg:m-14 sm:px-2 sm:py-10 sm:m-1 flex items-center justify-start flex-col gap-4">
          <img src={Free} alt="Free Plan" />
          <p className="font-medium text-lg m-4">
            {intl.formatMessage({ id: "Pricing.freePlan" })}
          </p>
          <ul className="font-medium text-sm space-y-4">
            <li className="flex items-center gap-4">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureOne" })}
            </li>
            <li className="flex items-center gap-4">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureTwo" })}
            </li>
            <li className="flex items-center gap-4">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureFour" })}
            </li>
            <li className="flex items-center gap-4">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureFive" })}
            </li>
          </ul>
          <div className="h-full flex flex-col items-center justify-end">
            <p className="text-2xl font-medium m-4">
              {" "}
              {intl.formatMessage({ id: "Pricing.free" })}
            </p>
            <div className="relative lg:w-[180px]">
              <div className="absolute inset-0 top-5 bg-gradient-to-b from-[#5a1717] to-[#ffffff] blur-xl bg-opacity-10 rounded-[30px]"></div>
              <button className="relative lg:w-[180px] px-8 py-2 rounded-xl bg-secondary text-white">
                {intl.formatMessage({ id: "Pricing.btnSelect" })}
              </button>
            </div>
          </div>
        </div>
        <div className="plan lg:h-[760px] lg:w-[330px] bg-white border-2 border-cardBorder rounded-md lg:px-8 lg:py-12 lg:m-14 sm:px-2 sm:py-10 sm:m-1 flex items-center justify-start flex-col gap-4">
          <img src={Standard} alt="Standard Plan" />
          <p className="font-medium text-lg m-4">
            {intl.formatMessage({ id: "Pricing.standardPlan" })}
          </p>
          <ul className="font-medium text-sm space-y-4">
            <li className="flex items-center gap-4 ">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureOne" })}
            </li>
            <li className="flex items-center gap-4 ">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureTwo" })}
            </li>
            <li className="flex items-center gap-4 ">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureThree" })}
            </li>
            <li className="flex items-center gap-4 ">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureFive" })}
            </li>
            <li className="flex items-center gap-4 ">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureSix" })}
            </li>
          </ul>
          <div className="h-full flex flex-col items-center justify-end">
            <p className="m-5">
              <span className="text-2xl font-medium">$9</span> / mo
            </p>
            <div className="relative lg:w-[180px]">
              <div className="absolute inset-0 top-5 bg-gradient-to-b from-[#5a1717] to-[#ffffff] blur-xl bg-opacity-10 rounded-[30px]"></div>
              <button className="relative lg:w-[180px] px-8 py-2 rounded-xl bg-secondary text-white">
                {intl.formatMessage({ id: "Pricing.btnSelect" })}
              </button>
            </div>
          </div>
        </div>
        <div className="plan lg:h-[760px] lg:w-[330px] bg-white border-2 border-cardBorder rounded-md lg:px-8 lg:py-12 lg:m-14 sm:px-2 sm:py-10 sm:m-1 flex items-center justify-start flex-col gap-4">
          <img src={Premium} alt="Premium Plan" />
          <p className="font-medium text-lg m-4">
            {intl.formatMessage({ id: "Pricing.premiumPlan" })}
          </p>
          <ul className="flex-col font-medium text-sm space-y-4">
            <li className="flex items-center gap-4 ">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureOne" })}
            </li>
            <li className="flex items-center gap-4 ">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureTwo" })}
            </li>
            <li className="flex items-center gap-4 ">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureThree" })}
            </li>
            <li className="flex items-center gap-4 ">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureFive" })}
            </li>
            <li className="flex items-center gap-4 ">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureSix" })}
            </li>
            <li className="flex items-center gap-4 ">
              <BiCheck />
              {intl.formatMessage({ id: "Pricing.featureSeven" })}
            </li>
          </ul>
          <div className="h-full flex flex-col items-center justify-end">
            <p className="m-5">
              <span className="text-2xl font-medium">$12</span> / mo
            </p>
            <div className="relative lg:w-[180px]">
              <div className="absolute inset-0 top-5 bg-gradient-to-b from-[#5a1717] to-[#ffffff] blur-xl bg-opacity-10 rounded-[30px]"></div>
              <button className="relative lg:w-[180px] px-8 py-2 rounded-xl bg-secondary text-white">
                {intl.formatMessage({ id: "Pricing.btnSelect" })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
