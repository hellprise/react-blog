import clsx from 'clsx';
import { DateTime } from 'luxon';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Tag } from '../../../../common';
import { getDate } from '../../../../utils/getDate';
import { Article as ArticleType } from '../../api/dto/global-feed.in';
import { Author } from './author.component';

interface IArticleProps extends ArticleType {}

export const Article: FC<IArticleProps> = ({
    favoritesCount,
    author,
    createdAt,
    description,
    title,
    slug,
    tagList,
}) => {
    const [likes, setLikes] = useState<number>(favoritesCount);

    const addLike = () => {
        if (likes !== favoritesCount + 1) {
            setLikes((prev) => prev + 1);
        }
    };

    console.log('author', author);

    return (
        <article className="border-t border-t-black/10 py-6">
            <div className="mb-5 flex items-end justify-between">
                <Author author={author} createdAt={createdAt} />

                <Button
                    className={clsx({
                        'opacity-60': likes === favoritesCount + 1,
                    })}
                    onClick={addLike}
                    color="article"
                    link="/"
                >
                    <img
                        src="/heart.svg"
                        width={20}
                        height={20}
                        alt="heart icon"
                    />

                    <p>{likes}</p>
                </Button>
            </div>

            <div className="space-y-1">
                <Link
                    to={`/blog/${encodeURIComponent(slug)}`}
                    className="text-2xl font-semibold"
                >
                    {title}
                </Link>

                <p className="w-[96%] text-text/30">{description}</p>
            </div>

            <div className="mt-5 flex items-center justify-between text-sm">
                <Link to={`/${slug}`} className="text-text/30">
                    Read more...
                </Link>

                <div className="flex space-x-2">
                    {tagList.map((tag: string) => (
                        <Tag key={tag} link={tag}>
                            {tag}
                        </Tag>
                    ))}
                </div>
            </div>
        </article>
    );
};
