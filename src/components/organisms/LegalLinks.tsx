import { useIntl } from "react-intl";
import Text from "../atoms/Text";

const firstColumn = [
  "FooterProduct.title",
  "FooterProduct.download",
  "FooterProduct.pricing",
  "FooterProduct.locations",
  "FooterProduct.server",
  "FooterProduct.countries",
  "FooterProduct.blog",
];

const secondColumn = [
  "FooterEngage.title",
  "FooterEngage.laslesVPN?",
  "FooterEngage.FAQ",
  "FooterEngage.tutorials",
  "FooterEngage.aboutUs",
  "FooterEngage.privacyPolicy",
  "FooterEngage.termsOfService",
];

const thirdColumn = [
  "FooterEarn.title",
  "FooterEarn.affiliate",
  "FooterEarn.becomePartner",
];

function LegalLinks() {
  const intl = useIntl();
  return (
    <div className="flex ">
      <div>
        {firstColumn.map((text) => (
          <Text text={intl.formatMessage({ id: text })} />
        ))}
      </div>
      <div>
        {" "}
        {secondColumn.map((text) => (
          <Text text={intl.formatMessage({ id: text })} />
        ))}
      </div>
      <div>
        {" "}
        {thirdColumn.map((text) => (
          <Text text={intl.formatMessage({ id: text })} />
        ))}
      </div>
    </div>
  );
}

export default LegalLinks;
