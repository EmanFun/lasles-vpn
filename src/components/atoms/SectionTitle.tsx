import React from "react";
import clsx from "clsx";

interface SectionTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  title: string;
  width?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  width,
  className,
  ...props
}) => {
  return (
    <h1
      className={clsx(
        `text-4xl font-medium m-4 ${width ? `max-w-[${width}]` : ""}`,
        className
      )}
      {...props}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
