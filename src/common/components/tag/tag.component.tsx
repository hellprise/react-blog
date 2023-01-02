import { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

enum TagColor {
  NONE = "transparent",
  DARK = "dark",
}

interface ITagProps {
  children: string;
  color?: keyof typeof TagColor;
  link: string;
}

export const Tag: FC<ITagProps> = ({ children, link, color = TagColor.NONE }) => {
  return (
    <Link
      to={`/?tag=${link}`}
      className={clsx(
        "rounded-lg border border-text py-[3px] px-2 font-titillium text-sm transition-colors",
        {
          "bg-text text-white hover:bg-transparent hover:text-text": color === TagColor.DARK,
          "hover:bg-text hover:text-white": color === TagColor.NONE,
        },
      )}>
      {children}
    </Link>
  );
};
