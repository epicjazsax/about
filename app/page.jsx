"use client";

import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import Overview from "./components/Overview";
import DomainCards from "./components/DomainCards";
import LanguageCards from "./components/LanguageCards";
import Experience from "./components/Experience";
import Mission from "./components/Mission";
import Image from "next/image";
import { tomz } from "./assets";
import PageEndDiv from "./components/PageEndDiv";


export default function Home() {
  return (
    <main className="bg-primary-dark">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Welcome />
      </div>
      {/* <Mission /> */}
      <Experience />
      <Overview />
      {/* <DomainCards /> */}
      <LanguageCards />
      <Contact />
      <PageEndDiv />
    </main>
  );
}
