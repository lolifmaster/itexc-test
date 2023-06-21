import HospitalImage from "../assets/hospital.jpg";
import Button from "./Button";
import { Icons } from "./Icons";

const HospitalSearch = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-24 px-2 md:flex-row md:px-8">
      <div className="relative flex-1">
        <img
          src={HospitalImage}
          alt="illustration"
          className="h-full w-full object-cover md:object-contain"
        />
        <div className="absolute bottom-0 left-1/2 z-10 flex w-fit -translate-x-1/2 translate-y-2/3 gap-3 bg-slate-50 p-3 shadow-[0px_0px_100px_-20px] shadow-lightBlue lg:right-0 lg:-translate-y-2/3 lg:translate-x-1/4 xl:translate-x-[60%]">
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
      <div className="flex flex-1 flex-col items-center gap-6 md:items-start">
        <h2 className="max-w-lg text-center text-3xl font-extrabold text-darkBlue md:max-w-xl md:text-left md:text-4xl md:font-normal">
          Search the Nearest hospital from you
        </h2>
        <div className="flex flex-col items-center gap-8 md:items-start">
          <p className="max-w-lg text-center md:text-left">
            Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
            kesehatan dengan fungsi menyediakan pelayanan paripurna
            (komprehensif).
          </p>
          <Button className="w-fit px-12 ">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default HospitalSearch;
