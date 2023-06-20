import { FC, ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: FC<ButtonProps> = ({ ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "border-brightRed focus:ring-brightRed w-fit bg-orange px-6 py-3 text-slate-100 transition hover:bg-[#a45217] hover:shadow-md",
        props.className
      )}
    />
  );
};

export default Button;
