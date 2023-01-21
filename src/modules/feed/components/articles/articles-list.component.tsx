import { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { FEED_PAGE_SIZE } from '../../../../utils';
import { Article as ArticleType } from '../../api/dto/global-feed.in';
import { Article } from '../article/article.component';

interface IArticlesListProps {
    articles: ArticleType[];
}

export const ArticlesList: FC<IArticlesListProps> = ({ articles }) => {
    return (
        <div className="space-y-5">
            {articles.map((article) => (
                <Article key={article.slug} {...article} />
            ))}
        </div>
    );
};
