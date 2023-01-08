import { FC } from "react";
import { Button } from "../../../../common";
import { ProfileIn } from "../../../feed/api/dto/profile.in";

interface IProfileBannerProps {
  data: ProfileIn["profile"];
}

export const ProfileBanner: FC<IProfileBannerProps> = ({ data }) => {
  return (
    <section className="flex w-full flex-col justify-center py-14">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={data.image}
          alt={data.username}
          width={100}
          height={100}
          className="rounded-full object-cover"
        />

        <h2 className="h-[36px] cursor-pointer font-titillium text-2xl font-semibold transition-all hover:text-3xl hover:text-blog-green">
          {data.username}
        </h2>
      </div>

      <div className="mt-3 flex w-full justify-end">
        <Button link="/" color="transparent">
          <span>follow {data.username}</span>
        </Button>
      </div>
    </section>
  );
};
