"use client";
import React from "react";
import { motion } from "motion/react";

function Test() {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  };
  return (
    <div className="flex flex-col gap-16">
      <motion.div
        className="w-40 h-40 bg-rose-500 rounded-2xl"
        // style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      />
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          className="stroke-3 stroke-red-500"
        />
      </motion.svg>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ translateX: 2 }}
        transition={{ duration: 5 }}
        className="w-40 h-40 bg-rose-500 rounded-2xl"
      />
      <div className="max-w-[300px] flex gap-6 overflow-x-scroll p-20">
        {[1, 2, 3, 4, 5].map((item) => (
          <motion.div
            key={item}
            className="w-40 h-40  rounded-2xl shrink-0"
            initial={{
              backgroundColor: "rgb(0, 255, 0)",
              opacity: 0.5,
              translateY: 20,
            }}
            whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
          />
        ))}
      </div>
    </div>
  );
}

export default Test;

// import * as motion from "motion/react-client";

// export default function Rotate() {
//   return (
//     <motion.div
//       style={box}
//       animate={{ rotate: 360 }}
//       transition={{ duration: 1 }}
//     />
//   );
// }

// /**
//  * ==============   Styles   ================
//  */

// const box = {
//   width: 100,
//   height: 100,
//   backgroundColor: "#ff0088",
//   borderRadius: 5,
// };
