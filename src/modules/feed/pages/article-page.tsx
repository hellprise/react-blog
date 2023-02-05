import React from 'react';

import { Button } from '../../../common';
import { Author } from '../components';

export const ArticlePage = () => {
    return (
        <article>
            <section className="bg-text/80 py-10 mb-10">
                <div className="container">
                    <h1 className="text-5xl text-white font-bold mb-5">
                        Try to transmit the HTTP card, maybe it will override
                        the multi-byte hard drive!
                    </h1>

                    <AuthorWithButtons />
                </div>
            </section>

            <section className="container">
              <div>
                {/* content */}
              </div>

              {/* [1,2,3].map((tag) => <Tag></Tag>) */}
            </section>

            <section className="container">
                <AuthorWithButtons />
            </section>
        </article>
    );
};

const AuthorWithButtons = () => {
    return (
        <section className="flex items-center gap-x-16">
            <Author author={} createdAt={} />

            <div className="flex items-center gap-x-2">
                <Button link="/" color="transparent">
                    <span>Follow Maksim Leokha</span>
                </Button>
                <Button link="/" color="article">
                    <img
                        src="/heart.svg"
                        width={20}
                        height={20}
                        alt="heart icon"
                    />
                    <span>Favorite (373)</span>
                </Button>
            </div>
        </section>
    );
};
