"use client"

import { usePathname } from "next/navigation";
import Header from "./header/Header";
import "./layout.css";
import Menu from "./menu/Menu";
import { useEffect } from "react";
import useMenu from "@/context/menu";

export default function Layouts({ children }) {
  const pathName = usePathname()
  const hideMenu = useMenu((state) => state.hideMenu);

  useEffect(()=>{
    hideMenu()
  }, [pathName])
  return (
    <>
      <Menu />
      <div className="flex flex-col h-full pt-14 lg:pt-16">
        <header className="z-20 px-12 lg:px-24">
          <Header />
        </header>
        <main className="h-full">{children}</main>
      </div>
      <div className="noise"></div>
    </>
  );
}
