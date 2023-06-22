import { AccordionFaq } from "../components/AccordionFaq";
import CardFaq from "../components/CardFaq";
import { Icons } from "../components/Icons";

const Faq = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-2  py-24  md:px-8  ">
      <h2 className="mb-4 text-center text-4xl font-bold lg:text-start">
        <Icons.chat className="inline-block" /> FAQ
      </h2>
      <div className="flex w-full flex-col gap-16 lg:flex-row xl:gap-32 ">
        <div className="flex flex-col items-center lg:w-3/5 lg:items-start">
          <p className="max-w-3xl flex-grow text-center lg:text-start">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat."
          </p>
          <AccordionFaq />
        </div>
        <CardFaq />
      </div>
    </div>
  );
};

export default Faq;
