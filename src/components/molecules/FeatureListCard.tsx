import React from "react";
import { useIntl } from "react-intl";
import FeatureListCardItem from "../atoms/FeatureListCardItem";

interface FeatureListCardProps {
  features: string[];
}

const FeatureListCard: React.FC<FeatureListCardProps> = ({ features }) => {
  const intl = useIntl();
  return (
    <ul className="font-medium text-sm space-y-4">
      {features.map((featureId: string, index: number) => (
        <FeatureListCardItem
          key={index}
          text={intl.formatMessage({ id: featureId })}
        />
      ))}
    </ul>
  );
};

export default FeatureListCard;
