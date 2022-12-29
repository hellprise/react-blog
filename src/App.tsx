import { FC } from "react";

import { Banner, Header } from "./common";
import { Article } from "./modules";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <>
      <Header />
      <Banner />
      <Article />
    </>
  );
};
