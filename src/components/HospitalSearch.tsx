import Button from "./Button";
import HospitalRating from "./HospitalRating";

const HospitalSearch = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-24 px-2 md:flex-row md:px-8">
      <HospitalRating />

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
