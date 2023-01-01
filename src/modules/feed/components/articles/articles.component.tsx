import { FC, Key } from "react";

import { Tag } from "../../../../common";
import { ArticlesToggle } from "../articles-toggle";
import { Article } from "../article";

import { useGetGlobalFeedQuery, useGetTagsQuery } from "../../api/repository";

interface IArticleProps {}

export const Articles: FC<IArticleProps> = ({}) => {
  const { data, error, isLoading } = useGetGlobalFeedQuery("");
  const { data: tagsData, error: tagsError, isLoading: agsIsLoading } = useGetTagsQuery("");

  if (isLoading) {
    return (
      <div className="text-center font-titillium text-xl font-semibold text-black">
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center font-titillium text-xl font-semibold text-red-500">
        <span>Something went wrong...</span>
      </div>
    );
  }

  console.log("data", data);
  console.log("data", tagsData);
  return (
    <section className="container flex justify-between">
      <div className="w-8/12">
        <ArticlesToggle />

        <div className="space-y-5">
          {data?.articles.map((article: any) => (
            <Article key={article.slug} {...article} />
          ))}
        </div>
      </div>

      <section>
        <h5 className="text-lg font-semibold">Popular Tags</h5>

        <div className="mt-4 flex max-w-xs flex-wrap gap-2">
          {tagsData?.tags.map((tag: string, index: Key) => (
            <Tag key={tag} link="/" color="dark">
              {tag}
            </Tag>
          ))}
        </div>
      </section>
    </section>
  );
};
