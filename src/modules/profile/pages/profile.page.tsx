import { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Articles } from '../../feed';
import { useGetProfileFeedQuery } from '../../feed/api/repository';
import {
    ArticlesToggle,
    ErrorComponent,
    LoadingComponent,
} from '../../feed/components';
import { usePageParam } from '../../feed/hooks/use-page-param.hook';
import { useGetProfileQuery } from '../api/repository';
import { ProfileBanner } from '../components';

interface IProfilePageProps {}

export const ProfilePage: FC<IProfilePageProps> = () => {
    const { profile } = useParams<{ profile?: string }>();
    const { page } = usePageParam();
    const { pathname } = useLocation();

    const { data, error, isLoading } = useGetProfileQuery({
        username: profile!,
    });
    const {
        data: feedData,
        error: feedError,
        isLoading: feedIsLoading,
    } = useGetProfileFeedQuery({
        author: profile!,
        page: page,
        isFavorite: pathname.includes(
            `/user/${encodeURIComponent(profile!)}/favorites`,
        ),
    });

    if (isLoading || feedIsLoading) {
        return <LoadingComponent size="s" text="Loading" />;
    }

    if (error || !data || feedError || !feedData) {
        return <ErrorComponent size="s" text="Something went wrong" />;
    }

    return (
        <section>
            <div className="bg-text/10">
                <div className="container">
                    <ProfileBanner data={data!.profile} />
                </div>
            </div>

            <section className="container flex justify-between pt-6">
                <div className="w-8/12 mx-auto">
                    <ArticlesToggle
                        defaultLink={`/user/${encodeURIComponent(profile!)}`}
                        defaultTitle="My Articles"
                        additionalItems={[
                            {
                                title: 'Favorited Articles',
                                link: `/user/${encodeURIComponent(
                                    profile!,
                                )}/favorites`,
                            },
                        ]}
                    />

                    <Articles
                        data={feedData}
                        error={feedError}
                        isLoading={feedIsLoading}
                    />
                </div>
            </section>
        </section>
    );
};
