import DoctorsImg from "../assets/doctors.png";

const InstallTag = () => {
  return (
    <div className="bg-[#EBEBEB] pt-8">
      <div className="mx-auto flex w-4/5 flex-col items-center gap-4 px-2 pb-16 text-center md:w-1/2">
        <h2 className="max-w-lg text-xl font-semibold md:text-2xl lg:text-4xl">
          Our secret to great virtual care is great doctors
        </h2>
        <p className="opacity-70">
          Board-certified | Top 5% of medical specialists in the world | +90%
          satisfaction rating
        </p>
      </div>
      <div className="relative">
        <img
          src={DoctorsImg}
          alt="doctors"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default InstallTag;
