import SectionTitle from "../atoms/SectionTitle";
import SectionSubtitle from "../atoms/SectionSubtitle";
import { useIntl } from "react-intl";

function SubscribeSection() {
  const intl = useIntl();
  return (
    <div className="relative bottom-[120px] flex justify-center">
      <div className="absolute sm:mx-10 lg:mx-[10%] inset-10  w-auto h-[300px] bg-gradient-to-b from-[#b4b2b2] to-[#ffffff] blur-xl bg-opacity-10 rounded-[30px]"></div>
      <div className="relative m-8 lg:w-[70%] h-[230px] flex items-center justify-between bg-[#FFFFFF] rounded-xl p-6">
        <div>
          <SectionTitle
            title={intl.formatMessage({ id: "Subscribe.title" })}
            className="sm:w-[550px]"
          />
          <SectionSubtitle
            subTitle={intl.formatMessage({ id: "Subscribe.textTitle" })}
          />
        </div>
        <div className="relative w-[150px] xl:w-[250px] m-4 flex-shrink-0">
          <div className="absolute m-2 inset-0 top-2 bg-gradient-to-b from-[#5a1717] to-[#ffffff] blur-xl bg-opacity-10 rounded-[30px]"></div>
          <button className="relative w-full py-5 rounded-xl bg-secondary text-white sm:text-sm duration-300 transform hover:scale-[1.2]">
            {intl.formatMessage({ id: "Subscribe.btnText" })}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection;
