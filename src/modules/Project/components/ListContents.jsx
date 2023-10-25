"use client";

import { experiences } from "@/commons/constants/experiences";
import useProject from "@/context/project";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function ListContents({}) {
  const index = useProject((state) => state.index);
  const activeIndex = useProject((state) => state.activeIndex);
  const handleHover = (idx) => {
    activeIndex(idx);
  };

  const container = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    whileHover: { y: 0, opacity: 1 },
  };
  const itemText = {
    initial: { x: -25 },
    animate: { x: -25 },
    whileHover: { x: 0 },
  };

  const icon = {
    initial: { x: -20 },
    animate: { x: -20 },
    whileHover: { x: 0 },
  };
  return (
    <>
      <motion.div initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}} className="w-full border-b-2 border-neutral-800 py-2">
        <h1 className="text-4xl font-bold uppercase">Project</h1>
      </motion.div>
      <div className=" w-full overflow-x-auto no-scrollbar ">
        {experiences.map((item, idx) => (
          <motion.div
            initial="initial"
            whileHover="whileHover"
            animate="animate"
            variants={container}
            key={idx}
            className="border-b-2 border-neutral-800 py-5 font-bold text-lg"
            onMouseEnter={() => {
              handleHover(idx);
            }}
            onMouseLeave={() => {
              activeIndex(-1);
            }}
          >
            <div className="flex justify-between cursor-pointer">
              <motion.div
                variants={itemText}
                className="flex items-center gap-2"
              >
                <motion.div variants={icon} className="">
                  <FaArrowAltCircleRight />
                </motion.div>
                <h2 className="">{item.title}</h2>
              </motion.div>
              <h3 className="text-neutral-400">{item.role}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
