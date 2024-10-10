import React from "react";
import { BiCheck } from "react-icons/bi";

interface FeatureListCardItemProps {
  text: string;
}

const FeatureListCardItem: React.FC<FeatureListCardItemProps> = ({ text }) => {
  return (
    <li className="flex items-center gap-4">
      <BiCheck color={"#2FAB73"} size={25} />
      {text}
    </li>
  );
};

export default FeatureListCardItem;
