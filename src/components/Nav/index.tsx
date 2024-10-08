import { useIntl } from "react-intl";
import Logo from "../../assets/Logo.png";

export default function Nav() {
  const intl = useIntl();
  return (
    <div className="nav-container flex items-center justify-evenly p-8 ">
      <div className="text-lg">
        <img src={Logo} alt="Logo" />
      </div>
      <div className=" flex items-center gap-4 font-normal text-md">
        <a href="">{intl.formatMessage({id: "Nav.sectionLink.about"})}</a>
        <a href="">{intl.formatMessage({id: "Nav.sectionLink.features"})}</a>
        <a href="">{intl.formatMessage({id: "Nav.sectionLink.pricing"})}</a>
        <a href="">{intl.formatMessage({id: "Nav.sectionLink.testimonials"})}</a>
        <a href="">{intl.formatMessage({id: "Nav.sectionLink.help"})}</a>
      </div>
      <div className="flex gap-4 font-medium">
        <button>{intl.formatMessage({id: "Nav.auth.signIn"})}</button>
        <button>{intl.formatMessage({id: "Nav.auth.signUp"})}</button>
      </div>
    </div>
  );
}
