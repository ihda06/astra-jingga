"use client";

import useIsMobile from "@/hooks/useIsMobile";
import "./style.css";
import useMenu from "@/context/menu";

export default function MenuButton({}) {
  const toggleMenu = useMenu((state)=>state.toggleMenu)
  const isOpen = useMenu((state)=>state.isOpen)
  const handleClickMenu = ()=>{
    toggleMenu()
  }
  const isMobile = useIsMobile();
  const ViewBox = isMobile ? "25" : "41";
  return (
    <div className="lg:p-5 p-2 bg-white menu rounded-lg shadow-[5px_4px_3.35867px_0px_rgba(0,0,0,0.08)] lg:8px_7px_3.35867px_0px_rgba(0,0,0,0.08) active:translate-x-1 active:translate-y-1 active:shadow-none duration-100" onClick={handleClickMenu}>
      <svg
        width={ViewBox}
        height={ViewBox}
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="5.26683"
          cy="5.78782"
          r="5.03801"
          fill="black"
          className="cirle-1"
        />
        <circle
          cx="20.3808"
          cy="5.78782"
          r="5.03801"
          fill="black"
          className="cirle-2"
        />
        <circle
          cx="35.4949"
          cy="5.78782"
          r="5.03801"
          fill="black"
          className="cirle-3"
        />
        <circle
          cx="5.26683"
          cy="20.9018"
          r="5.03801"
          fill="black"
          className="cirle-4"
        />

        <circle
          cx="20.3808"
          cy="20.9018"
          r="5.03801"
          fill="black"
          className="cirle-5"
        />

        <circle
          cx="35.4949"
          cy="20.9018"
          r="5.03801"
          fill="black"
          className="cirle-6"
        />
        <circle
          cx="5.26683"
          cy="36.0159"
          r="5.03801"
          fill="black"
          className="cirle-7"
        />
        <circle
          cx="20.3808"
          cy="36.0159"
          r="5.03801"
          fill="black"
          className="cirle-8"
        />
        <circle
          cx="35.4949"
          cy="36.0159"
          r="5.03801"
          fill="black"
          className="cirle-9"
        />
        <rect
          y="14.34"
          x="14.34"
          width="12"
          rx="8"
          ry="8"
          height="12"
          className="activeX"
        />
        <rect
          y="14.34"
          x="14.34"
          width="12"
          rx="8"
          ry="8"
          height="12"
          className="activeY"
        />
      </svg>
    </div>
  );
}
