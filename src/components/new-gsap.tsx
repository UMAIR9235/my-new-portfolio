"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
function NewGsap() {
  useEffect(() => {
    gsap.to(".box", { rotation: 720, x: 100, duration: 1 });
  }, []);
  return (
    <div className="flex flex-col gap-y-10">
      <div className="box h-20 w-20 rounded-lg bg-rose-500 "></div>
      <div className="box h-20 w-20 rounded-lg bg-indigo-500 "></div>
      <div className="box h-20 w-20 rounded-lg bg-yellow-500 "></div>
    </div>
  );
}

export default NewGsap;
