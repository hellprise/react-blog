import clsx from "clsx";
import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

import { ROUTES } from "../../../utils";

interface HeaderProps {
  // ...
}

export const Header: FC<HeaderProps> = ({}) => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx("transition-all duration-[350ms]", {
      "font-semibold hover:text-lg": isActive,
      "text-black/30 hover:text-black": !isActive,
    });

  return (
    <header>
      <nav className="container">
        <section className="flex items-center justify-between px-2 py-4">
          <Link to="/" className="font-titillium text-2xl font-bold text-green">
            Conduit
          </Link>

          <ul className="flex items-center space-x-5">
            <li>
              <NavLink to={ROUTES.HOME} className={navLinkClasses}>
                home
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClasses} to={ROUTES.SIGN_IN}>
                sign in
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClasses} to={ROUTES.SIGN_UP}>
                sign up
              </NavLink>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};
