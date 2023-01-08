import { FC } from "react";

import { Banner } from "../../../common";
import { Articles } from "../components";

interface IFeedPageProps {}

export const GlobalFeedPage: FC<IFeedPageProps> = () => {
  return (
    <>
      <Banner />
      <Articles />
    </>
  );
};
