import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../../../core/axios-base-query";
import { FEED_PAGE_SIZE } from "../../../utils";

import { GlobalFeedIn } from "./dto/global-feed.in";

interface GlobalFeedParams {
  page: number;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://api.realworld.io/api" }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, GlobalFeedParams>({
      query: ({ page }) => ({
        url: "/articles",
        method: "get",
        params: { limit: FEED_PAGE_SIZE, offset: page * FEED_PAGE_SIZE },
      }),
    }),
    getTags: builder.query({
      query: () => ({ url: "/tags", method: "get" }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetTagsQuery } = feedApi;
