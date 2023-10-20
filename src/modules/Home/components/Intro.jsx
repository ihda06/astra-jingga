import { motion } from "framer-motion";
import { Geologica } from "next/font/google";
const geologica = Geologica({ subsets: ["latin"] });

export default function Intro({}) {
  const parent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const children = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={parent}
      className="flex flex-col gap-3 justify-center text-center lg:text-left"
    >
      <motion.h2 variants={children} className="text-sm">
        Hey! Let me introduce my self
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
          <h1 className={`text-6xl font-black ${geologica.className}`}>IHDA</h1>
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
  );
}
