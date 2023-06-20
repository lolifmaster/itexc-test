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
      className={cn("grid h-screen place-content-center", {
        hidden: !isLoading,
        className,
      })}
    >
      <Icons.logo className="h-48 w-48 animate-pulse" />
    </div>
  );
};

export default Loading;
