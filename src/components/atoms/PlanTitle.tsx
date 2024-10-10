import React from "react";

interface PlanTitleProps {
  title: string;
}

const PlanTitle: React.FC<PlanTitleProps> = ({ title }) => {
  return <p className="font-medium text-lg m-4">{title}</p>;
};

export default PlanTitle;
