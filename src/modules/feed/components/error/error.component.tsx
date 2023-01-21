import clsx from 'clsx';
import { FC } from 'react';

type LoadingTextSize = 's' | 'm' | 'l';

interface IErrorComponentProps {
    text: string;
    size?: LoadingTextSize;
}

export const ErrorComponent: FC<IErrorComponentProps> = ({
    text,
    size = 'l',
}) => {
    return (
        <div className="text-center font-titillium font-semibold text-red-500">
            <span
                className={clsx('error', {
                    'text-xl': size === 's',
                    'text-2xl': size === 'm',
                    'text-3xl': size === 'l',
                })}
            >
                {text}
            </span>
        </div>
    );
};
