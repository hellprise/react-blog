import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type TagColor = 'transparent' | 'dark';

interface ITagProps {
    children: string;
    color?: TagColor;
    link: string;
}

export const Tag: FC<ITagProps> = ({
    children,
    link,
    color = 'transparent',
}) => {
    return (
        <Link
            to={`/?tag=${link}`}
            className={clsx(
                'rounded-lg border border-text py-[3px] px-2 font-titillium text-sm transition-colors',
                {
                    'bg-text text-white hover:bg-transparent hover:text-text':
                        color === 'dark',
                    'hover:bg-text hover:text-white': color === 'transparent',
                },
            )}
        >
            {children}
        </Link>
    );
};
