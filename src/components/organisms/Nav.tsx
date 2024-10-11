import { useIntl } from "react-intl";
import { LangType } from "../../@types";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";
import LanguageSelector from "../atoms/LanguageSelector";

interface NavProps {
  switchLanguage: (lang: LangType) => void;
  locale: LangType;
}

const Nav: React.FC<NavProps> = ({ switchLanguage, locale }) => {
  const intl = useIntl();
  return (
    <div className="nav-container w-full flex items-center justify-between md:justify-evenly md:p-8 ">
      <Logo />
      <div className="flex flex-wrap items-center justify-center mx-10 gap-4 font-normal text-md">
        <NavLink
          sectionID="#heroSection"
          text={intl.formatMessage({ id: "Nav.sectionLink.about" })}
          className="transition-all duration-300 transform hover:scale-[1.2]"
        />

        <NavLink
          sectionID="#featuresSection"
          text={intl.formatMessage({ id: "Nav.sectionLink.features" })}
          className="transition-all duration-300 transform hover:scale-[1.2]"
        />

        <NavLink
          sectionID="#pricingSection"
          text={intl.formatMessage({ id: "Nav.sectionLink.pricing" })}
          className="transition-all duration-300 transform hover:scale-[1.2]"
        />

        <NavLink
          sectionID="#testimonialsSection"
          text={intl.formatMessage({ id: "Nav.sectionLink.testimonials" })}
          className="transition-all duration-300 transform hover:scale-[1.2]"
        />

        <NavLink
          sectionID="#helpSection"
          text={intl.formatMessage({ id: "Nav.sectionLink.help" })}
          className="transition-all duration-300 transform hover:scale-[1.2]"
        />
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <LanguageSelector
            switchLanguage={switchLanguage}
            currentLanguage={locale}
          />
        </div>
        <div className="flex m-2 font-medium md:flex-col ">
          <button className="w-[150px] h-[45px] px-5 hover:border-2 hover:border-secondary hover:rounded-full active:border-secondary active:text-secondary ">
            {intl.formatMessage({ id: "Nav.auth.signIn" })}
          </button>

          <button className="w-[150px] h-[45px] px-5 hover:border-2 hover:border-secondary hover:rounded-full active:border-secondary active:text-secondary">
            {intl.formatMessage({ id: "Nav.auth.signUp" })}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
