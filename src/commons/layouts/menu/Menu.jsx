"use client";

import { menus } from "@/commons/constants/menu";
import useMenu from "@/context/menu";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Menu({}) {
  const router = useRouter();
  const isOpen = useMenu((state) => state.isOpen);
  const handleClick = (href) => {
    router.push(href);
  };
  const menuContainer = {
    initial: {
      height: "100%",
      width: "100%",
      backgroundColor: "#54BAB9",
      opacity: 0,
    },
    open: {
      height: "100%",
      width: "100%",
      backgroundColor: "#54BAB9",
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
    close: {
      height: "100%",
      width: "100%",
      backgroundColor: "#54BAB9",
      opacity: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        staggerDirection: -1,
      },
    },
  };
  const MenuItem = {
    initial: {
      y: -55,
      opacity: 0.7,
    },
    open: {
      y: 0,
      opacity: 1,
    },
    close: {
      y: -40,
      opacity: 0,
    },
    hover: {
      y: -5,
    },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuContainer}
          initial="initial"
          animate="open"
          exit="close"
          className="z-10 absolute flex flex-col justify-center px-10 md:px-80 items-center font-extrabold text-5xl gap-2 uppercase text-start text-white"
        >
          {menus.map((item, idx) => (
            <div
              key={idx}
              className="pt-0 pb-1 w-full flex gap-1 items-end overflow-hidden hover:-translate-y-1 duration-300 cursor-pointer "
              onClick={() => {
                handleClick(item.href);
              }}
            >
              <span className="text-sm">{idx + 1}</span>
              <motion.h1 className="" variants={MenuItem}>
                {item.title}
              </motion.h1>
              <motion.div initial={{x:3000}} animate={{x:0}} exit={{x:3000}} transition={{delay:0.25, duration:0.5}} className="w-full border-dashed border-t-2 bg-yellow-50 self-center"></motion.div>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
