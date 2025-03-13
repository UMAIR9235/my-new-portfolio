import ProjectCard from "@/components/project-card";
import SkillBanner from "@/components/SkillBanner";
import { ArrowUp, ChevronRight, Dot } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-h-full  overflow-y-auto hide-scrollbar space-y-1">
      <section className="flex flex-col gap-y-4 lg:gap-y-16 w-full bg-[#141414] px-4 lg:px-14  py-8">
        <div className="flex items-center">
          <div className="flex items-center mr-auto text-[#009930]">
            <Dot className="" />
            <span className=" font-semibold tracking-widest text-[10px] lg:text-xs">
              AVAILABLE FOR FREELANCE
            </span>
          </div>
          <span className="hidden lg:block tracking-widest text-xs text-[#706C75]">
            KASHMIR
          </span>
        </div>
        <div className="flex flex-col gap-y-4 lg:gap-y-8">
          <h1 className="font-medium text-2xl lg:text-6xl text-white max-w-[700px]">
            Creating things people love to use every day.
          </h1>
          <div className="flex flex-col gap-y-6">
            <span className="text-xs lg:text-sm text-[#706C75] tracking-widest">
              WHAT I DO
            </span>
            <div className="flex flex-wrap max-w-[600px] gap-2">
              <SkillBanner />
              <SkillBanner />
              <SkillBanner />
              <SkillBanner />
              <SkillBanner />
              <SkillBanner />
              <SkillBanner />
              <SkillBanner />
              <SkillBanner />
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 gap-y-8 ">
          <h4 className="text-xl lg:text-2xl font-medium text-white flex items-center">
            Recent projects (2022-2025)
            <ChevronRight className="size-8" />
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard
              imageUrl="/watch.avif"
              label="Smart watch"
              description="Web app . B2B"
            />
            <ProjectCard
              imageUrl="/sandle.avif"
              label="Smart watch"
              description="Web app . B2B"
            />{" "}
            <ProjectCard
              imageUrl="/glowingBall.avif"
              label="Smart watch"
              description="Web app . B2B"
            />
            <ProjectCard
              imageUrl="/watch.avif"
              label="Smart watch"
              description="Web app . B2B"
            />
          </div>
        </div>
        <div className="flex flex-col py-6 gap-y-8 ">
          <h4 className="text-2xl font-medium text-white flex items-center">
            Personal creations
            <ChevronRight className="size-8" />
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard
              imageUrl="/sculptureBroken.avif"
              label="Smart watch"
              description="Web app . B2B"
            />
            <ProjectCard
              imageUrl="/sculptureGlossy.avif"
              label="Smart watch"
              description="Web app . B2B"
            />{" "}
            <ProjectCard
              imageUrl="/baseballChair.avif"
              label="Smart watch"
              description="Web app . B2B"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row px-4 lg:px-14 gap-6 lg:gap-0 py-8 bg-[#141414]">
        <div className="flex-1 relative min-h-[420px]">
          <Image
            src="/artist-white.jpg"
            alt=""
            fill
            className="object-cover object-top rounded-3xl"
          />
        </div>
        <div className="flex-1 px-1 lg:px-6">
          <div className="flex flex-col gap-y-3">
            <span className="text-sm text-[#706C75] tracking-widest">
              LET&apos;S CONNECT
            </span>
            <h4 className="font-medium text-2xl lg:text-3xl text-white max-w-[700px]">
              I&apos;m not just here to design products; I&apos;m here to
              connect with people.
            </h4>
            <p className="text-[#706C75]">
              As a product designer, I&apos;m on an exciting journey to blend
              creativity with technology to craft memorable user
            </p>
          </div>
          <div></div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0 px-4 lg:px-14  py-8 bg-[#141414]">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-[#706C75] tracking-widest">
            MADE BY
          </span>
          <span className="text-xs text-white tracking-widest">Umair</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-[#706C75] tracking-widest">EMAIL</span>
          <span className="text-xs text-white tracking-widest">
            umairslm80@gmail.com
          </span>
        </div>{" "}
        <div className="flex flex-col gap-2">
          <span className="text-sm text-[#706C75] tracking-widest">
            PLATFORM
          </span>
          <span className="text-xs text-white tracking-widest">Framer</span>
        </div>{" "}
        <div className="flex flex-col gap-2">
          <span className="text-sm text-[#706C75] tracking-widest">
            LAST UPDATED
          </span>
          <span className="text-xs text-white tracking-widest">
            {new Date().toDateString()}
          </span>
        </div>
        <button className="py-3 px-6 rounded-full border border-[#706C75] text-[#ff3300] self-stretch lg:self-auto text-sm flex items-center gap-2 font-semibold">
          Back to top
          <ArrowUp />
        </button>
      </section>
    </main>
  );
}
