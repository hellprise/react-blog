import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../../../core/axios-base-query";
import { FEED_PAGE_SIZE } from "../../../utils";

import { GlobalFeedIn } from "./dto/global-feed.in";
import { TagsIn } from "./dto/tags.in";
import { ProfileIn } from "./dto/profile.in";

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
    getProfile: builder.query<ProfileIn, string>({
      query: (username) => ({ url: `/profiles/${username}` }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetTagsQuery, useGetProfileQuery } = feedApi;
