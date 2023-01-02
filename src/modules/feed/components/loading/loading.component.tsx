import clsx from "clsx";
import { FC } from "react";

type LoadingTextSize = "s" | "m" | "l";

interface ILoadingComponentProps {
  text: string;
  size?: LoadingTextSize;
}

export const LoadingComponent: FC<ILoadingComponentProps> = ({ text, size = "l" }) => {
  return (
    <div className="flex items-end justify-center space-x-6 font-titillium">
      <span
        className={clsx(" font-semibold text-black", {
          "text-xl": size === "s",
          "text-3xl": size === "m",
          "text-4xl": size === "l",
        })}>
        {text}
      </span>
      <div className="dots-animation mb-1" />
    </div>
  );
};
