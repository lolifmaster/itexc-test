import { FC } from "react";
import { Icons } from "./Icons";

interface ReasonProps {
  content: string;
}

const Reason: FC<ReasonProps> = ({ content }) => {
  return (
    <p className="flex gap-4">
      {" "}
      <Icons.check className="text-orange" /> {content}
    </p>
  );
};

export default Reason;
