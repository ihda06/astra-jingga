"use client";

import "./style.css";
import { motion } from "framer-motion";

export default function DarkModeButton({ onClick, open }) {
  const iconLamp = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
    hover:{
      scale: 1.1,
      transition:{
        type: "spring",
        bounce: 1,
        stiffness: 700,
        ease: "easeIn",
        duration: 2,
        repeat: Infinity
      }
    }
  };
  const bottomLamp = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  };

  const hover = {
    start: {
      opacity: 0,
      pathLength: 0,
    },
    end: {
      opacity: 1,
      pathLength: 1,
    },
  };
  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        whileHover={{
          scale:1.3,
          transition:{
            type: "spring",
            bounce: 1,
            duration: 100,
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
      >
        <motion.path
          d="M34.5 44.0833C34.5 43.8072 34.7239 43.5833 35 43.5833H45C45.2761 43.5833 45.5 43.8072 45.5 44.0833V48.8244C45.5 48.9868 45.4216 49.1387 45.2865 49.2288C44.7209 49.6061 43.1413 50.6076 41.8863 50.9045C41.8508 50.9129 41.8143 50.9167 41.7779 50.9167C40.0176 50.9167 39.111 50.9167 38.2215 50.9167C38.1851 50.9167 38.1492 50.9129 38.1137 50.9045C36.8587 50.6076 35.2791 49.6061 34.7135 49.2288C34.5784 49.1387 34.5 48.9868 34.5 48.8244V44.0833Z"
          fill={open? "white":"#222222"}
          initial={{
            y: 20,
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          
        />
        <motion.path
          d="M30 27.0833C30 23.6532 31.1439 21.1856 32.8993 19.5689C34.6681 17.9398 37.158 17.0833 40 17.0833C42.842 17.0833 45.3319 17.9398 47.1007 19.5689C48.8561 21.1856 50 23.6532 50 27.0833C50 30.6951 49.5131 31.8506 49.0105 32.5272C48.8114 32.7952 48.6191 32.987 48.3674 33.2378C48.2341 33.3707 48.0842 33.5201 47.9078 33.7063C47.4325 34.2079 46.9238 34.8329 46.4389 35.8028C45.3479 37.9848 44.8701 39.5692 44.6612 40.5551C44.6492 40.6116 44.615 40.671 44.5691 40.7118C44.548 40.7306 44.5298 40.7406 44.518 40.7455C44.5071 40.7499 44.5016 40.75 44.5 40.75H35.5C35.4984 40.75 35.4929 40.7499 35.482 40.7455C35.4702 40.7406 35.452 40.7306 35.4309 40.7118C35.385 40.671 35.3508 40.6116 35.3388 40.5551C35.1299 39.5692 34.6521 37.9848 33.5611 35.8028C33.0762 34.8329 32.5675 34.2079 32.0922 33.7063C31.9158 33.5201 31.7659 33.3707 31.6326 33.2378C31.3809 32.987 31.1886 32.7952 30.9895 32.5272C30.4869 31.8506 30 30.6951 30 27.0833Z"
          stroke={open? "white":"#222222"}
          strokeWidth={2}
          fill="transparent"
          variants={iconLamp}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
        />
        <motion.path
          d="M36.3333 26.1666C36.3333 25.25 37.25 23.4167 39.0833 23.4167"
          stroke={open? "white":"#222222"}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
        />
      </motion.svg>
    </>
  );
}
