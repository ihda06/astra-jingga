"use client";

import { menu } from "@/commons/constants/menu";
import MenuNav from "./MenuNav";
import Intro from "./Intro";
import useMenu from "@/context/menu";
import ImageSection from "./ImageSection";

export default function HomePage({}) {
  const isOpen = useMenu((state)=>state.isOpen)
  

  return (
    <>
      <div className="flex flex-col h-full justify-center lg:px-64 px-14">
        <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-10  ">
          <div className="basis-3/5 lg:flex lg:items-center">
            <Intro isVisible={!isOpen} />
          </div>
          <ImageSection isVisible={!isOpen}/>
        </div>
        <div className="flex justify-around pt-7 lg:pt-16 text-sm">
          {menu.map((item, idx) => (
            <MenuNav title={item.title} key={idx} href={item.href} isVisible={!isOpen} />
          ))}
        </div>
      </div>
    </>
  );
}
