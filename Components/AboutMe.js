import React from "react";
import MinimalistButton from "./MinimalistButton";
import Experience from "./Experience";
import { motion } from "framer-motion";
import {
  cardVariants,
  fromLeftAnimation,
  image,
} from "@/Animation/AnimationList";
export default function AboutMe() {
  return (
    <motion.section
      variants={fromLeftAnimation}
      initial="initial"
      whileInView="whileInView"
      viewport="viewport"
      className="p-4 border-b md:w-full md:grid md:place-items-center"
    >
      <div className="md:w-[50vw] space-y-4">
        <h3 className="font-thin text-center">About Me</h3>
        <div className="grid place-items-center space-y-4">
          <p className="font-thin leading-10 text-justify">
            Previously, I was working in IT consultant for 2 years as Fullstack
            developer using Flutter and ASP .NET Core, but right now I want to
            transition as Frontend Developer. I love building beautiful UI/UX
            for web and soon learning Typescript, React Native and Next.js.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
