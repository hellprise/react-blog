import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetProfileQuery } from "../../feed/api/repository";
import { ErrorComponent } from "../../feed/components/error/error.component";
import { LoadingComponent } from "../../feed/components/loading/loading.component";

import { ProfileBanner } from "../components";

interface IProfilePageProps {}

export const ProfilePage: FC<IProfilePageProps> = () => {
  const { profile } = useParams();

  const { data, error, isLoading } = useGetProfileQuery(profile || "");

  if (isLoading) {
    return <LoadingComponent size="s" text="Loading" />;
  }

  if (error || !data) {
    return <ErrorComponent size="s" text="Something went wrong" />;
  }

  console.log("data", data);

  return (
    <section>
      <div className="bg-text/10">
        <div className="container">
          <ProfileBanner data={data?.profile} />
        </div>
      </div>
    </section>
  );
};
