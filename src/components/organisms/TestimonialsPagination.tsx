import TestimonyCard from "../molecules/TestimonyCard";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import UserPhoto from "../../assets/Ellipse 175.png";
import UserPhotoTwo from "../../assets/Ellipse176.png";
import UserPhotoThree from "../../assets/Hahahah.png";

function TestimonialsPagination() {
  return (
    <div className="m-4 py-4">
      <div className="flex items-center justify-around gap-3">
        <TestimonyCard
          userPhoto={UserPhoto}
          name="MClain Robert"
          location="NY, USA"
          stars="4.5"
          testimony='"Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
        />
        <TestimonyCard
          userPhoto={UserPhotoTwo}
          name="Julia Christy"
          location="Shanxi, China"
          stars="4.7"
          testimony='"I like it because I like to travel far and still can connect with high speed".'
        />
        <TestimonyCard
          userPhoto={UserPhotoThree}
          name="Kim Young-Un"
          location="Pionyang, North Korea"
          stars="4,5"
          testimony='"With this service I am ready to dominate the world".'
        />
      </div>
      <div className="flex justify-between items-center my-8 py-4">
        <div className="w-[180px] flex items-center gap-1 ">
          <div className="h-4 w-4 bg-[#DDE0E4] rounded-full  hover:w-[45px] hover:bg-secondary transition-all duration-300 ">
            &nbsp;
          </div>
          <div className="h-4 w-4 bg-[#DDE0E4] rounded-full hover:w-[45px] hover:bg-secondary transition-all duration-300 ">
            &nbsp;
          </div>
          <div className="h-4 w-4 bg-[#DDE0E4] rounded-full  hover:w-[45px] hover:bg-secondary transition-all duration-300 ">
            &nbsp;
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-[60px] w-[60px] hover:bg-secondary rounded-full border-2 border-secondary transition-all duration-300">
            <BiLeftArrowAlt
              size={30}
              className="text-[#f53838] hover:text-white transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center h-[60px] w-[60px] hover:bg-secondary rounded-full border-2 border-secondary transition-all duration-300">
            <BiRightArrowAlt
              size={30}
              className="text-[#f53838] hover:text-white transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsPagination;
