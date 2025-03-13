"use client";
import CanvasCircleAnimation from "@/components/canvas-circle-animation";
import React, { useRef, useState, useLayoutEffect } from "react";

function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Optional: Add ResizeObserver for element resize detection
    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full border border-[#706C75]/50 "
    >
      <CanvasCircleAnimation
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}

export default ProjectsPage;
