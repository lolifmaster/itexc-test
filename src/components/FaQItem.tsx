import { FC } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion";
interface FaQItemProps {
  index: number;
}

const FaQItem: FC<FaQItemProps> = ({ index }) => {
  return (
    <AccordionItem value={`value ${index}`} defaultChecked={index === 0}>
      <AccordionTrigger className="p-7 transition-colors data-[state=open]:bg-black data-[state=open]:text-slate-50">
        <p className="font-roboto font-semibold">
          <span className="text-orange">0{index + 1}: </span> Question text goes
          here
        </p>
      </AccordionTrigger>
      <AccordionContent>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaQItem;
