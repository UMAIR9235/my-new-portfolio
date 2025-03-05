import {
  BriefcaseBusiness,
  Compass,
  PenTool,
  Telescope,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { PiTwitterLogoBold } from "react-icons/pi";
import { TbBrandLinkedin } from "react-icons/tb";
import { LuGithub } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";

function SideNav() {
  return (
    <nav className="flex flex-col gap-8 p-6 bg-[#141414] rounded-3xl min-w-[280px]">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-indigo-300"></div>
        <div className="flex flex-col">
          <h4 className=" font-medium">Cherry Brown</h4>
          <p className="text-xs text-[#706C75]">hello@cherry.com</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-8 overflow-y-auto ">
        <div className="flex flex-col gap-4">
          <h5 className="text-sm tracking-[6px]">MAIN</h5>
          <ul className="flex flex-col gap-1 ">
            <li className="text-[#706C75] hover:text-[#ff3300] hover:bg-black rounded-full min-w-[160px] px-6 py-3  flex items-center gap-2">
              <Compass />
              <Link href="">Explore</Link>
            </li>
            <li className="text-[#706C75] hover:text-[#ff3300] hover:bg-black rounded-full min-w-[160px] px-6 py-3 flex items-center gap-2">
              <BriefcaseBusiness />
              <Link href="">Projects</Link>
            </li>
            <li className="text-[#706C75] hover:text-[#ff3300] hover:bg-black rounded-full min-w-[160px] px-6 py-3 flex items-center gap-2">
              <Telescope />
              <Link href="">Explorations</Link>
            </li>
            <li className="text-[#706C75] hover:text-[#ff3300] hover:bg-black rounded-full min-w-[160px] px-6 py-3 flex items-center gap-2">
              <PenTool />
              <Link href="">Blog</Link>
            </li>
            <li className="text-[#706C75] hover:text-[#ff3300] hover:bg-black rounded-full min-w-[160px] px-6 py-3 flex items-center gap-2">
              <UserRound />
              <Link href="">About</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="tracking-[6px] text-sm">SOCIAL</h5>
          <ul className="flex flex-col gap-1 ">
            <li className="text-[#706C75] hover:text-[#ff3300] hover:bg-black rounded-full min-w-[160px] px-6 py-3 flex items-center gap-2">
              <TbBrandLinkedin className="size-6" />
              <Link href="">Linkedin</Link>
            </li>
            <li className="text-[#706C75] hover:text-[#ff3300] hover:bg-black rounded-full min-w-[160px] px-6 py-3 flex items-center gap-2">
              <PiTwitterLogoBold className="size-6" />
              <Link href="">Twitter</Link>
            </li>
            <li className="text-[#706C75] hover:text-[#ff3300] hover:bg-black rounded-full min-w-[160px] px-6 py-3 flex items-center gap-2">
              <LuGithub className="size-6" />
              <Link href="">Github</Link>
            </li>
            <li className="text-[#706C75] hover:text-[#ff3300] hover:bg-black rounded-full min-w-[160px] px-6 py-3 flex items-center gap-2">
              <SiInstagram className="size-6" />
              <Link href="">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
