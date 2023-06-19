import { Icons } from "./Icons";
import PageLinks from "./PageLinks";

const Header = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-[10]  h-16 py-2">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between ">
        <a href="#" aria-disabled>
          <Icons.logo className="hidden h-fit w-fit pb-4 md:block" />
        </a>
        <PageLinks />
        <Icons.service className="hidden h-fit w-fit" />
      </div>
    </div>
  );
};

export default Header;
