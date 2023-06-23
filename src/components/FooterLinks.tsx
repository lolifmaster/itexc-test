const FooterLinks = () => {
  return (
    <div className="flex h-64 flex-col justify-between md:h-52">
      <div className="flex justify-center gap-12 md:items-start">
        <div className="flex flex-1 flex-col gap-2 md:flex-auto md:gap-1 ">
          <h2 className="mb-4 text-center font-extrabold md:mb-2 md:text-start">
            Help center
          </h2>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-start"
          >
            Frequently Asked Questions
          </a>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-start"
          >
            Driver Training Platform
          </a>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-start"
          >
            Support
          </a>
        </div>
        <div className="flex flex-1 flex-col gap-2 md:flex-auto md:gap-1 ">
          <h2 className="mb-4 text-center font-extrabold md:mb-2 md:text-start">
            Healthy 24
          </h2>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-start"
          >
            C.G.U
          </a>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-start"
          >
            Privacy
          </a>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-start"
          >
            Press
          </a>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-start"
          >
            Partnership
          </a>
        </div>
      </div>
      <p className="text-center text-sm text-[#685879] md:text-start">
        Healthy 2023 &copy;
      </p>
    </div>
  );
};

export default FooterLinks;
