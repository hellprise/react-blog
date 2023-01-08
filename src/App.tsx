import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./common";
import { ProfilePage, GlobalFeedPage } from "./modules";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<GlobalFeedPage />} />
        <Route path="/user/:profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};
