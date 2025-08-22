import Link from "next/link";
import Image from "next/image";

import { navigationHrefs, transformLinkName } from "@/utils/navigation";
import { Socials } from "@/constants/socials";

type MobileMenuProps = {
  isMenuOpen: boolean;
  handleToggleMenu: () => void;
};

const MobileMenu = ({ isMenuOpen, handleToggleMenu }: MobileMenuProps) => {
  return (
    <div
      className={`md:hidden ${
        isMenuOpen ? "flex" : "hidden"
      } w-full h-screen absolute flex-col items-center justify-start right-0 py-4 gap-y-20 bg-gradient-to-bl from-blue-900 to-black text-gray-200`}
    >
      <div className="flex flex-col items-center justify-center gap-20 mt-10">
        {navigationHrefs.map((navHref) => (
          <Link
            key={navHref}
            href={navHref}
            className="cursor-pointer"
            onClick={handleToggleMenu}
          >
            {transformLinkName(navHref)}
          </Link>
        ))}
      </div>

      <div className="flex flex-row items-center justify-center gap-10 pb-3">
        {Socials.map((social) => (
          <Link href={social.href} target="_blank" key={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              width={social.width}
              height={social.height}
              priority
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
