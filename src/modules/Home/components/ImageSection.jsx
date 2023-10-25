import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function ImageSection({ isVisible }) {
  const image = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: { y: -20, opacity: 0 },
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={image}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="basis-2/5 flex justify-center items-center"
        >
          <Image width={250} height={250} src="/logo.png" alt="logo"></Image>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
