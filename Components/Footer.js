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
          <h1 className="text-center">Interested on hiring me ?</h1>
          <MinimalistButton title={"EMAIL ME"}></MinimalistButton>
        </motion.div>
      </div>
      <div className="bg-slate-800 h-[10vh]"></div>
    </footer>
  );
}
