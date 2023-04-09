import React from "react";
import MinimalistButton from "./MinimalistButton";
import { motion } from "framer-motion";
import { fromBottomAnimation } from "@/Animation/AnimationList";
export default function Footer() {
  return (
    <footer className="space-y-8">
      <div className="grid place-items-center ">
        <motion.div
          variants={fromBottomAnimation}
          initial="initial"
          whileInView="whileInView"
          viewport={"viewport"}
          className="space-y-8 grid place-items-center"
        >
          <h1 className="text-center">Let's make a great app with me</h1>
          <a href="mailto:vincenthartanto.work@gmail.com">
            <MinimalistButton title={"EMAIL ME"}></MinimalistButton>
          </a>
        </motion.div>
      </div>
      <div className="bg-slate-800 h-[10vh]"></div>
    </footer>
  );
}
