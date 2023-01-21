import { createApi } from '@reduxjs/toolkit/query/react';

import { RealWorldBaseQuery } from '../../../core/api/realworld-base-query';
import { ProfileIn } from './dto/profile.in';

interface ProfileParams {
    username: string;
}

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: RealWorldBaseQuery,
    endpoints: (builder) => ({
        getProfile: builder.query<ProfileIn, ProfileParams>({
            query: ({ username }) => ({ url: `/profiles/${username}` }),
        }),
    }),
});

export const { useGetProfileQuery } = profileApi;
