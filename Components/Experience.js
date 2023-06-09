import React, { useRef } from "react";
import Details from "./Details";
import LineYear from "./LineYear";
import { motion, useScroll } from "framer-motion";
import useWindow from "@/Hooks/useWindow";
export default function Experience() {
  const ref = useRef(null);
  const width = useWindow();

  return (
    <div className="p-4 border-b space-y-4   overflow-hidden h-full">
      <h3 className="text-center">Experience</h3>
      <div
        ref={ref}
        className="flex justify-around items-center relative space-x-4"
      >
        <div className="md:flex md:flex-col md:p-20 h-full md:items-center justify-center ">
          <div className="flex md:w-[50vw] items-center relative">
            <LineYear year={"1"} sup={"st"}></LineYear>
            <Details
              title={" Fullstack Developer"}
              place={" @Accelist Lentera Indonesia"}
              subtitle={"2020-2021 | Tangerang Selatan"}
              description={
                "Creating Mobile Hospital App named telemedik with Flutter and ASP .NET Core. Features include: Booking Hospital, Locate NearbyHospital, Video call with doctor , buying medicine, alarm medicine and etc"
              }
            ></Details>
          </div>
          <div className="flex md:w-[50vw] items-center">
            <LineYear year={"2"} sup={"nd"}></LineYear>
            <Details
              title={" IT Support and Fullstack Developer"}
              place={" @Accelist Lentera Indonesia"}
              subtitle={"2021-2022 | Tangerang Selatan"}
              description={
                "Creating Ticketing App to help Accelist Employee create and document bug easily, fixing a bug for various project of Accelist and doing optimization data to load faster"
              }
            ></Details>
          </div>
          <div className="flex md:w-[50vw] items-center">
            <LineYear year={"3"} sup={"rd"}></LineYear>
            <Details
              title={"Frontend Developer "}
              place={"@?"}
              subtitle={"2023-present | Unknown"}
              description={"Lets start the journey! with you"}
            ></Details>
          </div>
        </div>
      </div>
    </div>
  );
}
