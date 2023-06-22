import Img1 from "../assets/about-img1.jpg";
import { Icons } from "../components/Icons";

const AboutHealth = () => {
  return (
    <div className="flex w-full flex-col-reverse items-center gap-20 md:flex-row md:justify-between md:gap-12">
      <div className="flex flex-col items-center gap-12 md:items-start">
        <h1 className="max-w-lg text-center text-4xl font-extrabold capitalize md:max-w-xl md:text-left md:text-5xl md:font-normal">
          About{" "}
          <span className="relative inline-block pr-4 font-semibold text-darkBlue md:pr-2">
            Healthy 24.
            <Icons.plus className="absolute right-0 top-0 h-5 w-5" />
          </span>
        </h1>
        <div className="flex flex-col gap-8">
          <p className="max-w-xl text-center md:text-start">
            With 24/7 access to online doctors, psychiatrists, psychologists,
            therapists and other medical experts, care is always available,
            anytime and anywhere. Select and see your favorite providers again
            and again, right from your smartphone, tablet or computer.
          </p>
          <p className="max-w-xl text-center md:text-start">
            Better yet, Doctor On Demand is a covered benefit for over 98
            million Americans by their health plan or employer. It’s free to
            sign up and easy to check your coverage when you register.
          </p>
        </div>
      </div>
      <div className=" relative h-64 w-80  md:h-[24rem] md:w-[17rem] lg:h-[27rem] lg:w-[22rem]">
        <img
          src={Img1}
          alt="illustration"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3/4 bg-lightBlue px-2 py-4 md:left-0 md:-translate-x-1/2 md:translate-y-1/3 lg:px-4 lg:py-8">
          <Icons.logo2 className="md:h-22 md:w-24 lg:h-auto lg:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutHealth;
