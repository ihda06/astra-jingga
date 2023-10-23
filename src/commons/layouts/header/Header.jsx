"use client";

import { AnimatePresence, motion } from "framer-motion";
import MenuButton from "./menubutton/MenuButton";
import DarkModeButton from "./themebutton/DarkModeButton";
import useMenu from "@/context/menu";

export default function Header({}) {
  const isOpen = useMenu((state) => state.isOpen);
 

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
            <MenuButton className="" />
          </div>
        </div>
      </div>
    </>
  );
}
