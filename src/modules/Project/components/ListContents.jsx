"use client"

import { experiences } from "@/commons/constants/experiences";
import useProject from "@/context/project";

export default function ListContents({}) {
  const index = useProject((state)=>state.index)
  const activeIndex = useProject((state)=>state.activeIndex)
  const handleHover=(idx)=>{
      activeIndex(idx)
  }
  return (
    <>
      <div className="w-full border-b-2 border-neutral-800 py-2">
        <h1 className="text-4xl font-bold uppercase">Project</h1>
      </div>
      <div className=" w-full overflow-x-auto no-scrollbar ">
        {experiences.map((item, idx) => (
          <div
            key={idx}
            className="border-b-2 border-neutral-800 py-5 font-bold text-lg"
            onMouseEnter={()=>{handleHover(idx)}}
            onMouseLeave={()=>{activeIndex(-1)}}
          >
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
}
