import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavigationBar from "@/Components/NavigationBar";
import Header from "@/Components/Header";
import AboutMe from "@/Components/AboutMe";
import Experience from "@/Components/Experience";
import MyProject from "@/Components/MyProject";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <NavigationBar></NavigationBar>
      <Header></Header>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <MyProject></MyProject>
      <Footer></Footer>
    </div>
  );
}
