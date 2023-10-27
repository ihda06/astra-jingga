"use client"

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Form from "./Form";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact({}) {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row lg:px-52 lg:h-full px-12 py-32 lg:py-0 gap-10 lg:gap-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="basis-1/2 w-full flex justify-center lg:pr-24 lg:px-0 gap-5 flex-col"
        >
          <div className="text-4xl font-extrabold text-amber-900">
            <h1 className="">Do you have an interesting project?</h1>
            <h1 className="">I&apos;m ready to hear about it. 🤝🤝</h1>
          </div>
          <h2 className="text-lg text-amber-700">
            Join forces and craft something amazing
          </h2>
          <div className="flex gap-3 text-4xl">
            <div className="cursor-pointer">
              <Link href="https://www.instagram.com/ihda.anwari">
                <FaInstagram />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="https://www.linkedin.com/in/ihda-anwari/">
                <FaLinkedin />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="https://github.com/ihda06">
                <FaGithub />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="basis-1/2"
        >
          <Form />
        </motion.div>
      </div>
    </>
  );
}
