import BackgroundImage from "../assets/bg-hero.jpg";

const Hero = () => {
  return (
    <>
      <section className="relative h-[631px] w-screen from-white from-30% to-transparent to-60% py-16 md:bg-gradient-to-r">
        <div className="mx-auto mt-10 flex max-w-[1440px] flex-1 flex-col items-center gap-6  md:items-start">
          <h1 className="max-w-xl text-center text-xl capitalize md:text-left md:text-5xl">
            Feel Better about Finding{" "}
            <span className="font-semibold text-[#0B65A7]">Healthcare</span>
          </h1>
          <p className="max-w-xl text-center md:text-left">
            Healththy 24 Online ranks highest in telehealth satisfaction among
            direct-to-consumer brands.
          </p>
          <button
            className="border-brightRed w-fit bg-[#F27219]
               px-6 py-3 text-slate-100 transition "
          >
            Get Started
          </button>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full md:w-3/4">
          <img
            className="hidden h-full w-full object-fill md:block md:object-cover"
            src={BackgroundImage}
            alt="illustration"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
