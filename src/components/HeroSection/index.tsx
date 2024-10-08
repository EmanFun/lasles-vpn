import { useIntl } from "react-intl";
import Illustration from "../../assets/Illustration-hero.svg";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidServer } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
function HeroSection() {
  const intl = useIntl();
  return (
    <div className="flex items-center justify-center flex-col px-[5rem]">
      <div className=" w-[1140px] flex items-center justify-between m-8 p-8">
        <div className="max-w-[50%]">
          <h1 className="font-medium text-5xl m-4">
            {intl.formatMessage({ id: "Hero.title" })}{" "}
            <span className="font-bold">
              {intl.formatMessage({ id: "App.name" })}
            </span>
            .
          </h1>
          <p className="text-base m-4">
            {intl.formatMessage({ id: "Hero.textTitle" })}
          </p>
          <div className="relative w-[150px] md:w-[250px] m-4">
            <div className="absolute inset-0 top-10 bg-gradient-to-b from-[#5a1717] to-[#ffffff] blur-xl bg-opacity-10 rounded-[30px]"></div>
            <button className="relative w-[150px] md:w-[250px] py-5 rounded-xl bg-secondary text-white">
              {intl.formatMessage({ id: "Hero.btnText" })}
            </button>
          </div>
        </div>
        <div>
          <img
            src={Illustration}
            alt="illustration hero"
            className="md:w-[610px] md:h-[380px]"
          />
        </div>
      </div>
      <div className="w-full flex justify-center px-8">
        <div className="stat-container w-[1140px]  relative">
          {/* Layer Blur */}
          <div className="absolute inset-0 top-10 h-[200px] bg-gradient-to-b from-[#b4b2b2] to-[#ffffff] blur-xl bg-opacity-10 rounded-[30px]"></div>

          {/* Stats Content */}
          <div className="stat-cards  flex items-center justify-between h-[130px] relative z-10 gap-10 bg-white p-4 m-2 rounded-lg">
            {/* Stat 1 */}
            <div className="stat w-[360px] border-r-2 justify-center flex items-center gap-10">
              <div className="w-[55px] h-[55px] bg-statBg flex items-center justify-center rounded-full">
                <BiSolidUser size={20} color="#F53838" />
              </div>
              <div>
                <p>90+</p>
                <p>{intl.formatMessage({ id: "Hero.statsUser" })}</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="stat w-[360px] flex border-r-2 justify-center items-center gap-10">
              <div className="w-[55px] h-[55px] bg-statBg flex items-center justify-center rounded-full">
                <IoLocationSharp size={20} color="#F53838" />
              </div>
              <div>
                <p>30+</p>
                <p>{intl.formatMessage({ id: "Hero.statsLocations" })}</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="stat w-[360px] flex justify-center items-center gap-10">
              <div className="w-[55px] h-[55px] bg-statBg flex items-center justify-center rounded-full">
                <BiSolidServer size={20} color="#F53838" />
              </div>
              <div>
                <p>50+</p>
                <p>{intl.formatMessage({ id: "Hero.statsServers" })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
