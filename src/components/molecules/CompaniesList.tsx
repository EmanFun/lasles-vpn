import CompanyOne from "../../assets/Netflix.svg";
import CompanyTwo from "../../assets/Reddit.svg";
import CompanyThree from "../../assets/Amazon.svg";
import CompanyFour from "../../assets/Discord.svg";
import CompanyFive from "../../assets/Spotify.svg";
import CompanySix from "../../assets/Nasa_1.svg";
import CompanySeven from "../../assets/Newegg_1.svg";
import CompanyNine from "../../assets/spacex_1.svg";
import CompanyTeen from "../../assets/RSI.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function CompaniesList() {
  return (
    <div className="lg:w-[800px] sm:w-[600px] my-8">
      <Swiper
        spaceBetween={35}
        slidesPerView={4}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 5,
          },
          640: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
        className="flex justify-center items-center w-full h-full"
      >
        <SwiperSlide>
          <img
            src={CompanyOne}
            alt="Netflix Logo"
            className="w-[200px] h-[100px] object-contain duration-300 transform hover:scale-[1.2]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={CompanyTwo}
            alt="Reddit Logo"
            className="w-[200px] h-[100px] object-contain duration-300 transform hover:scale-[1.2]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={CompanyThree}
            alt="Amazon Logo"
            className="w-[200px] h-[100px] object-contain duration-300 transform hover:scale-[1.2]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={CompanyFour}
            alt="Discord Logo"
            className="w-[200px] h-[100px] object-contain duration-300 transform hover:scale-[1.2]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={CompanyFive}
            alt="Spotify Logo"
            className="w-[200px] h-[100px] object-contain duration-300 transform hover:scale-[1.2]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={CompanySix}
            alt="Nasa Logo"
            className="w-[200px] h-[100px] object-contain duration-300 transform hover:scale-[1.2]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={CompanySeven}
            alt="Newegg Logo"
            className="w-[200px] h-[100px] object-contain duration-300 transform hover:scale-[1.2]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={CompanyNine}
            alt="SpaceX Logo"
            className="w-[200px] h-[100px] object-contain duration-300 transform hover:scale-[1.2]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={CompanyTeen}
            alt="RSI Logo"
            className="w-[200px] h-[100px] object-contain duration-300 transform hover:scale-[1.2]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CompaniesList;
