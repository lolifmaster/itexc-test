import BackgroundImage from "../assets/bg-hero.jpg";
import Features from "../components/Features";
import { useState } from "react";
import { cn } from "../lib/utils";
import Loading from "../components/Loading";
import { Button } from "../components/ui/Button";
const Hero = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <section
        id="home"
        className={cn(
          "relative flex h-[600px] w-screen flex-col justify-between from-slate-50 from-30% to-transparent to-60% pt-16 md:bg-gradient-to-r",
          {
            hidden: isLoading,
          }
        )}
      >
        <div className="mx-auto my-10 flex flex-1 flex-col items-center gap-6 px-2 md:w-[1440px]  md:items-start">
          <h1 className="max-w-xl text-center text-xl font-extrabold capitalize md:text-left md:text-5xl md:font-normal">
            Feel Better about Finding{" "}
            <span className="font-semibold text-[#0B65A7]">Healthcare</span>
          </h1>
          <p className="max-w-sm text-center md:max-w-xl md:text-left">
            Healththy 24 Online ranks highest in telehealth satisfaction among
            direct-to-consumer brands.
          </p>
          <button
            className="border-brightRed focus:ring-brightRed w-fit
               bg-[#F27219] px-6 py-3 text-slate-100 transition hover:bg-[#a45217] hover:shadow-md"
          >
            Get Started
          </button>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full md:w-3/4">
          <img
            className="hidden h-full w-full object-fill md:block md:object-cover"
            src={BackgroundImage}
            alt="illustration"
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <Features />
      </section>
      <Loading isLoading={isLoading} />
    </>
  );
};

export default Hero;
