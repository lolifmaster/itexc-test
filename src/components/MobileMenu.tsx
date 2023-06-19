import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "./ui/DropDownMenu";
import { Icons } from "./Icons";
import LinkMobile from "./PageLinks/LinkMobile";

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
            <LinkMobile name="Home" href="#home" />
            <LinkMobile name="About" href="#about" />
            <LinkMobile name="Services" href="#services" />
            <LinkMobile name="Contact" href="#contact" />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
