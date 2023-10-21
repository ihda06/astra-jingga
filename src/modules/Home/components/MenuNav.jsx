import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function MenuNav({ title, href, isVisible }) {
  const parent = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition:{
        duration:0.5
      }
    },
    hover: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    
  };
  const text = {
    hidden: {
      x: 0,
    },
    visible: {
      x: 0,
      transition:{
        duration:0.5
      }
    },
    hover: {
      x: 0,
      scale: 1.2,
      transition: {
        duration: 0.2,
      },
    },
  };
  const underline = {
    hidden: {
      x: -120,
    },
    visible: {
      x: -120,
    },
    hover: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={parent}
            className="overflow-hidden px-3 hover:cursor-pointer active:translate-x-1 active:translate-y-1 text-center"
          >
            <Link href={href}>
              <motion.h1 variants={text}>{title}</motion.h1>
            </Link>
            <motion.div
              variants={underline}
              className="bg-neutral-900 w-full h-0.5 mt-2"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
