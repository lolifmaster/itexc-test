import Feature from "./Feature";
import { Icons } from "../Icons";

const Features = () => {
  return (
    <div className="mx-auto grid w-fit items-center bg-[#005EA3] md:absolute md:bottom-0 md:right-1/2 md:w-4/5 md:translate-x-1/2 md:translate-y-2/3 md:grid-cols-4 lg:w-2/3">
      <Feature Icon={Icons.consult} content={"Online \n Consultation"} />
      <Feature
        Icon={Icons.medical}
        content={"Medical advice \n and second opinions"}
      />
      <Feature
        Icon={Icons.time}
        content={"availability \n  24/7"}
        primary={true}
      />
      <Feature
        Icon={Icons.support}
        content={"Health education \n and resources"}
      />
    </div>
  );
};

export default Features;
