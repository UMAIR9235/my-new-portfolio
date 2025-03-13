import ProjectCard from "@/components/project-card";
import { ArrowUp, ChevronRight } from "lucide-react";
import React from "react";

function ProjectsListPage() {
  return (
    <main className="max-h-full  overflow-y-auto hide-scrollbar space-y-1">
      <section className="flex flex-col gap-y-16 w-full bg-[#141414] px-14  py-8">
        <div className="flex flex-col py-6 gap-y-8 ">
          <h4 className="text-4xl font-semibold text-white flex items-center">
            Recent projects (2022-2025)
            {/* <ChevronRight className="size-8" /> */}
          </h4>
          <div className="flex shrink-0 gap-8  flex-nowrap overflow-x-auto hide-scrollbar">
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
      </section>

      <section className="flex justify-between items-center px-14  py-8 bg-[#141414]">
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
        <button className="py-3 px-6 rounded-full border border-[#706C75] text-[#ff3300] text-sm flex items-center gap-2 font-semibold">
          Back to top
          <ArrowUp />
        </button>
      </section>
    </main>
  );
}

export default ProjectsListPage;
