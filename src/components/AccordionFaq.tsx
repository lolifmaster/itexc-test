import { Accordion } from "../components/ui/Accordion";
import FaQItem from "./FaQItem";

export function AccordionFaq() {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex h-full flex-1 flex-col justify-end"
    >
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <FaQItem key={i} index={i} />
        ))}
    </Accordion>
  );
}
