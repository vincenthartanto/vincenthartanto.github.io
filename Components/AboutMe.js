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
            I am a highly motivated and results-driven individual with a 3.57
            GPA and two years of experience as a fullstack developer. While I
            have enjoyed working on both the front-end and back-end of web
            development projects, I have recently discovered a strong passion
            for frontend development. The wide information of Frontend
            Technologies makes me want to discover more.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
