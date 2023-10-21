"use client";

import { motion } from "framer-motion";
import MenuButton from "./menubutton/MenuButton";
import DarkModeButton from "./themebutton/DarkModeButton";
import useMenu from "@/context/menu";

export default function Header({}) {
  const isOpen = useMenu((state) => state.isOpen);
  const menuContainer = {
    initial: {
      opacity: 0,
    },
    open: {
      width: "100%",
      height: "100%",
      backgroundColor: "#54BAB9",
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    close: {
      width: "100%",
      height: "100%",
      backgroundColor: "#54BAB9",
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  const logo = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      color:"black",
      transition:{
        duration:0.5
      }
    },
    open: {
      y: 0,
      opacity: 1,
      color: "white",
      transition:{
        duration:0.5
      }
    },
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <motion.div
          initial="initial"
          animate={isOpen ? "open" : "animate"}
          variants={logo}
          className={"text-xl font-black"}
        >
          Ihda Anwari
        </motion.div>
        <div className="flex items-center">
          <div className="text-6xl">
            <DarkModeButton />
          </div>
          <div className={"text-6xl "}>
            <motion.div
              variants={menuContainer}
              initial="initial"
              animate={isOpen ? "open" : "close"}
              className="fixed w-full h-full top-0 left-0 -z-[1]"
            ></motion.div>
            <MenuButton className="" />
          </div>
        </div>
      </div>
    </>
  );
}
