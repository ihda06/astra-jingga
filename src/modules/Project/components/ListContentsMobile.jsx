"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { experiences } from "@/commons/constants/experiences";
import { useState } from "react";
import Image from "next/image";

export default function ListContentsMobile() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const container = {
    initial: { y: -100, opacity: 0 },
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
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-between items-end shadow-md bg-white rounded-b-lg px-2 py-4 border-neutral-800 "
      >
        <h1 className="text-4xl font-bold uppercase text-amber-800">Project</h1>
        <h1 className="text-xl font-extrabold text-neutral-400">
          {experiences.length}
        </h1>
      </motion.div>
      <div className="w-full overflow-x-auto no-scrollbar px-2">
        {experiences.map((item, idx) => (
          <div key={idx} className="pb-2">
            <motion.div
              initial="initial"
              whileHover="whileHover"
              animate="animate"
              variants={container}
              className="shadow-md mb-2 border-neutral-800 py-5 font-bold text-lg cursor-pointer p-2 bg-white rounded-lg"
              onClick={() => {
                if (selectedIndex === idx) {
                  setSelectedIndex(-1);
                } else {
                  setSelectedIndex(idx);
                }
              }}
            >
              <div className="flex justify-between overflow-hidden">
                <motion.div
                  variants={itemText}
                  className="flex items-center gap-2"
                >
                  <motion.div variants={icon}>
                    <FaArrowAltCircleRight />
                  </motion.div>
                  <h2 className="">{item.title}</h2>
                </motion.div>
                <h3 className="text-neutral-400">{item.role}</h3>
              </div>
            </motion.div>
            <AnimatePresence>
              {selectedIndex === idx && (
                <motion.section
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { y: 0, opacity: 1, height: "auto" },
                    collapsed: { y: -20, opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="mx-1 rounded-b-md bg-neutral-50 p-5 space-y-5 shadow-md">
                    <div className="flex gap-1 items-center justify-between">
                      <div className="">
                        <p className=" font-semibold">
                          {experiences[idx].companyName} -{" "}
                          {experiences[idx].location} -{" "}
                          {experiences[idx].companyType}
                        </p>
                        <small className="text-sm">
                          {experiences[idx].period} ~
                          {experiences[idx].periodTime} Months
                        </small>
                      </div>
                      <div className="">
                        <Image
                          width={50}
                          height={50}
                          alt="image"
                          priority
                          src={experiences[idx].logo}
                        ></Image>
                      </div>
                    </div>
                    <div className="">
                      <h2 className={`text-base font-semibold`}>
                        Job Description
                      </h2>
                      <div className="text-xs text-justify">
                        {experiences[idx].jobdesk.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
}
