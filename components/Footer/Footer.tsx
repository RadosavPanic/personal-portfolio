import Link from "next/link";
import { RxDiscordLogo, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { Socials } from "@/constants/socials";

const SocialIconsMap: Record<string, JSX.Element> = {
  LinkedIn: <RxLinkedinLogo />,
  Github: <RxGithubLogo />,
  Discord: <RxDiscordLogo />,
};

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto mb-3">
        <div className="w-full h-full flex flex-col items-center justify-center flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-center z-[30]">
            <div className="font-bold text-[16px]">Find me on</div>

            <div className="flex flex-row gap-5">
              {Socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="flex flex-row items-center my-[15px] cursor-pointer"
                >
                  {SocialIconsMap[social.name] ?? null}
                  <span className="text-[15px] ml-[6px]">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-center z-[30]">
            <div className="font-bold text-[16px]">Contact me</div>
            <Link
              href="mailto:radosav.panic@gmail.com"
              className="text-[15px] my-[10px] cursor-pointer"
            >
              <span className="ml-[6px]">radosav.panic01@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
