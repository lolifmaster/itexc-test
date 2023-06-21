import HospitalImage from "../assets/hospital.jpg";
import Button from "./Button";

const HospitalSearch = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-24 px-2 md:flex-row md:px-8">
      <div className="relative flex-1">
        <img
          src={HospitalImage}
          alt="illustration"
          className="h-full w-full object-cover md:object-contain"
        />
        <div className="absolute inset-0 bg-lightBlue bg-opacity-20 shadow shadow-lightBlue blur-md"></div>
      </div>
      <div className="flex flex-1 flex-col items-center gap-6 md:items-start">
        <h2 className="max-w-lg text-center text-3xl font-extrabold capitalize text-darkBlue md:max-w-xl md:text-left md:text-4xl md:font-normal">
          Search the Nearest hospital from you
        </h2>
        <div className="flex flex-col gap-8">
          <p className="max-w-lg text-center md:text-left">
            Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
            kesehatan dengan fungsi menyediakan pelayanan paripurna
            (komprehensif).
          </p>
          <Button className="px-12">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default HospitalSearch;
