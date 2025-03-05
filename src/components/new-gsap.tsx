"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
function NewGsap() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".box", { rotation: 720, x: 100, duration: 1 })
      .to(".box", { duration: 1, x: 800, stagger: 2 })
      .to(".box", { duration: 3, rotation: 360 })
      .addLabel("step2", 3)
      .to(".box1", { duration: 3, x: 500 }, "step2");
  }, []);
  return (
    <main className="flex">
      <div className="flex-1 flex flex-col gap-y-10 border-e border-white/40">
        <div className="box h-20 w-20 rounded-lg bg-rose-500"></div>
        <div className="box h-20 w-20 rounded-lg bg-indigo-500 "></div>
        <div className="box h-20 w-20 rounded-lg bg-yellow-500 "></div>
        <div className="box1 h-20 w-20 rounded-lg bg-green-500 "></div>
      </div>
      <div className="flex-1 flex flex-col gap-y-10 border-e border-white/40">
        <div className="boxright h-20 w-20 rounded-lg bg-rose-800"></div>
        <div className="boxright h-20 w-20 rounded-lg bg-indigo-200 "></div>
        <div className="boxright h-20 w-20 rounded-lg bg-yellow-900 "></div>
        <div className="boxright h-20 w-20 rounded-lg bg-green-800 "></div>
      </div>
    </main>
  );
}

export default NewGsap;
