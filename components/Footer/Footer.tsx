import Link from "next/link";
import { RxDiscordLogo, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto mb-3">
        <div className="w-full h-full flex flex-col items-center justify-center flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-center z-[30]">
            <div className="font-bold text-[16px]">Find me on</div>

            <div className="flex flex-row gap-5">
              <Link
                href="https://www.linkedin.com/in/radosav-panic"
                target="_blank"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </Link>

              <Link
                href="https://github.com/RadosavPanic"
                target="_blank"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">GitHub</span>
              </Link>

              <Link
                href="https://discord.com/users/410436636845801482"
                target="_blank"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </Link>
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
