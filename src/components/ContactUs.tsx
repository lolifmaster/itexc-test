import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { Icons } from "./Icons";
import Map from "./Map";

const ContactUs = () => {
  return (
    <section id="contact">
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col gap-12 px-2 md:flex-row md:items-center md:px-8">
        <div className="flex basis-1/2 flex-col gap-6">
          <h2 className="text-center text-3xl font-semibold text-darkBlue md:text-left">
            Contact us
          </h2>
          <p className="text-center font-roboto text-[16px] md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <ContactForm />
        </div>
        <div className="flex basis-1/2 items-center justify-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-center text-2xl font-semibold text-darkBlue md:text-start">
              Available also on :
            </h2>
            <ContactCard
              Icon={Icons.mail}
              title="Email"
              content="Healthy 24.@Email.com"
            />
            <ContactCard
              Icon={Icons.location}
              title="Address"
              content="Lorem ipsum dolor sit amet, consectetur 33"
            />
            <ContactCard
              Icon={Icons.phone}
              title="Phone Number"
              content="+1 (555) 000-0000"
            />
          </div>
        </div>
      </div>
      <Map />
    </section>
  );
};

export default ContactUs;
