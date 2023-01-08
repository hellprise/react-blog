import { FC } from "react";

import { Banner } from "../../../common";
import { Articles } from "../components";

import { useGetGlobalFeedQuery } from "../api/repository";
import { useSearchParams } from "react-router-dom";

interface IFeedPageProps {}

export const GlobalFeedPage: FC<IFeedPageProps> = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 0;

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get("tag"),
  });
  return (
    <>
      <Banner />
      <Articles data={data} error={error} isFetching={isFetching} isLoading={isLoading} />
    </>
  );
};
