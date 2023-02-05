import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './common';
import { GlobalFeedPage, ProfilePage } from './modules';
import { ArticlePage } from './modules/feed/pages/article-page';

interface AppProps {}

export const App: FC<AppProps> = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<GlobalFeedPage />} />
                <Route path="/user/:profile" element={<ProfilePage />} />
                <Route
                    path="/user/:profile/favorites"
                    element={<ProfilePage />}
                />
                <Route path="/blog/:slug" element={<ArticlePage />} />
            </Routes>
        </>
    );
};
