import React from "react";
import FeatureListItem from "../atoms/FeatureListItem";
import { useIntl } from "react-intl";

interface FeaturesListProps {
  features: string[];
}

const FeaturesList: React.FC<FeaturesListProps> = ({features}) => {
  const intl = useIntl();
  return (
    <ul className="font-light text-[14px] space-y-4">
      {features.map((featureId: string, index: number)=>(
        <FeatureListItem key={index} feature={intl.formatMessage({ id: featureId })} />
      ))}
    </ul>
  );
}

export default FeaturesList;
