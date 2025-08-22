"use client";

import Link from "next/link";
import EmailForm from "./EmailForm";
import { motion, slideInFromBottom } from "@/utils/motion";

import { Socials } from "@/constants/socials";
import { RxDiscordLogo, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { RiSpeakAiFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";

const SocialIconsMap: Record<string, React.JSX.Element> = {
  LinkedIn: <RxLinkedinLogo size={28} />,
  Github: <RxGithubLogo size={28} />,
  Discord: <RxDiscordLogo size={28} />,
};

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      variants={slideInFromBottom(1)}
      animate={inView ? "visible" : "hidden"}
      id="contact"
      className="relative w-full flex flex-col items-center pt-20 pb-6 px-2 gap-20 z-20"
    >
      <div className="inline-flex items-center justify-center flex-wrap text-center text-2xl md:text-4xl font-extrabold py-10">
        <RiSpeakAiFill className="mr-2 text-red-500" />
        Get in touch
      </div>

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

        <EmailForm />
      </div>

      <div>
        <div className="flex flex-row gap-4 mb-4 justify-center items-center">
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

        <div className="text-center text-gray-400 text-sm py-2">
          Copyright &copy; {new Date().getFullYear()} Radosav Panic.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
