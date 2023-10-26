"use client";

import Summary from "./Summary";
import ListContents from "./ListContents";
import { experiences } from "@/commons/constants/experiences";
import useProject from "@/context/project";
import { AnimatePresence } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

export default function Project({}) {
  const index = useProject((state) => state.index);
  const isMobile = useIsMobile();
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse h-full lg:max-h-[561px]">
        <div className="basis-1/2 pt-14">
          <AnimatePresence>
            {index>-1 && !isMobile && <Summary {...experiences[index]} />}
          </AnimatePresence>
        </div>
        <div className="basis-1/2 lg:px-36 px-5 w-full flex flex-col gap-3 pt-14">
          <ListContents />
        </div>
      </div>
    </>
  );
}
