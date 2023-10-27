"use client";

import useIsMobile from "@/hooks/useIsMobile";
// import "./style.css";
import useMenu from "@/context/menu";
import { motion } from "framer-motion";

export default function MenuButton({className}) {
  const toggleMenu = useMenu((state) => state.toggleOpen);
  const isOpen = useMenu((state) => state.isOpen);
  const handleClickMenu = () => {
    toggleMenu();
    console.log(isOpen);
  };
  const isMobile = useIsMobile();
  const ViewBox = isMobile ? "25" : "41";

  const container = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    active: {
      y: 2,
      x: 2,
      opacity: 1,
      transition: {
        duration: 0.05,
      },
    },
  };

  const crossY = {
    initial:{
      opacity:0
    },
    animate: {
      width: 12,
      height: 12,
      y: 14.34,
      x: 14.34,
      rotate: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      height: 41,
      opacity: 1,
      x: 14.34,
      y: 0,
      fill: "#54BAB9",
      transition: {
        duration: 0.3,
      },
    },
    active: {
      opacity:1,
      width: 10,
      height: 51.5,
      rotate: -45,
      x: 7,
      y: -15,
      fill:"white"
    },
  };

  const commonCircle = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    hover: {
      opacity: 0,
    },
    active: {
      opacity: 0,
    },
  };

  const crossX = {
    initial:{
      opacity:0
    },
    animate: {
      width: 12,
      height: 12,
      y: 14.34,
      x: 14.34,
      rotate: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      width: 41,
      opacity: 1,
      x: 0,
      y: 14.34,
      rotate: 0,
      fill: "#54BAB9",
      transition: {
        duration: 0.3,
      },
    },
    active: {
      opacity:1,
      width: 52,
      height: 10,
      rotate: -45,
      x: 7,
      y: 15,
      fill:"white"
    },
  };

  const circleOutTopLeft = {
    initial: {
      x: 0,
      opacity: 1,
    },
    animate: {
      x: 0,
    },
    hover: {
      x: -10,
      y: -10,
    },
    active: {
      opacity: 0,
    },
  };
  const circleOutBottomLeft = {
    initial: {
      x: 0,
      opacity: 1,
    },
    animate: {
      x: 0,
    },
    hover: {
      x: -10,
      y: 10,
    },
    active: {
      opacity: 0,
    },
  };
  const circleOutBottomRight = {
    initial: {
      x: 0,
      opacity: 1,
    },
    animate: {
      x: 0,
    },
    hover: {
      x: 10,
      y: 10,
    },
    active: {
      opacity: 0,
    },
  };
  const circleOutTopRight = {
    initial: {
      x: 0,
      opacity: 1,
    },
    animate: {
      x: 0,
    },
    hover: {
      x: 10,
      y: -10,
    },
    active: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate={!isOpen ? "animate" : "active"}
      whileHover={!isOpen ? "hover" : "active"}
      variants={container}
      className={"hover:cursor-pointer rounded-lg"+(className)}
      onClick={handleClickMenu}
    >
      <motion.svg
        width={ViewBox}
        height={ViewBox}
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="5.26683"
          cy="5.78782"
          r="5.03801"
          fill="black"
          className="cirle-1"
          variants={circleOutTopLeft}
        />
        <motion.circle
          cx="20.3808"
          cy="5.78782"
          r="5.03801"
          fill="black"
          className="cirle-2"
          variants={commonCircle}
        />
        <motion.circle
          cx="35.4949"
          cy="5.78782"
          r="5.03801"
          fill="black"
          className="cirle-3"
          variants={circleOutTopRight}
        />
        <motion.circle
          cx="5.26683"
          cy="20.9018"
          r="5.03801"
          fill="black"
          className="cirle-4"
          variants={commonCircle}
        />

        <motion.circle
          cx="20.3808"
          cy="20.9018"
          r="5.03801"
          fill="black"
          className="cirle-5"
          variants={commonCircle}
        />

        <motion.circle
          cx="35.4949"
          cy="20.9018"
          r="5.03801"
          fill="black"
          className="cirle-6"
          variants={commonCircle}
        />
        <motion.circle
          cx="5.26683"
          cy="36.0159"
          r="5.03801"
          fill="black"
          className="cirle-7"
          variants={circleOutBottomLeft}
        />
        <motion.circle
          cx="20.3808"
          cy="36.0159"
          r="5.03801"
          fill="black"
          className="cirle-8"
          variants={commonCircle}
        />
        <motion.circle
          cx="35.4949"
          cy="36.0159"
          r="5.03801"
          fill="black"
          className="cirle-9"
          variants={circleOutBottomRight}
        />
        <motion.rect
          rx="8"
          ry="8"
          width="12"
          style={{ originX: "50%", originY: "50%" }}
          className="activeX"
          variants={crossY}
        />
        <motion.rect
          rx="8"
          ry="8"
          height="12"
          className="activeY"
          style={{ originX: "50%", originY: "50%" }}
          variants={crossX}
        />
      </motion.svg>
    </motion.div>
  );
}
