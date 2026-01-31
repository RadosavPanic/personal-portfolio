import Link from "next/link";
import { navigationHrefs, transformLinkName } from "@/utils/navigation";

const DesktopMenu = () => {
  return (
    <div className="relative w-1/2 lg:w-1/3 h-full md:flex hidden flex-row items-center justify-between mx-0 lg:mx-10">
      <div className="w-full h-auto flex justify-between items-center px-5 py-3 text-gray-200">
        {navigationHrefs.slice(1).map((navHref) => (
          <div
            key={navHref}
            className="relative group flex items-center justify-center px-3"
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-gray-200 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-600 origin-top" />

            <Link
              href={navHref}
              className="cursor-pointer z-10 group-hover:text-green-500"
            >
              <span>{transformLinkName(navHref)}</span>
            </Link>

            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-gray-200 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-600 origin-bottom" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopMenu;
