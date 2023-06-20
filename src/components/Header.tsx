import { Icons } from "./Icons";
import MobileMenu from "./MobileMenu";
import PageLinks from "./PageLinks";

const Header = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-[10]  h-16 py-2">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-2 md:px-8 ">
        <a href="#" aria-disabled>
          <Icons.logo className=" h-fit w-fit pb-4" />
        </a>
        <PageLinks className="hidden items-center gap-8 text-sm font-medium md:flex" />
        {/* mobile menu */}
        <MobileMenu />

        <Icons.service className="hidden h-fit w-fit md:block" />
      </div>
    </div>
  );
};

export default Header;
