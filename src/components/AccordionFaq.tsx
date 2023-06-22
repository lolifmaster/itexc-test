import { Accordion } from "../components/ui/Accordion";
import FaQItem from "./FaQItem";

export function AccordionFaq() {
  return (
    <Accordion
      type="single"
      className="flex w-full flex-col gap-4"
      defaultValue="value 0"
    >
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <FaQItem key={i} index={i} />
        ))}
    </Accordion>
  );
}
