import Image from "next/image";
import React from "react";
import KanbanProject from "../public/KanbanProject.jpg";
import Audiophile from "../public/Audiophile.jpg";
import DetailProject from "./DetailProject";
import EntertainmentWebProject from "../public/EntertainmentWebApp.jpg";
import useWindow from "@/Hooks/useWindow";
export default function MyProject() {
  return (
    <div className="p-4  space-y-4 ">
      <h3 className="text-center">My Project</h3>
      <div className="md:flex md:justify-around">
        <DetailProject
          linkPage="https://kanban-web-bxebbh3hp-vincenthartanto.vercel.app/"
          img={KanbanProject}
          title={"Kanban Web App"}
          description={
            " A web app that helps user organize their task easily. I built it Fully responsive from mobile to desktop with"
          }
          firstTech={"ReactJS"}
          SecondTech={"Tailwind CSS"}
          fromLeft={true}
        ></DetailProject>
        <DetailProject
          linkPage=""
          img={Audiophile}
          title={"Audiophiles"}
          description={
            "Fully responsive E-commerce headphone website built with "
          }
          firstTech={"ReactJS"}
          SecondTech={"Tailwind CSS"}
          fromLeft={false}
        ></DetailProject>
        <DetailProject
          linkPage="https://entertainment-web-m67xge728-vincenthartanto.vercel.app/"
          img={EntertainmentWebProject}
          title={"Entertainment Web App"}
          description={"Fully Responsive Movie Trailer Web App with"}
          firstTech={"ReactJS"}
          SecondTech={"Tailwind CSS"}
          fromLeft={false}
        ></DetailProject>
      </div>
    </div>
  );
}
