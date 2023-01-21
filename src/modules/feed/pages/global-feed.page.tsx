import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Banner } from '../../../common';
import { useGetGlobalFeedQuery } from '../api/repository';
import { Articles, ArticlesToggle } from '../components';
import { TagsCloud } from '../components/tags-cloud/tags-cloud.component';
import { usePageParam } from '../hooks/use-page-param.hook';

interface IFeedPageProps {}

export const GlobalFeedPage: FC<IFeedPageProps> = () => {
    const [searchParams] = useSearchParams();
    const { page } = usePageParam();

    const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
        page,
        tag: searchParams.get('tag'),
    });
    return (
        <>
            <Banner />

            <section className="container flex justify-between pt-6">
                <div className="w-8/12 mx-auto">
                    <ArticlesToggle />
                    <Articles
                        data={data}
                        error={error}
                        isFetching={isFetching}
                        isLoading={isLoading}
                    />
                </div>

                <section>
                    <h5 className="text-lg font-semibold">Popular Tags</h5>

                    <TagsCloud />
                </section>
            </section>
        </>
    );
};
