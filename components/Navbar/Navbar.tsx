"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Socials } from "@/constants/socials";

const navigationHrefs: string[] = ["/", "about-me", "skills", "projects"];

const transformLinkName = (navHref: string) => {
  return navHref.includes("/")
    ? "Home"
    : navHref.includes("-")
    ? navHref.replace("-", " ").replace(navHref[0], navHref[0].toUpperCase())
    : navHref.replace(navHref[0], navHref[0].toUpperCase());
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 md:bg-[#03001417] bg-[#030014b3] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto md:px-[10px] px-0">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] md:block text-gray-300">
            Radosav Panic
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="w-[500px] h-full md:flex hidden flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {navigationHrefs.slice(1).map((navHref) => (
              <Link key={navHref} href={navHref} className="cursor-pointer">
                {transformLinkName(navHref)}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:flex hidden flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.href} target="_blank" key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={social.width}
                height={social.height}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Nav */}
        {isMenuOpen ? (
          <IoClose
            className="md:hidden flex flex-row text-[#ffffff] w-[25px] h-[25px]"
            onClick={handleToggleMenu}
          />
        ) : (
          <GiHamburgerMenu
            className="md:hidden flex flex-row text-[#ffffff] w-[20px] h-[20px]"
            onClick={handleToggleMenu}
          />
        )}
      </div>

      <div
        className={`md:hidden ${
          isMenuOpen
            ? "flex flex-col items-center justify-evenly gap-3"
            : "hidden"
        } w-full h-[200px] py-4 right-0 absolute bg-[rgba(3,0,20,0.9)] text-gray-300`}
      >
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

        <div className="flex flex-row items-center justify-center gap-3 pb-3">
          {Socials.map((social) => (
            <Link href={social.href} target="_blank" key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={social.width}
                height={social.height}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
