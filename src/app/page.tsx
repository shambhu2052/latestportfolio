"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Mainsection from "./components/Mainsection";
import About from "./components/About";
import Myskill from "./components/Myskill";
import Myproject from "./components/Myproject";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
import Simplemodal from "./components/Simplemodal";
interface sectionid {
  id: string;
}
const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  return (
    <div>
      <>
        <a
          href="https://wa.me/+9779811969388"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </>
      <Navbar />
      <Mainsection id="section1" />
      <About id="section2" />
      <Myskill id="section3" />
      <Myproject id="section4" />
      <Contactme id="section5" />
      <Footer id="section6" />
      <Simplemodal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Home;
