"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { menu } from "@/commons/constants/menu";
import MenuItem from "./MenuItem";
import Intro from "./Intro";

export default function HomePage({}) {

  const image = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="flex flex-col pt-14 lg:px-48">
        <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-10  ">
          <div className="basis-3/5">
            <Intro />
          </div>
          <motion.div
            variants={image}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay:0.5 }}
            className="basis-2/5 flex justify-center items-center"
          >
            <Image width={250} height={250} src="/logo.png"></Image>
          </motion.div>
        </div>
        <div className="flex justify-around pt-16 font-bold text-sm">
          {menu.map((item, idx) => (
            <MenuItem title={item.title} key={idx} href={item.href} />
          ))}
        </div>
      </div>
    </>
  );
}
