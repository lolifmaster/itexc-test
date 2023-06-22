import DoctorImg from "../assets/doctor-hand.jpg";
import Button from "../components/Button";
import { Icons } from "../components/Icons";

const CardFaq = () => {
  return (
    <div className="flex h-full flex-col md:w-2/6">
      <div className="h-3/5">
        <img
          src={DoctorImg}
          alt="Doctor"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative flex flex-col gap-2  bg-lightBlue p-8 text-slate-50">
        <h2 className="text-2xl font-bold"> Still have a question?</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex items-center justify-between">
          <Button className="bg-slate-50 text-black hover:bg-slate-200 ">
            Contact Us
          </Button>
          <Icons.doctor className=" block stroke-slate-50 md:hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default CardFaq;
