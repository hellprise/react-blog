import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '../../../core/axios-base-query';
import { FEED_PAGE_SIZE } from '../../../utils';
import { Article } from './dto/global-feed.in';
import { ProfileIn } from './dto/profile.in';
import { TagsIn } from './dto/tags.in';
import { transformResponse } from './utils';

interface BaseFeedParams {
    page: number;
}
interface GlobalFeedParams extends BaseFeedParams {
    tag: string | null;
}

export interface FeedData {
    articles: Article[];
    articlesCount: number;
}

interface ProfilePageParams extends BaseFeedParams {
    author: string;
    isFavorite?: boolean;
}

export const feedApi = createApi({
    reducerPath: 'feedApi',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://api.realworld.io/api' }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
            query: ({ page, tag }) => ({
                url: '/articles',
                params: {
                    limit: FEED_PAGE_SIZE,
                    offset: page * FEED_PAGE_SIZE,
                    tag,
                },
            }),
            transformResponse,
        }),
        getTags: builder.query<TagsIn, any>({
            query: () => ({ url: '/tags' }),
        }),
        getProfileFeed: builder.query<FeedData, ProfilePageParams>({
            query: ({ page, author, isFavorite = false }) => ({
                url: `/articles`,
                params: {
                    limit: FEED_PAGE_SIZE,
                    offset: page * FEED_PAGE_SIZE,
                    author: isFavorite ? undefined : author,
                    favorited: !isFavorite ? undefined : author,
                },
            }),
        }),
        getProfile: builder.query<ProfileIn, string>({
            query: (username) => ({ url: `/profiles/${username}` }),
        }),
    }),
});

export const {
    useGetGlobalFeedQuery,
    useGetTagsQuery,
    useGetProfileQuery,
    useGetProfileFeedQuery,
} = feedApi;
