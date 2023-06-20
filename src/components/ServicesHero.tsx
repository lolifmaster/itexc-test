import ServicesImg from "../assets/services.png";

const ServicesHero = () => {
  return (
    <div className="mx-auto flex w-4/5 flex-col-reverse items-center md:flex-row">
      <div className="flex flex-1 basis-3/5 flex-col items-center gap-6 md:items-start md:text-start">
        <h2 className="text-2xl font-semibold md:text-4xl">
          Find The Best doctor you need
        </h2>
        <p className="max-w-lg">
          From rashes to colds, stress management to diabetes management,
          individual treatment plans are created around you. Our medical and
          mental health providers work together, keeping your personal journey
          protected and connected.
        </p>
        <button className=" border border-lightBlue px-12 py-3 text-darkBlue transition hover:bg-lightBlue hover:text-slate-50 hover:shadow-xl">
          Get started
        </button>
      </div>
      <div className="flex-1 basis-2/5">
        <img src={ServicesImg} alt="our services" />
      </div>
    </div>
  );
};

export default ServicesHero;
