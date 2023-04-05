import React from "react";
import MinimalistButton from "./MinimalistButton";
import Image from "next/image";
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
}) {
  return (
    <motion.div
      variants={fromLeft ? fromLeftAnimation : fromRightAnimation}
      initial="initial"
      whileInView="whileInView"
      viewport="viewport"
      className="space-y-4 border-b p-4 md:max-w-[80vh]"
    >
      <div className="border-b p-4">
        <Image src={img}></Image>
      </div>
      <h3 className="text-center">{title}</h3>
      <p className="opacity-70 leading-8 font-extralight">
        {description} &nbsp;
        <span className="text-cyan-800 font-bold underline">{firstTech}</span>
        &nbsp; and &nbsp;
        <span className="text-cyan-800 font-bold underline">{SecondTech}</span>
      </p>
      <MinimalistButton title={"SEE IT LIVE"}></MinimalistButton>
    </motion.div>
  );
}
