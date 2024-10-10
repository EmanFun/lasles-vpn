import React from "react";
import { BiSolidCheckCircle } from "react-icons/bi";

interface FeatureListItemProps {
  feature: string;
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ feature }) => {
  return (
    <li className="flex items-center gap-3">
      <BiSolidCheckCircle size={20} color={"#2FAB73"} />
      {feature}
    </li>
  );
};

export default FeatureListItem;
