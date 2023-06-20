import { Star } from "lucide-react";
import Img2 from "../assets/img-hug.png";
import ListReasons from "./ListReasons";

const FeaturesHealth = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-24 md:flex-row">
      <div className="flex-1 basis-2/5">
        <img
          src={Img2}
          alt="illustration"
          className="h-full w-full object-cover md:object-contain"
        />
      </div>
      <div className="flex flex-1 basis-3/5 flex-col items-center gap-6 md:items-start">
        <h1 className="max-w-lg text-center text-4xl font-extrabold capitalize md:max-w-xl md:text-left md:text-5xl md:font-normal">
          Why choosing{" "}
          <span className="relative inline-block pr-2 font-semibold text-darkBlue">
            Healthy 24 . <Star className="absolute right-0 top-0 text-orange" />
          </span>
        </h1>
        <div className="flex flex-col gap-8">
          <p className="max-w-xl text-center md:text-left">
            Meet with an urgent care doctor in minutes, 24/7.Schedule a session
            with a <span className="underline">therapist or psychiatrist</span>{" "}
            this week.
          </p>
          <ListReasons />
        </div>
      </div>
    </div>
  );
};

export default FeaturesHealth;
