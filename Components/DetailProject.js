import React from "react";
import MinimalistButton from "./MinimalistButton";
import Image from "next/image";
import useWindow from "@/Hooks/useWindow";
import { motion } from "framer-motion";
import {
  fromLeftAnimation,
  fromRightAnimation,
} from "@/Animation/AnimationList";
export default function DetailProject({
  img,
  title,
  description,
  firstTech,
  SecondTech,
  fromLeft,
  linkPage,
}) {
  const width = useWindow();
  return (
    <motion.div
      variants={fromLeftAnimation}
      initial="initial"
      whileInView="whileInView"
      viewport="viewport"
      className="space-y-4 border-b p-4 md:max-w-[80vh] flex flex-col justify-between"
    >
      <div className="border-b p-4 h-[18rem]">
        <Image className="h-full w-full object-contain" src={img}></Image>
      </div>
      <h3 className="text-center">{title}</h3>
      <p className="opacity-70 leading-8 font-extralight h-[30%]">
        {description} &nbsp;
        <span className="text-cyan-800 font-bold underline">{firstTech}</span>
        &nbsp; and &nbsp;
        <span className="text-cyan-800 font-bold underline">{SecondTech}</span>
      </p>
      <div className="">
        <a className="" href={linkPage} target="_blank">
          <MinimalistButton title={"SEE IT LIVE"}></MinimalistButton>
        </a>
      </div>
    </motion.div>
  );
}
