import { FC } from "react";
import { cn } from "../lib/utils";
import { Icons } from "./Icons";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
}

const Loading: FC<LoadingProps> = ({ isLoading, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn("h-[600px]", {
        hidden: !isLoading,
        className,
      })}
    >
      <Icons.logo className="mx-auto h-36 w-36 animate-pulse text-[#F26A0E]" />
    </div>
  );
};

export default Loading;
