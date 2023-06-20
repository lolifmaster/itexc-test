import { FC } from "react";
import { DropdownMenuItem } from "../ui/DropDownMenu";

interface LinkMobileProps {
  name: string;
  href?: string;
}

const LinkMobile: FC<LinkMobileProps> = ({ name, href }) => {
  return (
    <DropdownMenuItem asChild className="cursor-pointer hover:bg-slate-200">
      <a
        className="whitespace-nowrap transition-colors hover:text-slate-600"
        href={href || "#"}
      >
        {name}
      </a>
    </DropdownMenuItem>
  );
};

export default LinkMobile;
