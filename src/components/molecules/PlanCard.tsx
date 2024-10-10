import React from "react";
import PlanTitle from "../atoms/PlanTitle";
import { useIntl } from "react-intl";
import FeatureListCard from "./FeatureListCard";
import ButtonCard from "../atoms/ButtonCard";
import Price from "../atoms/Price";

interface PlanCardProps {
  imgSrc: string;
  imgAlt: string;
  titleId: string;
  features: string[];
  price: number;
}

const PlanCard: React.FC<PlanCardProps> = ({
  features,
  imgAlt,
  imgSrc,
  price,
  titleId,
}) => {
  const intl = useIntl();
  return (
    <div className="plan lg:h-[760px] lg:w-[330px] bg-white border-2 border-cardBorder rounded-md lg:px-8 lg:py-12 lg:m-14 sm:px-2 sm:py-10 sm:m-1 flex items-center justify-start flex-col gap-4">
      <img src={imgSrc} alt={imgAlt} />
      <PlanTitle title={intl.formatMessage({ id: titleId })} />
      <FeatureListCard features={features} />
      <div className="h-full flex flex-col items-center justify-end">
        <Price price={price} />
        <ButtonCard text={intl.formatMessage({ id: "Pricing.btnPlan" })} />
      </div>
    </div>
  );
};

export default PlanCard;
