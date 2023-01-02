import { FC, Key, useState } from "react";
import ReactPaginate from "react-paginate";

import { Tag } from "../../../../common";

import { ArticlesToggle } from "../articles-toggle";
import { ArticlesList } from "./articles-list.component";

import { useGetGlobalFeedQuery, useGetTagsQuery } from "../../api/repository";
import { FEED_PAGE_SIZE } from "../../../../utils";
import { useSearchParams } from "react-router-dom";
import { serializeSearchParams } from "../../../../utils/router";

interface IArticleProps {}

export const Articles: FC<IArticleProps> = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(
    searchParams.get("page") ? Number(searchParams.get("page")) : 0,
  );

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPage(selected);
    setSearchParams(serializeSearchParams({ page: String(selected) }));
  };

  console.log("page", page);

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({ page });
  const { data: tagsData, error: tagsError, isLoading: tagsIsLoading } = useGetTagsQuery("");

  if (isLoading || isFetching) {
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

        <section className="pb-10">
          <ArticlesList articles={data?.articles || []} />

          <ReactPaginate
            previousLabel={null}
            nextLabel={null}
            className="mt-7 flex items-center space-x-1 text-lg"
            pageClassName="flex items-center justify-center px-4 py-2 text-blog-green rounded-md transition-all border border-transparent hover:border-text"
            activeClassName="font-semibold bg-blog-green text-text"
            pageCount={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
            pageRangeDisplayed={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
            onPageChange={handlePageClick}
            forcePage={page}
          />
        </section>
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
