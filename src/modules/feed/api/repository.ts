import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../../../core/axios-base-query";
import { FEED_PAGE_SIZE } from "../../../utils";

import { GlobalFeedIn } from "./dto/global-feed.in";
import { TagsIn } from "./dto/tags.in";

interface GlobalFeedParams {
  page: number;
  tag: string | null;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://api.realworld.io/api" }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: "/articles",
        params: { limit: FEED_PAGE_SIZE, offset: page * FEED_PAGE_SIZE, tag },
      }),
    }),
    getTags: builder.query<TagsIn, any>({
      query: () => ({ url: "/tags" }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetTagsQuery } = feedApi;
