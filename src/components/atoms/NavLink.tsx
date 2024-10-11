import React from "react";
import clsx from "clsx";

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  text: string;
  sectionID: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  text,
  sectionID,
  className,
  ...props
}) => {
  return (
    <a href={sectionID} className={clsx(className)} {...props}>
      {text}
    </a>
  );
};

export default NavLink;
