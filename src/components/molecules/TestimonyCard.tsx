import React from "react";
import { BiSolidStar } from "react-icons/bi";

interface TestimonyCardProps {
  userPhoto: string;
  name: string;
  location: string;
  testimony: string;
  stars: string;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({
  location,
  name,
  stars,
  testimony,
  userPhoto,
}) => {
  return (
    <div className="card lg:w-[400px] lg:h-[230px] sm:w-[200px] sm:h-[auto] hover:border-secondary border-2 rounded-xl sm:p-1 lg:p-4 sm:mx-5 transition-all duration-300 transform hover:scale-[1.1]">
      <div className="headerCard flex lg:flex-row items-center justify-start gap-3 p-2 sm:flex-col sm:justify-center sm:text-center">
        <div className="">
          <img
            src={userPhoto}
            alt="User Photo"
            className="rounded-full w-12 h-12"
          />
        </div>
        <div>
          <p className="font-medium text-lg">{name}</p>
          <p className="font-light text-sm">{location}</p>
        </div>
        <div className="font-normal flex items-center gap-2 lg:ml-auto sm:ml-0">
          <span>{stars}</span>
          <BiSolidStar color="#FEA250" />
        </div>
      </div>
      <div className="bodyCard lg:text-start sm:text-center">
        <p className=" lg:p-4 sm:p-0 text-base font-normal">{testimony}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
