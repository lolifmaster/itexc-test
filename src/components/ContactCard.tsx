import { FC } from "react";
import { LucideProps } from "lucide-react";
import { cn } from "../lib/utils";

interface ContactCardProps {
  title: string;
  content: string;
  Icon: (props: LucideProps) => JSX.Element;
  className?: string;
}

const ContactCard: FC<ContactCardProps> = ({
  title,
  content,
  Icon,
  className,
}) => {
  return (
    <>
      <div
        className={cn("flex gap-4 whitespace-nowrap border-b-2 pb-6 pr-12", {
          className,
        })}
      >
        <Icon className={className} />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
