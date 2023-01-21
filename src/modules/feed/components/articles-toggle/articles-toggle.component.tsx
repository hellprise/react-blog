import clsx from 'clsx';
import { FC } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

interface FeedToggleitem {
    title: string;
    link: string;
}

interface IArticlesToggleProps {
    defaultTitle?: string;
    defaultLink?: string;
    additionalItems?: FeedToggleitem[];
}

export const ArticlesToggle: FC<IArticlesToggleProps> = ({
    additionalItems,
    defaultLink = '/',
    defaultTitle = 'Global Feed',
}) => {
    const [searchParams] = useSearchParams();

    const tag = searchParams.get('tag');

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        clsx('transition-all py-2 px-4 text-blog-green duration-[350ms]', {
            'border-b-blog-green font-semibold border-b-2': !tag && isActive,
            'hover:text-black/60': tag || !isActive,
        });

    return (
        <ul className="flex h-[36px] items-center space-x-5">
            <li>
                <NavLink className={navLinkClasses} to={defaultLink} end>
                    {defaultTitle}
                </NavLink>
            </li>

            {additionalItems &&
                additionalItems.map(({ title, link }) => (
                    <li key={link}>
                        <NavLink className={navLinkClasses} to={link}>
                            {title}
                        </NavLink>
                    </li>
                ))}

            {tag && (
                <li>
                    <span className="border-b-2 border-b-blog-green py-2 px-4 font-semibold text-blog-green transition-all duration-[350ms]">
                        {tag}
                    </span>
                </li>
            )}
        </ul>
    );
};
