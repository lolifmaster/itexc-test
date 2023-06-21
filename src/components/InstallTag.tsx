import AppLogo from "../assets/AppStoreLogo.svg";
import GoogleStore from "../assets/GooglePlayLogo.svg";
import { Icons } from "./Icons";

const InstallTag = () => {
  return (
    <div className="w-screen bg-darkBlue">
      <div className="mx-auto flex w-4/5 flex-col items-center md:flex-row">
        <div className="flex flex-1 basis-3/5 flex-col py-16 text-center text-slate-50 md:text-start">
          <h2 className=" font-sora text-4xl font-semibold leading-normal ">
            Get the app
          </h2>
          <p className="mb-4 text-2xl">
            Rated 4.9 out of 5 by more than 150k reviewers.
          </p>
          <p className="max-w-lg">
            Register in the app and be ready to see a doctor, therapist or
            psychiatrist anytime, anywhere. Available for iPhone and Android.
          </p>
        </div>
        <div className="flex flex-1 basis-2/5 flex-col items-center gap-8 text-white md:items-end">
          <div className="grid h-12 grid-cols-2 gap-2">
            <img
              src={AppLogo}
              className="h-full place-self-end"
              alt="app store"
            />
            <img src={GoogleStore} className="h-full" alt="google play" />
          </div>
          <p className="flex items-center gap-2 text-2xl text-slate-50">
            4.9{" "}
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Icons.star key={i} className="inline-block fill-slate-50" />
              ))}
          </p>
          <p className=" font-thin text-slate-50">190.7k Rating</p>
        </div>
      </div>
    </div>
  );
};

export default InstallTag;
