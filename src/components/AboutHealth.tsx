import { Star } from "lucide-react";
import Img1 from "../assets/about-img1.jpg";
import { Icons } from "../components/Icons";

const AboutHealth = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
      <div className="flex flex-1 flex-col items-center gap-12 md:items-start">
        <h1 className="max-w-xl whitespace-nowrap text-center text-5xl font-extrabold capitalize md:text-left md:font-normal">
          About{" "}
          <span className="relative font-semibold text-darkBlue">
            Healthy 24 . <Star className="absolute right-0 top-0 text-orange" />
          </span>
        </h1>
        <div className="flex flex-col gap-8">
          <p className="max-w-xl text-center md:text-left">
            With 24/7 access to online doctors, psychiatrists, psychologists,
            therapists and other medical experts, care is always available,
            anytime and anywhere. Select and see your favorite providers again
            and again, right from your smartphone, tablet or computer.
          </p>
          <p className="max-w-xl text-center md:text-left">
            Better yet, Doctor On Demand is a covered benefit for over 98
            million Americans by their health plan or employer. It’s free to
            sign up and easy to check your coverage when you register.
          </p>
        </div>
      </div>
      <div className=" relative flex h-64 w-2/3 justify-end md:h-96 md:w-auto">
        <img
          src={Img1}
          alt="illustration"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/3 bg-lightBlue pb-6 pl-4 pt-2">
          <Icons.logo2 />
        </div>
      </div>
    </div>
  );
};

export default AboutHealth;
