import React from "react";
import { motion } from "framer-motion";
import { fromRightAnimation } from "@/Animation/AnimationList";
export default function Details({ title, subtitle, description, place }) {
  return (
    <motion.div
      variants={fromRightAnimation}
      initial="initial"
      whileInView="whileInView"
      className="w-full md:w-[50%] m-8"
    >
      <p className="font-bold text-md">{title}</p>
      <p className="font-bold text-cyanColor">{place}</p>
      <p className="font-thin">{subtitle}</p>
      <p className="font-extralight only:text-justify leading-7 opacity-60">
        {description}
      </p>
    </motion.div>
  );
}
