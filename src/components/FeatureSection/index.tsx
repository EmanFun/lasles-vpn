import React from "react";
import Illustration from "../../assets/Illustration-feature.svg";
import { BiSolidCheckCircle } from "react-icons/bi";
import { useIntl } from "react-intl";

function FeatureSection() {
  const intl = useIntl();
  return (
    <div>
      <div>
        <img src={Illustration} alt="Illustration feature" />
      </div>
      <div>
        <h2></h2>
        <p></p>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default FeatureSection;
