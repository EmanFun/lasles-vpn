import React from "react";
import clsx from "clsx";
interface SectionSubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  subTitle: string;
  width?: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({
  subTitle,
  width,
  className,
  ...props
}) => {
  return (
    <p
      className={clsx(
        `text-base font-normal m-4 ${width ? `max-w-[${width}]` : ""}`,
        className
      )}
      {...props}
    >
      {subTitle}
    </p>
  );
};

export default SectionSubtitle;
