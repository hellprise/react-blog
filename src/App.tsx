import { FC } from "react";

import { Banner, Header } from "./common";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
};
