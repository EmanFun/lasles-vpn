import SectionTitle from "../atoms/SectionTitle";
import SectionSubtitle from "../atoms/SectionSubtitle";
import CompaniesList from "../molecules/CompaniesList";
import { useIntl } from "react-intl";
import GlobalInteractiveMap from "../molecules/GlobalInteractiveMap";

const GlobalNetworkSection = () => {
  const intl = useIntl();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center max-w-[380px] text-center">
        <SectionTitle
          title={intl.formatMessage({ id: "GLobalNetwork.title" })}
        />
        <SectionSubtitle
          subTitle={intl.formatMessage({ id: "GLobalNetwork.textTitle" })}
        />
      </div>
      <div>
        <GlobalInteractiveMap/>
      </div>
      <div className="flex justify-center items-center">
        <CompaniesList />
      </div>
    </div>
  );
};

export default GlobalNetworkSection;
