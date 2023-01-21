import { GlobalFeedIn } from './dto/global-feed.in';

export const transformResponse = (response: GlobalFeedIn) => {
    return {
        articles: response.articles || [],
        articlesCount: response.articlesCount || 0,
    };
};
