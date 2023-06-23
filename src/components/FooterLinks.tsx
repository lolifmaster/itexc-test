const FooterLinks = () => {
  return (
    <div className="flex h-52 flex-col justify-between">
      <div className="flex items-start gap-12">
        <div className="flex flex-col gap-1 ">
          <h2 className="mb-2 text-center font-extrabold md:text-left">
            Help center
          </h2>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-left"
          >
            Frequently Asked Questions
          </a>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-left"
          >
            Driver Training Platform
          </a>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-left"
          >
            Support
          </a>
        </div>
        <div className="flex flex-col gap-1 ">
          <h2 className="mb-2 text-center font-extrabold md:text-left">
            Healthy 24
          </h2>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-left"
          >
            C.G.U
          </a>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-left"
          >
            Privacy
          </a>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-left"
          >
            Press
          </a>
          <a
            href="#"
            className=" text-center text-[#685879] transition-colors hover:text-black md:text-left"
          >
            Partnership
          </a>
        </div>
      </div>
      <p className="text-sm text-[#685879]">Healthy 2023 &copy;</p>
    </div>
  );
};

export default FooterLinks;
