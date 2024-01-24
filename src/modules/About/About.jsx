"use client";

import Image from "next/image";
import AboutContent from "./AboutContent";
import { galery } from "@/commons/constants/gallery";
import { motion } from "framer-motion";

export default function About({}) {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row py-32 lg:py-0 lg:h-full lg:px-52 px-12">
      <div className="basis-1/5 flex justify-center w-full">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="rounded-lg relative h-[400px] w-64 overflow-hidden shadow-[15px_15px_16px_0px_rgba(0,0,0,0.25)]"
        >
          <Image
            fill
            alt="image"
            priority
            className="object-cover"
            src={galery[0].img}
            placeholder="blur"
            blurDataURL={galery[0].img}
          ></Image>
        </motion.div>
      </div>
      <div className="basis-4/5 flex flex-col md:overflow-hidden gap-5 w-full">
        <AboutContent></AboutContent>
      </div>
    </div>
  );
}
