import { useIntl } from "react-intl";
import Logo from "../../assets/Logo.png";

export default function Nav() {
  const intl = useIntl();
  return (
    <div className="nav-container w-full flex items-center justify-between md:justify-evenly md:p-8 ">
      <div className="text-lg">
        <img src={Logo} alt="Logo" />
      </div>
      <div className=" flex items-center gap-3 font-normal text-md">
        <a href="">{intl.formatMessage({ id: "Nav.sectionLink.about" })}</a>
        <a href="">{intl.formatMessage({ id: "Nav.sectionLink.features" })}</a>
        <a href="">{intl.formatMessage({ id: "Nav.sectionLink.pricing" })}</a>
        <a href="">
          {intl.formatMessage({ id: "Nav.sectionLink.testimonials" })}
        </a>
        <a href="">{intl.formatMessage({ id: "Nav.sectionLink.help" })}</a>
      </div>
      <div className="flex m-2 font-medium">
        <button className="w-[150px] h-[45px] px-5 hover:border-2 hover:border-secondary hover:rounded-full active:border-secondary active:text-secondary ">
          {intl.formatMessage({ id: "Nav.auth.signIn" })}
        </button>

        <button className="w-[150px] h-[45px] px-5 hover:border-2 hover:border-secondary hover:rounded-full active:border-secondary active:text-secondary">
          {intl.formatMessage({ id: "Nav.auth.signUp" })}
        </button>
      </div>
    </div>
  );
}
