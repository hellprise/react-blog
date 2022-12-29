import { FC } from "react";
import { Link } from "react-router-dom";

import { Button, Tag } from "../../../../common";

interface IArticleProps {}

export const Article: FC<IArticleProps> = ({}) => {
  return (
    <section className="container flex justify-between">
      <div className="w-8/12 space-y-5">
        <section className="border-t border-t-black/10 py-6">
          <div className="mb-5 flex items-end justify-between">
            <div className="flex items-center">
              <img
                className="rounded-full"
                width={40}
                height={40}
                src="https://api.realworld.io/images/demo-avatar.png"
                alt="author avatar"
              />

              <div className="ml-2 flex flex-col">
                <Link to={"/"} className="font-semibold text-blog-green">
                  author
                </Link>

                <div className="flex items-center space-x-1">
                  <img src="/calendar.svg" width={20} height={20} alt="calendar icon" />

                  <span className="text-black/30">December 9, 2022</span>
                </div>
              </div>
            </div>

            <Button color="article" link="/">
              <img src="/heart.svg" width={20} height={20} alt="heart icon" />

              <p>117</p>
            </Button>
          </div>

          <div className="space-y-1">
            <Link to={"/"} className="text-2xl font-semibold">
              Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!
            </Link>

            <p className="w-[96%] text-text/30">
              Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem
              natus totam atque cumque. Sint dolorem facere non.
            </p>
          </div>

          <div className="mt-5 flex items-center justify-between text-sm">
            <button className="text-text/30">Read more...</button>

            <div className="flex space-x-2">
              <Tag link="/">tag</Tag>
              <Tag link="/">tag23</Tag>
              <Tag link="/">tag111</Tag>
            </div>
          </div>
        </section>
      </div>

      <section>
        <h5 className="text-lg font-semibold">Popular Tags</h5>

        <div className="mt-4 flex flex-wrap gap-2">
          <Tag link="/" color="dark">
            123
          </Tag>
          <Tag link="/" color="dark">
            123er
          </Tag>
          <Tag link="/" color="dark">
            1
          </Tag>
          <Tag link="/" color="dark">
            123wer
          </Tag>
          <Tag link="/" color="dark">
            123f
          </Tag>
          <Tag link="/" color="dark">
            123
          </Tag>
        </div>
      </section>
    </section>
  );
};
