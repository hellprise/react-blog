import { DateTime } from 'luxon';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Author as AuthorType } from '../../api/dto/global-feed.in';

interface IAuthorProps {
    author: AuthorType;
    createdAt: string;
}

export const Author: FC<IAuthorProps> = ({ author, createdAt }) => {
    return (
        <div className="flex items-center">
            <img
                className="rounded-full"
                width={40}
                height={40}
                // src="https://api.realworld.io/images/demo-avatar.png"
                src={author.image}
                alt={author.username}
            />

            <div className="ml-2 flex flex-col">
                <Link
                    to={`/user/${encodeURIComponent(author.username)}`}
                    className="font-semibold text-blog-green"
                >
                    {author.username}
                </Link>

                <div className="flex items-center space-x-1">
                    <img
                        src="/calendar.svg"
                        width={20}
                        height={20}
                        alt="calendar icon"
                    />

                    <span className="text-black/30">
                        {DateTime.fromISO(createdAt).toLocaleString(
                            DateTime.DATE_FULL,
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};
