import { useIntl } from "react-intl";
import Logo from "../atoms/Logo";
import SectionSubtitle from "../atoms/SectionSubtitle";
import LegalLinks from "../organisms/LegalLinks";
import Text from "../atoms/Text";
import Networks from "../molecules/Networks";
function FooterSection() {
  const intl = useIntl();
  return (
    <div className="flex items-start justify-between mx-8 px-4 lg:mx-20 lg:px-[10%]">
      <div>
        <Logo />
        <div>
          <SectionSubtitle
            className="w-[300px]"
            subTitle={intl.formatMessage({ id: "Footer.about" })}
          />
          <Networks />
          <Text className="text-[#AFB5C0]" text="@2024LaslesVPN" />
        </div>
      </div>
      <LegalLinks />
    </div>
  );
}

export default FooterSection;
