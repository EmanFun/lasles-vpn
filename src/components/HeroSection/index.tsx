import { useIntl } from "react-intl";
import Illustration from "../../assets/Illustration-hero.svg";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidServer } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
function HeroSection() {
  const intl = useIntl();
  return (
    <div className="flex items-center justify-center flex-col lg:p-[5rem]">
      <div className=" lg:w-[1140px] flex items-center justify-between lg:m-8 lg:p-8">
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
          <div className="relative w-[150px] xl:w-[250px] m-4">
            <div className="absolute inset-0 top-10 bg-gradient-to-b from-[#5a1717] to-[#ffffff] blur-xl bg-opacity-10 rounded-[30px]"></div>
            <button className="relative w-[150px] md:w-[250px] py-5 rounded-xl bg-secondary text-white transition-all duration-300 transform hover:scale-[1.1]">
              {intl.formatMessage({ id: "Hero.btnText" })}
            </button>
          </div>
        </div>
        <div>
          <img src={Illustration} alt="illustration hero" />
        </div>
      </div>
      <div className="w-full lg:flex lg:justify-center px-8">
        <div className="stat-container lg:w-[1140px]  relative">
          {/* Layer Blur */}
          <div className="absolute inset-0 top-10 h-[200px] bg-gradient-to-b from-[#b4b2b2] to-[#ffffff] blur-xl bg-opacity-10 rounded-[30px]"></div>

          {/* Stats Content */}
          <div className="stat-cards  flex items-center lg:justify-between sm:justify-evenly h-[130px] relative z-10  lg:gap-10 bg-white lg:p-4 lg:m-2 rounded-lg">
            {/* Stat 1 */}
            <div className="stat sm:pr-5 sm:w-[160px] lg:w-[360px] border-r-2 justify-center flex items-center lg:gap-10 gap-2">
              <div className="w-[55px] h-[55px] bg-statBg flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-[1.5]">
                <BiSolidUser size={20} color="#F53838" />
              </div>
              <div>
                <p>90+</p>
                <p>{intl.formatMessage({ id: "Hero.statsUser" })}</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="stat sm:pr-5 sm:w-[160px] lg:w-[360px] flex border-r-2 justify-center items-center lg:gap-10 gap-2">
              <div className="w-[55px] h-[55px] bg-statBg flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-[1.5]">
                <IoLocationSharp size={20} color="#F53838" />
              </div>
              <div>
                <p>30+</p>
                <p>{intl.formatMessage({ id: "Hero.statsLocations" })}</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="stat sm:w-[160px] lg:w-[360px] flex justify-center items-center lg:gap-10 gap-2">
              <div className="w-[55px] h-[55px] bg-statBg flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-[1.5]">
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
