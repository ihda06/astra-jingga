"use client";

import { AnimatePresence, motion } from "framer-motion";
import MenuButton from "./menubutton/MenuButton";
import DarkModeButton from "./themebutton/DarkModeButton";
import useMenu from "@/context/menu";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

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
      <div className="flex justify-between items-center lg:pt-14">
        <motion.div
          initial="initial"
          animate={isOpen ? "open" : "animate"}
          variants={logo}
          transition={{
            delay: 0.5,
          }}
          className="duration-300"
        >
          <Image
            src="/logominiblack.png"
            height={50}
            width={50}
            className={isOpen ? "invert" : ""}
            alt="personal logo"
            priority
          ></Image>
        </motion.div>
        <div className="flex items-center">
          {/* <div className="text-6xl">
            <DarkModeButton open={isOpen} />
          </div> */}
          <div className={"text-6xl "}>
            <MenuButton className="" />
          </div>
        </div>
      </div>
    </>
  );
}
