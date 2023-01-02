import { FC, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

import { ArticlesToggle } from "../articles-toggle";
import { ArticlesList } from "./articles-list.component";

import { useGetGlobalFeedQuery } from "../../api/repository";

import { FEED_PAGE_SIZE } from "../../../../utils";
import { serializeSearchParams } from "../../../../utils/router";
import { TagsCloud } from "../tags-cloud/tags-cloud.component";
import { LoadingComponent } from "../loading/loading.component";
import { ErrorComponent } from "../error/error.component";

interface IArticleProps {}

export const Articles: FC<IArticleProps> = () => {
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

  if (isLoading || isFetching) {
    return <LoadingComponent text="Loading articles" />;
  }

  if (error) {
    return <ErrorComponent text="Something went wrong" />;
  }

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

        <TagsCloud />
      </section>
    </section>
  );
};
