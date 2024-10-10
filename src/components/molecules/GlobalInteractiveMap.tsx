import GlobalMapSvg from "../../assets/GlobalMap.svg";
import SmallPointSvg from "../../assets/small-point.svg";
import MediumPointSvg from "../../assets/medium-point.svg";
import BigPointSvg from "../../assets/big-point.svg";

function GlobalInteractiveMap() {
  return (
    <div className="relative w-full">
      <img
        src={GlobalMapSvg}
        alt="Global Map"
        className="w-full h-full object-contain"
      />
      <img
        src={SmallPointSvg}
        alt="Small Point"
        className="absolute top-[6%] left-[35%] w-5 h-5 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={SmallPointSvg}
        alt="Small Point"
        className="absolute top-[44%] left-[19%] w-5 h-5 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={SmallPointSvg}
        alt="Small Point"
        className="absolute top-[33%] left-[84%] w-5 h-5 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={SmallPointSvg}
        alt="Small Point"
        className="absolute top-[55%] left-[44%] w-5 h-5 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={SmallPointSvg}
        alt="Small Point"
        className="absolute top-[68%] left-[28%] w-5 h-5 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />

      <img
        src={MediumPointSvg}
        alt="Small Point"
        className="absolute top-[30%] left-[20%] w-8 h-8 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={MediumPointSvg}
        alt="Small Point"
        className="absolute top-[75%] left-[80%] w-8 h-8 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={MediumPointSvg}
        alt="Small Point"
        className="absolute top-[88%] left-[28%] w-8 h-8 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={MediumPointSvg}
        alt="Small Point"
        className="absolute top-[60%] left-[30%] w-8 h-8 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={MediumPointSvg}
        alt="Small Point"
        className="absolute top-[50%] left-[67%] w-8 h-8 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />

      <img
        src={BigPointSvg}
        alt="Small Point"
        className="absolute top-[20%] left-[55%] w-15 h-15 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={BigPointSvg}
        alt="Small Point"
        className="absolute top-[30%] left-[12%] w-15 h-15 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={BigPointSvg}
        alt="Small Point"
        className="absolute top-[80%] left-[28%] w-15 h-15 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={BigPointSvg}
        alt="Small Point"
        className="absolute top-[30%] left-[45%] w-15 h-15 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
      <img
        src={BigPointSvg}
        alt="Small Point"
        className="absolute top-[40%] left-[74%] w-15 h-15 rounded-full transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
    </div>
  );
}

export default GlobalInteractiveMap;
