"use client";

import Summary from "./Summary";
import ListContents from "./ListContents";
import { experiences } from "@/commons/constants/experiences";
import useProject from "@/context/project";
import { AnimatePresence } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
import ListContentsMobile from "./ListContentsMobile";

export default function Project({}) {
  const hoveredIndex = useProject((state) => state.index);
  const isMobile = useIsMobile();
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse h-full overflow-hidden pt-28">
        {!isMobile && (
          <div className="basis-1/2 pt-14">
            <AnimatePresence>
              {hoveredIndex > -1 && <Summary {...experiences[hoveredIndex]} />}
            </AnimatePresence>
          </div>
        )}
        <div
          className={
            "lg:px-36 px-5 w-full flex flex-col gap-3 pt-14 " +
            (isMobile ? "basis-full" : "basis-1/2")
          }
        >
          {isMobile ? <ListContentsMobile /> : <ListContents />}
        </div>
      </div>
    </>
  );
}
