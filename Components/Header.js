import React from "react";
import DescriptionAboutMe from "./DescriptionAboutMe";
import Image from "next/image";
import Vincent from "../public/Vincent.png";
import { motion } from "framer-motion";
import {
  fadeIn,
  image,
  imageWrapper,
  staggerContainer,
} from "@/Animation/AnimationList";
export default function Header() {
  return (
    <motion.header
      variants={staggerContainer()}
      initial="initial"
      animate="animate"
      className="m-4 border-b p-8  border-lightGrey h-[100vh] flex flex-col justify-between"
    >
      <div className="flex justify-between space-x-4">
        <motion.div variants={fadeIn("down")}>
          <DescriptionAboutMe
            title="+2 YEARS EXPERIENCE AS DEVELOPER"
            style={""}
          ></DescriptionAboutMe>
        </motion.div>
        <motion.div variants={fadeIn("down")}>
          <DescriptionAboutMe
            title="LOVE BUILDING BEAUTIFUL WEBSITES"
            style={"text-right"}
          ></DescriptionAboutMe>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn()}
        initial="initial"
        animate="animate"
        className="grid place-items-center m-8 space-y-12 md:p overflow-hidden"
      >
        <motion.img
          variants={image()}
          className="w-[20rem] min-h-[100%] rounded-full"
          src={Vincent.src}
          alt="vincent"
        ></motion.img>

        <p className="tracking tracking-widest opacity-50 font-light md:text-xl">
          VINCENT HARTANTO
        </p>
        <div className="flex space-x-4 items-center">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
              <path
                fill="#33323D"
                d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
              />
            </svg>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="#33323D"
              d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"
            />
          </svg>
        </div>
      </motion.div>
      <div className="flex justify-between space-x-4 mb-20">
        <motion.div variants={fadeIn("up")}>
          <DescriptionAboutMe
            title="TURNING VISION"
            style={""}
          ></DescriptionAboutMe>
        </motion.div>
        <motion.div variants={fadeIn("up")}>
          <DescriptionAboutMe
            title="INTO REALITY WITH CODE"
            style={""}
          ></DescriptionAboutMe>
        </motion.div>
      </div>
    </motion.header>
  );
}
