import { Icons } from "./Icons";
import HospitalImage from "../assets/hospital.jpg";

const HospitalRating = () => {
  return (
    <div className="relative flex-1">
      <img
        src={HospitalImage}
        alt="illustration"
        className="h-full w-full object-cover md:object-contain"
      />
      <div className="absolute bottom-0 left-1/2 z-10 flex w-fit -translate-x-1/2 translate-y-2/3 gap-3 bg-slate-50 p-3 shadow-[0px_0px_100px_-20px] shadow-lightBlue xl:right-0 xl:-translate-y-2/3 xl:translate-x-[60%]">
        <Icons.hand className="bg-clip-text" />
        <div>
          <p className="text-md whitespace-nowrap">Quality over Quantity</p>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Icons.star
                key={i}
                className="inline-block h-4 w-4 fill-yellow-300 stroke-yellow-300"
              />
            ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-lightBlue bg-opacity-20 shadow shadow-lightBlue blur-md"></div>
    </div>
  );
};

export default HospitalRating;
