import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type ButtonType = "article" | "form";

interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: JSX.Element | JSX.Element[];
  link: string;
  color: ButtonType;
}

export const Button: FC<IButtonProps> = ({ children, color, link, ...props }) => {
  return (
    <button {...props}>
      <Link to={link} className="group relative inline-block text-lg">
        <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-blog-green px-5 py-3 font-medium leading-tight text-blog-green transition-colors duration-300 ease-out group-hover:font-semibold group-hover:text-text">
          <span className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3"></span>
          <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-blog-green transition-all duration-300 group-hover:-rotate-180"></span>
          <span className="relative flex space-x-1">{children}</span>
        </span>
        <span
          className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-blog-green transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"></span>
      </Link>
    </button>
  );
};
