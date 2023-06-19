import Feature from "./Feature";
import { Icons } from "../Icons";

const Features = () => {
  return (
    <div className="mx-auto flex  w-2/3 flex-col items-center bg-[#005EA3] md:translate-y-3/4 md:flex-row">
      <Feature Icon={Icons.mail} content={"Online \n Consultation ."} />
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
