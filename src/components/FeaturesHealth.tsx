import Img2 from "../assets/img-hug.png";
import { Icons } from "./Icons";
import LazyImage from "./LazyImage";
import ListReasons from "./ListReasons";

const FeaturesHealth = () => {
  return (
    <div className="relative flex flex-col items-center justify-between gap-12 lg:flex-row lg:justify-start xl:gap-24">
      <LazyImage
        divClass="h-64 w-80 md:h-[27rem] md:w-[30rem] lg:h-80 lg:w-96 xl:h-[27rem] xl:w-[30rem]"
        src={Img2}
        alt="illustration"
        className="h-full w-full object-cover md:object-contain"
      />
      <div className="flex flex-col items-center gap-6 md:items-start">
        <h1 className="max-w-lg text-center text-4xl font-extrabold capitalize md:max-w-xl md:text-left md:font-normal">
          Why choosing{" "}
          <span className="relative inline-block pr-4 font-semibold text-darkBlue">
            Healthy 24.{" "}
            <Icons.plus className="absolute right-0 top-0 h-5 w-5" />
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
      <Icons.medicale className="absolute left-0 top-1/4 -z-10 -translate-x-2/3 -translate-y-1/2 lg:top-1/2" />
    </div>
  );
};

export default FeaturesHealth;
