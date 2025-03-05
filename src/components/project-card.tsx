import Image from "next/image";
import React from "react";

function ProjectCard({
  imageUrl,
  label,
  description,
}: {
  imageUrl: string;
  label: string;
  description: string;
}) {
  return (
    <div className="flex flex-col  gap-4">
      <div className="min-w-[320px] min-h-[360px] relative">
        <Image
          src={imageUrl}
          alt=""
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <h5 className="text-lg font-medium text-white">{label}</h5>
        <p className="text-xs text-[#706C75]">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
