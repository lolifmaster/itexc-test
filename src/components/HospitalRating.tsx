import { Icons } from "./Icons";
import HospitalImage from "../assets/hospital.jpg";
import LazyImage from "./LazyImage";

const HospitalRating = () => {
  return (
    <LazyImage
      divClass="w-lg h-96 px-2 md:px-0 max-w-full  md:w-sm lg:w-lg lg:h-96  h-96 w-[32rem] object-cover md:h-72 md:w-[24rem] md:px-0 lg:h-96  lg:w-[32rem]"
      src={HospitalImage}
      alt="illustration"
      className="h-full w-full  object-cover"
    >
      <div className="absolute bottom-0 right-1/2 z-10 flex w-fit  translate-x-1/2 translate-y-1/2  gap-3 bg-slate-50 p-3 shadow-[0px_0px_100px_-20px] shadow-lightBlue lg:right-0 lg:-translate-y-1/2 lg:translate-x-1/4">
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
    </LazyImage>
  );
};

export default HospitalRating;
