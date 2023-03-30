import React from "react";
import Image from "next/image";
import logo from "../public/VH-Logo.png";
export default function NavigationBar() {
  return (
    <nav className="flex p-8 items-center justify-between">
      <Image className="max-h-[4vh] w-auto" src={logo} alt="VH-Logo"></Image>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13">
        <g fill="#33323D" fillRule="evenodd">
          <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
        </g>
      </svg>
    </nav>
  );
}
