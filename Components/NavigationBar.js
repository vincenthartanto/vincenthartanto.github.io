import React from "react";
import Image from "next/image";
import logo from "../public/VH-Logo.png";
import MinimalistButton from "./MinimalistButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/Animation/AnimationList";
export default function NavigationBar() {
  return (
    <motion.nav
      variants={fadeIn("down")}
      initial="initial"
      animate="animate"
      className="flex items-center justify-between sticky p-4"
    >
      <Image className="max-h-[4vh] w-auto" src={logo} alt="VH-Logo"></Image>
      <MinimalistButton title={"DOWNLOAD CV"}></MinimalistButton>
    </motion.nav>
  );
}
