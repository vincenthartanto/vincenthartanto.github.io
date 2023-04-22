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
  thirdTech,
  fromLeft,
  linkPage,
  msg,
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
        &nbsp; &nbsp;
        <span className="text-cyan-800 font-bold underline">{SecondTech}</span>
        &nbsp; &nbsp;
        <span className="text-cyan-800 font-bold underline">{thirdTech}</span>
        {title === "Invoice Firebase App" && (
          <div>
            <p>To use the app, you need to login first</p>
            <p> Login Credential:</p>
            <p>
              Email:{" "}
              <span className="text-cyan-800 font-bold underline">
                admin@invoice.com
              </span>
            </p>
            <p>
              password:{" "}
              <span className="text-cyan-800 font-bold underline">123456</span>
            </p>
          </div>
        )}
      </p>
      <div className="">
        <a className="" href={linkPage} target="_blank">
          <MinimalistButton title={"SEE IT LIVE"}></MinimalistButton>
        </a>
      </div>
    </motion.div>
  );
}
