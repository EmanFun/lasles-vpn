import clsx from "clsx";
import { ReactNode } from "react";

interface NetWorkProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
}
const NetWork: React.FC<NetWorkProps> = ({ icon, className, ...props }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 top-10 bg-gradient-to-b from-[#5a1717] to-[#ffffff] blur-xl bg-opacity-10 rounded-[30px]"></div>
      <div
        className={clsx(
          "w-[55px] h-[55px]  bg-[white] flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-[1.5]",
          className
        )}
        {...props}
      >
        {icon}
      </div>
    </div>
  );
};

export default NetWork;
