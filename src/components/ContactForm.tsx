// Would use formik or (react form hook with zod) but since its static lets use a simple form

import Button from "./Button";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-roboto text-[16px]">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          className="rounded-sm bg-slate-100 px-4 py-2 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-roboto text-[16px]">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email addresss"
          className="rounded-sm bg-slate-100 px-4 py-2 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-roboto text-[16px]">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder="Type your message.."
          className="resize-none rounded-sm bg-slate-100 px-4 py-2 outline-none"
        />
      </div>
      {/* submit button */}
      <Button className="px-12">Submit</Button>
    </form>
  );
};

export default ContactForm;
