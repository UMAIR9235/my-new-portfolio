import NewGsap from "@/components/new-gsap";
import PathDrawing from "@/components/path-drawing";
import Test from "@/components/test";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen p-16">
      {/* <Test /> */}
      {/* <PathDrawing /> */}
      <NewGsap />
    </div>
  );
}
