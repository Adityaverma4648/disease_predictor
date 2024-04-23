/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

//   importing components
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Landing from "./Components/Landing";
import Brands from "./Components/Brands";
import Steps from "./Components/Steps";

function App() {
  return (
    <>
      <main>
        <Navbar />

        <Landing />

        <Brands />

        <Steps />

        {/*  hero section */}
        <HeroSection />

        {/* about section */}
        <About />

        {/* contact section */}
        <Contact />
      </main>

      <footer>
        <p> HealHive</p>
      </footer>
    </>
  );
}

export default App;
