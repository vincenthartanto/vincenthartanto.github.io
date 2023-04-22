import Image from "next/image";
import React from "react";
import KanbanProject from "../public/KanbanProject.jpg";
import Audiophile from "../public/Audiophile.jpg";
import DetailProject from "./DetailProject";
import EntertainmentWebProject from "../public/EntertainmentWebApp.jpg";
import useWindow from "@/Hooks/useWindow";
import InvoiceApp from "../public/invoice-app.jpg";
import UrlShorteningWeb from "../public/UrlShorteningWeb.jpg";
export default function MyProject() {
  return (
    <div className="p-4  space-y-4 ">
      <h3 className="text-center">My Project</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DetailProject
          linkPage="https://kanban-web-app.vercel.app/"
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
          linkPage="https://invoice-app-firebase.vercel.app/"
          img={InvoiceApp}
          title={"Invoice Firebase App"}
          description={"Fully Resposive Invoice Web App with"}
          firstTech={"ReactJS"}
          SecondTech={"Tailwind CSS"}
          thirdTech={"Firebase"}
          fromLeft={false}
        ></DetailProject>

        <DetailProject
          linkPage="https://audiophile-app-nine.vercel.app/"
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
          linkPage="https://entertainment-web-app-alpha-eight.vercel.app/"
          img={EntertainmentWebProject}
          title={"Entertainment Web App"}
          description={"Fully Responsive Movie Trailer Web App with"}
          firstTech={"ReactJS"}
          SecondTech={"Tailwind CSS"}
          fromLeft={false}
        ></DetailProject>

        <DetailProject
          linkPage="https://url-shortening-website.vercel.app/"
          img={UrlShorteningWeb}
          title={"Url Shortening Web App"}
          description={
            "Fully Responsive Url Shortening API, users can shorten their favorite link! built with "
          }
          firstTech={"ReactJS"}
          SecondTech={"Tailwind CSS"}
          fromLeft={false}
        ></DetailProject>
      </div>
    </div>
  );
}
