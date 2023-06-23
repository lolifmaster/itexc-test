import BackgroundImage from "../assets/bg-hero.jpg";
import Button from "../components/Button";
import Features from "../components/Features";
import { useMediaQuery } from "@uidotdev/usehooks";
import { FC, useEffect } from "react";

interface HomeProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: FC<HomeProps> = ({ setLoading }) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  useEffect(() => {
    if (isSmallDevice) {
      setLoading(false);
    }
  }, [isSmallDevice, setLoading]);
  return (
    <>
      <section
        id="home"
        className="relative min-h-[600px] from-slate-50 from-30% to-transparent pt-16 md:mb-48 md:bg-gradient-to-r md:to-100% lg:to-60%"
      >
        <div className="mx-auto my-10 flex flex-1 flex-col items-center gap-6 px-2 md:max-w-screen-xl md:items-start md:px-8">
          <h1 className="max-w-lg text-center text-4xl font-extrabold capitalize md:max-w-xl md:text-left md:text-5xl md:font-normal">
            Feel Better about Finding{" "}
            <span className="font-semibold text-[#0B65A7]">Healthcare</span>
          </h1>
          <p className="max-w-sm text-center md:max-w-xl md:text-left">
            Healththy 24 Online ranks highest in telehealth satisfaction among
            direct-to-consumer brands.
          </p>
          <Button> Get started</Button>
        </div>

        {/* Background image goes here (disabled in small screens) */}
        {!isSmallDevice && (
          <div className="absolute right-0 top-0 -z-10 h-full md:w-3/4">
            <img
              className="hidden h-full w-full object-fill md:block md:object-cover"
              src={BackgroundImage}
              alt="illustration"
              onLoad={() => setLoading(false)}
            />
          </div>
        )}
        <Features />
      </section>
    </>
  );
};

export default Hero;
