import Feature from "./Feature";
import { Icons } from "../Icons";

const Features = () => {
  return (
    <div className="mx-auto grid w-2/3 items-center bg-[#005EA3] md:absolute md:bottom-0 md:translate-x-1/4 md:translate-y-2/3 md:grid-cols-4">
      <Feature Icon={Icons.mail} content={"Online \n Consultation"} />
      <Feature
        Icon={Icons.mail}
        content={"Medical advice \n and second opinions"}
      />
      <Feature
        Icon={Icons.mail}
        content={"availability \n  24/7"}
        primary={true}
      />
      <Feature
        Icon={Icons.mail}
        content={"Health education \n and resources"}
      />
    </div>
  );
};

export default Features;
