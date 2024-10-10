import GlobalNetwork from "../../assets/Huge-Global.svg";
import CompanyOne from "../../assets/Netflix.svg";
import CompanyTwo from "../../assets/Reddit.svg";
import CompanyThree from "../../assets/Amazon.svg";
import CompanyFour from "../../assets/Discord.svg";
import CompanyFive from "../../assets/Spotify.svg";
import { useIntl } from "react-intl";

function GlobalNetworkSection() {
  const intl = useIntl();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center max-w-[380px] text-center">
        <h1 className="font-medium text-4xl py-4">
          {intl.formatMessage({ id: "GLobalNetwork.title" })}
        </h1>
        <p className="font-normal text-base py-4">
          {intl.formatMessage({ id: "GLobalNetwork.textTitle" })}
        </p>
      </div>
      <div>
        <img src={GlobalNetwork} alt="Global Network" className="my-8 py-8" />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-between gap-1">
          <img src={CompanyOne} alt="Netflix Logo" className="w-[190px]" />
          <img src={CompanyTwo} alt="Reddit Logo" className="w-[190px]" />
          <img src={CompanyThree} alt="Amazon Logo" className="w-[190px]" />
          <img src={CompanyFour} alt="Discord Logo" className="w-[190px]" />
          <img src={CompanyFive} alt="Spotify Logo" className="w-[190px]" />
        </div>
      </div>
    </div>
  );
}

export default GlobalNetworkSection;
