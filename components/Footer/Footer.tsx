"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import {
  RxDiscordLogo,
  RxLinkedinLogo,
  RxGithubLogo,
  RxArrowRight,
} from "react-icons/rx";
import { Socials } from "@/constants/socials";

const SocialIconsMap: Record<string, React.JSX.Element> = {
  LinkedIn: <RxLinkedinLogo size={28} />,
  Github: <RxGithubLogo size={28} />,
  Discord: <RxDiscordLogo size={28} />,
};

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative w-full flex flex-col items-center pt-20 pb-6 px-2 gap-20 z-50"
    >
      <div className="w-full max-w-2xl bg-[#0f1117]/60 rounded-lg shadow-lg font-mono">
        <div className="flex items-center px-6 pt-4 pb-2">
          <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
          <span className="h-3 w-3 rounded-full bg-green-500 mr-4"></span>
          <span className="text-blue-400 font-semibold text-sm">
            contact_me.sh
          </span>
        </div>

        <p className="px-6 text-pink-500 my-3">
          $ <span className="text-green-500">radosav@portfolio</span>:~$
          contact_me
        </p>

        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-2">
            Let's Talk
          </h2>
          <p className="text-center text-gray-400 mb-6 text-base">
            Got something on your mind? I'm always happy to chat and hear your
            thoughts!
          </p>
        </div>

        <div className="px-4 pb-4">
          <form className="flex flex-col gap-4">
            <div>
              <label className="block mb-3 font-mono text-pink-400 text-sm">
                $ <span className="text-green-400">your_name</span>
              </label>
              <input
                name="name"
                type="text"
                title=""
                required
                placeholder="What's your name?"
                className="w-full rounded-md bg-[#18181b] border border-[#23232a] px-4 py-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-3 font-mono text-pink-400 text-sm">
                $ <span className="text-green-400">your_email</span>
              </label>
              <input
                name="email"
                type="email"
                title=""
                required
                placeholder="What's your email?"
                className="w-full rounded-md bg-[#18181b] border border-[#23232a] px-4 py-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-3 font-mono text-pink-400 text-sm">
                $ <span className="text-green-400">your_message</span>
              </label>
              <textarea
                name="message"
                title=""
                required
                rows={4}
                placeholder="What do you want to say?"
                className="w-full rounded-md bg-[#18181b] border border-[#23232a] px-4 py-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-t from-blue-900 to-black border border-blue-500 cursor-pointer shadow-[0_0_10px_#60a5fa] hover:shadow-[0_0_15px_#60a5fa] transition duration-300 gap-2"
              >
                Send Message <RxArrowRight className="ml-1" size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <div className="flex flex-row gap-6 mb-4 justify-center">
          {Socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-blue-400"
              aria-label={social.name}
            >
              {SocialIconsMap[social.name] ?? null}
            </Link>
          ))}
        </div>

        <div className="text-center text-gray-500 text-sm pb-2">
          Copyright &copy; {new Date().getFullYear()} Radosav Panic.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
