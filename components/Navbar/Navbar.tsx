"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="w-full fixed h-20 top-0 backdrop-blur-xl z-50 px-10 md:px-5">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto md:px-[10px] px-0">
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center cursor-pointer"
        >
          <Image
            src="/rp-logo.png"
            alt="logo"
            width={40}
            height={40}
            priority
          />
          <span
            className="font-bold ml-3 hidden md:block hover:text-green-500"
            title="Back to Homepage"
          >
            Radosav Panic
          </span>
        </Link>

        {/* Desktop Nav */}
        <DesktopMenu />

        {/* Mobile Nav */}
        {isMenuOpen ? (
          <IoClose
            className="md:hidden flex flex-row w-6 h-6"
            onClick={handleToggleMenu}
          />
        ) : (
          <GiHamburgerMenu
            className="md:hidden flex flex-row w-5 h-5"
            onClick={handleToggleMenu}
          />
        )}
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
    </div>
  );
};

export default Navbar;
