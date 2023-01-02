import React, { Key } from "react";

import { Tag } from "../../../../common";

import { LoadingComponent } from "../loading/loading.component";

import { useGetTagsQuery } from "../../api/repository";
import { ErrorComponent } from "../error/error.component";

export const TagsCloud = () => {
  const { data, error, isLoading } = useGetTagsQuery("");

  if (isLoading) {
    return <LoadingComponent size="s" text="Loading" />;
  }

  if (error) {
    return <ErrorComponent size="s" text="Something went wrong" />;
  }

  return (
    <div className="mt-4 flex max-w-xs flex-wrap gap-2">
      {data?.tags.map((tag: string, index: Key) => (
        <Tag key={tag} link={tag} color="DARK">
          {tag}
        </Tag>
      ))}
    </div>
  );
};
