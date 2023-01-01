import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../../../core/axios-base-query";

import { GlobalFeedIn } from "./dto/global-feed.in";

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://api.realworld.io/api" }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, any>({
      query: () => ({ url: "/articles", method: "get" }),
    }),
    getTags: builder.query({
      query: () => ({ url: "/tags", method: "get" }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetTagsQuery } = feedApi;
