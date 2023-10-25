"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Geologica } from "next/font/google";
const geologica = Geologica({ subsets: ["latin"] });

export default function Intro({ isVisible }) {
  const parent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const children = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: { y: -20, opacity: 0 },
  };
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={parent}
            transition={{
              duration: 0.5,
              delayChildren: 0,
              staggerChildren: 0.3,
            }}
            className="flex flex-col gap-3 justify-center text-center lg:text-left"
          >
            <motion.h2 variants={children} className="text-sm">
              Hey! Let me introduce my self <span className="animate-bounce text-lg">👋</span>
            </motion.h2>
            <div className="">
              <motion.div
                variants={children}
                className="flex justify-center lg:justify-start gap-2"
              >
                <h1
                  className="text-6xl text-transparent"
                  style={{ WebkitTextStroke: "1.7px black" }}
                >
                  I&apos;M
                </h1>
                <h1 className={`text-6xl font-black ${geologica.className}`}>
                  IHDA
                </h1>
              </motion.div>
              <motion.h1
                variants={children}
                className={`text-6xl text-transparent ${geologica.className}`}
                style={{ WebkitTextStroke: "1.7px black" }}
              >
                ANWARI
              </motion.h1>
            </div>
            <motion.h2 variants={children} className="text-xl font-bold">
              I&apos;m front end developer
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
