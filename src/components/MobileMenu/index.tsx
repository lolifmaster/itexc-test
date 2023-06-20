import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "../ui/DropDownMenu";
import { Icons } from "../Icons";
import LinkMobile from "./LinkMobile";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Icons.menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52 bg-white">
          <DropdownMenuLabel>
            <Icons.service />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <LinkMobile name="Home" />
            <LinkMobile name="About" />
            <LinkMobile name="Services" />
            <LinkMobile name="Contact" />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
