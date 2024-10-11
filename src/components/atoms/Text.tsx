import React from "react";
import clsx from "clsx";
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

const Text: React.FC<TextProps> = ({ text, className, ...props }) => {
  return (
    <p
      className={clsx(`w-full text-base font-normal m-4`, className)}
      {...props}
    >
      {text}
    </p>
  );
};

export default Text;
