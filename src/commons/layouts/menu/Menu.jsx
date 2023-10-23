"use client";

import useMenu from "@/context/menu";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Menu({}) {
  const router = useRouter();
  const isOpen = useMenu((state) => state.isOpen);
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
          <div
            className="pt-0 pb-1 w-full flex gap-1 items-end overflow-hidden hover:-translate-y-1 duration-300 cursor-pointer "
            onClick={() => router.push("/")}
          >
            <span className="text-sm">01</span>
            <motion.h1 className="" variants={MenuItem}>
              Home
            </motion.h1>
          </div>
          <div
            className="pt-0 pb-1 w-full flex gap-1 items-end overflow-hidden hover:-translate-y-1 duration-300 cursor-pointer "
            onClick={() => router.push("/project")}
          >
            <span className="text-sm">02</span>
            <motion.h1 className="" variants={MenuItem}>
              Project
            </motion.h1>
          </div>
          <div
            className="pt-0 pb-1 w-full flex gap-1 items-end overflow-hidden hover:-translate-y-1 duration-300 cursor-pointer "
            onClick={() => router.push("/about")}
          >
            <span className="text-sm">01</span>
            <motion.h1 className="" variants={MenuItem}>
              About
            </motion.h1>
          </div>
          <div className="pt-0 pb-1 w-full flex gap-1 items-end overflow-hidden hover:-translate-y-1 duration-300 cursor-pointer "  onClick={() => router.push("/contact")}>
            <span className="text-sm">01</span>
            <motion.h1 className="" variants={MenuItem}>
              Contact
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
