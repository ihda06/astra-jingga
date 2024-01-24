"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Summary({
  title,
  location,
  companyName,
  companyType,
  image,
  backgroundColor,
  textColor = "light",
  gradient,
  period,
  periodTime,
  jobdesk,
}) {
  const textHeader =
    textColor === "light" ? "text-neutral-600" : "text-neutral-100";
  const textContent =
    textColor === "light" ? "text-neutral-400" : "text-neutral-200";

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full rounded-tr-[150px] h-full lg:pr-14 relative overflow-hidden`}
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="w-full h-96 absolute">
          <Image
            fill
            alt="image"
            priority
            className="object-cover"
            src={image}
            blurDataURL={image}
            placeholder="blur"
          ></Image>
          <div
            className="w-full h-full absolute"
            style={{
              background: gradient,
            }}
          ></div>
        </div>
        <div className="pt-44 lg:pb-0 pb-20 lg:pl-32 px-20  relative space-y-3">
          <div className="">
            <h1 className={`text-3xl font-semibold ${textHeader}`}>{title}</h1>
            <h2 className={`text-sm ${textContent}`}>
              At {companyName} - {location} - {companyType}
            </h2>
            <h2 className={`text-sm  ${textContent}`}>
              {period} ~{periodTime} Months
            </h2>
          </div>
          <div className="">
            <h2 className={`text-xl font-semibold ${textHeader}`}>
              Job Description
            </h2>
            <ul
              className={`text-xs list-disc pl-4 space-y-2 ${textContent} dark:text-neutral-300`}
            >
              {jobdesk.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}
