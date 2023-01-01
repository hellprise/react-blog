import clsx from "clsx";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface IArticlesToggleProps {}

export const ArticlesToggle: FC<IArticlesToggleProps> = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx("transition-all py-2 px-4 text-blog-green duration-[350ms]", {
      "border-b-blog-green font-semibold border-b-2": isActive,
      "": !isActive,
    });

  return (
    <ul className="flex h-[36px] items-center space-x-5">
      <li>
        <NavLink className={navLinkClasses} to={"/"}>
          Global Feed
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClasses} to={"/123"}>
          testObj
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClasses} to={"/321"}>
          Cat
        </NavLink>
      </li>
    </ul>
  );
};
