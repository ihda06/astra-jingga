import { SkillList } from "@/commons/constants/skills";
import Marquee from "react-fast-marquee";
import { GiMountains } from "react-icons/gi";
import { BsCodeSquare } from "react-icons/bs";
import { motion } from "framer-motion";

export default function AboutContent({}) {
  const parent = {
    initial:{
      y:0,
    },
    animate:{
      y:0,
      transition:{
        duration:1,
        delayChildren: 0.25,
        staggerChildren: 0.3,
      }
    }
  }
  const child = {
    initial:{
      y:-100,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1
    }
  }
  return (
    <>
      <motion.div initial="initial" animate="animate" variants={parent} className="flex flex-col gap-5 ">
        <motion.div variants={child} className="flex gap-2 items-center p-4  font-bold justify-between text-amber-800 text-3xl bg-white shadow-md rounded-b-lg">
          <h1 className="uppercase ">About</h1>
          <GiMountains></GiMountains>
        </motion.div>
        <motion.p variants={child} className="lg:text-lg px-4 font-normal tracking-wide text-yellow-800 text-xs">
          I am a digital business graduate who has an interest in front-end
          developers, graphic designers, and UI/UX designers. I am capable of
          designing UI Websites with ReactJs or VueJs, I have experienced
          building websites as a full stack with Laravel. I am also familiar
          with design tools like Adobe XD, Adobe Photoshop, Figma, Canva, and
          CorelDraw
        </motion.p>
      </motion.div>
      <motion.div initial="initial" animate="animate" exit="initial" variants={parent} className="flex flex-col  gap-5">
        <motion.div variants={child} className="flex gap-2 items-center p-4  font-bold justify-between text-amber-800 text-3xl bg-white shadow-md rounded-b-lg">
          <h1 className="uppercase ">Skills</h1>
          <BsCodeSquare></BsCodeSquare>
          {/* <div className="h-0.5 bg-black w-full"></div> */}
        </motion.div>
        <motion.div variants={child} className="">
          {/* <div className="flex flex-grow-0 bg-white w-full overflow-x-auto "><p></p></div>
          <div className=" bg-blue-600 w-full">aaa</div> */}
          <Marquee direction="left" speed={25} className="">
            <div className="flex gap-3 py-2 pl-2 ">
              {SkillList.map((item, idx) => (
                <div
                  className="px-4 py-2 rounded-full bg-white text-lg gap-2 flex items-center shadow-lg"
                  key={idx}
                >
                  <span className={item.color}>{item.icon}</span>
                  <span className="font-semibold text-neutral-500">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        </motion.div>
      </motion.div>
    </>
  );
}
