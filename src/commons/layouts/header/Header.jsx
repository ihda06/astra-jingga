"use client";

import { AnimatePresence, motion } from "framer-motion";
import MenuButton from "./menubutton/MenuButton";
import DarkModeButton from "./themebutton/DarkModeButton";
import useMenu from "@/context/menu";

export default function Header({}) {
  const isOpen = useMenu((state) => state.isOpen);
  const menuContainer = {
    initial: {
      backgroundColor: "#54BAB9",
      opacity: 0,
    },
    open: {
      backgroundColor: "#54BAB9",
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.4,
      },
    },
    close: {
      backgroundColor: "#54BAB9",
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        staggerChildren: 0.4,
        staggerDirection: -1
      },
    },
  };

  const logo = {
    initial: {
      y: -20,
      opacity: 0,
      color: "black",
    },
    animate: {
      y: 0,
      opacity: 1,
      color: "black",
    },
    open: {
      y: 0,
      opacity: 1,
      color: "white",
    },
  };

  const MenuItem = {
    initial: {
      y: -40,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition:{
        type: "spring"
      }
    },
    close: {
      y: -40,
      opacity: 0,
    },
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <motion.div
          initial="initial"
          animate={isOpen ? "open" : "animate"}
          variants={logo}
          transition={{
            delay: 0.5,
          }}
          className={"text-xl font-black"}
        >
          Ihda Anwari
        </motion.div>
        <div className="flex items-center">
          <div className="text-6xl">
            <DarkModeButton />
          </div>
          <div className={"text-6xl "}>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={menuContainer}
                  initial="initial"
                  animate="open"
                  exit="close"
                  className="fixed w-full h-full top-0 left-0 -z-[1] flex flex-col justify-center items-center"
                >
                  <motion.div className="" variants={MenuItem}>
                    Halo ges
                  </motion.div>
                  <motion.div className="" variants={MenuItem}>
                    Halo ges
                  </motion.div>
                  <motion.div className="" variants={MenuItem}>
                    Halo ges
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <MenuButton className="" />
          </div>
        </div>
      </div>
    </>
  );
}
