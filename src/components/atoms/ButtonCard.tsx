import React from "react";

interface ButtonCardProps {
  text: string;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ text }) => {
  return (
    <div className="relative lg:w-[180px] ">
      <div className="absolute inset-0 top-8 bg-gradient-to-b from-[#5a1717] to-[#ffffff] blur-xl bg-opacity-10 rounded-[30px]"></div>
      <button className="relative lg:w-[180px] px-8 py-2 rounded-3xl font-medium border-2 border-secondary bg-white text-secondary hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-[1.1]">
        {text}
      </button>
    </div>
  );
};

export default ButtonCard;
