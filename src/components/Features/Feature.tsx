import { FC, JSXElementConstructor } from "react";
import { cn } from "../../lib/utils";

interface FeatureProps {
  Icon: JSXElementConstructor<any>;
  content: string;
  primary?: boolean;
}

const Feature: FC<FeatureProps> = ({ Icon, content, primary = false }) => {
  let newText = content.split("\n");
  return (
    <div
      className={cn(
        "flex h-full w-full flex-1 flex-col items-center justify-center p-10 py-5",
        {
          "box-content border-l-4 border-orange bg-lightBlue p-0 md:border-b-4 md:border-l-0":
            primary,
        }
      )}
    >
      <Icon className="h-12 w-12 text-white" />
      {newText.map((text, index) => (
        <p className="text-center text-white" key={index}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default Feature;
