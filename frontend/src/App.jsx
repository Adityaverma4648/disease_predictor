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
  const [symptoms, setSymptoms] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleSymptomsChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:7000/predict", {
        symptoms,
      });
      setPrediction(response.data.prediction); 
    } catch (error) {
      console.error(error);
    }
  };
 

  return (
    <>
      {/* 
          // <div classNameName='w-screen h-screen flex flex-col justify-center items-center bg-gray-900 text-white'>
    //   <h1 classNameName='text-3xl'>Disease Prediction App</h1>
    //   <form onSubmit={handleSubmit} classNameName='w-[45vw]
    //   py-[40px] flex flex-col justify-center items-start'>
    //     <label htmlFor="symptoms">Enter Symptoms:</label>
    //     <input
    //       type="text"
    //       id="symptoms"
    //       classNameName='w-full py-2 outline-none select-none my-2 rounded-md'
    //       value={symptoms}
    //       onChange={handleSymptomsChange}
    //     />
    //     <button type="submit" classNameName='border border-blue-400 px-8 py-2 rounded-md'>Predict</button>
    //   </form>
    //   {prediction && <p>Predicted Disease: {prediction}</p>}
    // </div>
      */}
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
