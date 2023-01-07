import clsx from "clsx";
import { FC } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

interface IArticlesToggleProps {}

export const ArticlesToggle: FC<IArticlesToggleProps> = () => {
  const [searchParams] = useSearchParams();

  const tag = searchParams.get("tag");

  const navLinkClasses = clsx("transition-all py-2 px-4 text-blog-green duration-[350ms]", {
    "border-b-blog-green font-semibold border-b-2": !tag,
    "": tag,
  });

  return (
    <ul className="flex h-[36px] items-center space-x-5">
      <li>
        <NavLink className={navLinkClasses} to={"/"}>
          Global Feed
        </NavLink>
      </li>
      {tag && (
        <li>
          <span className="border-b-2 border-b-blog-green py-2 px-4 font-semibold text-blog-green transition-all duration-[350ms]">
            {tag}
          </span>
        </li>
      )}
    </ul>
  );
};
