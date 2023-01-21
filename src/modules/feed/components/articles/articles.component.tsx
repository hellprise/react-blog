import { FC } from 'react';
import ReactPaginate from 'react-paginate';

import { FEED_PAGE_SIZE } from '../../../../utils';
import { FeedData } from '../../api/repository';
import { usePageParam } from '../../hooks/use-page-param.hook';
import { ErrorComponent } from '../error/error.component';
import { LoadingComponent } from '../loading/loading.component';
import { ArticlesList } from './articles-list.component';

interface IArticleProps {
    isLoading: boolean;
    isFetching?: boolean;
    error: unknown;
    data?: FeedData;
}

export const Articles: FC<IArticleProps> = ({
    data,
    error,
    isFetching,
    isLoading,
}) => {
    const { page, setPage } = usePageParam();

    const handlePageClick = ({ selected }: { selected: number }) => {
        setPage({ page: selected });
    };

    if (isLoading || isFetching) {
        return <LoadingComponent text="Loading articles" />;
    }

    if (error) {
        return <ErrorComponent text="Something went wrong" />;
    }

    if (!data?.articles.length) {
        return (
            <section className="mt-10">
                <ErrorComponent size="s" text="No articles are here... yet" />
            </section>
        );
    }

    return (
        <section className="pb-10">
            <ArticlesList articles={data?.articles || []} />

            <ReactPaginate
                previousLabel={null}
                nextLabel={null}
                className="mt-7 flex items-center space-x-1 text-lg"
                pageClassName="flex items-center justify-center px-4 py-2 text-blog-green rounded-md transition-all border border-transparent hover:border-text"
                activeClassName="font-semibold bg-blog-green text-text"
                pageCount={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
                pageRangeDisplayed={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
                onPageChange={handlePageClick}
                forcePage={page}
            />
        </section>
    );
};
