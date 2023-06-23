import { Icons } from "./Icons";

const ScrollUpButton = () => {
  return (
    <a
      href="#"
      className="absolute bottom-0 right-0 mb-8 mr-8 rounded-full bg-blue-400 p-3 md:mb-16 md:mr-16"
    >
      <Icons.chevronUp className="h-8 w-8 text-white" />
    </a>
  );
};

export default ScrollUpButton;
