/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

//   importing components
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import OutputSection from "./Components/OutputSection";
import About from "./Components/About";
import Contact from "./Components/Contact";

import {FaApple, FaAtlassian, FaGoogle, FaMicrosoft} from "react-icons/fa"


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
  useEffect(() => {
    console.log({ symptoms });
  }, [symptoms]);

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
        <div
          className="md:h-[60vh] h-[100vh] flex justify-center items-center"
        >
          <div
            className="h-full flex md:flex-row flex-col justify-center items-center"
          >
            <div
              className="md:w-1/2 flex h-full justify-center items-center relative p-6"
            >
              
                <div className="w-10/12 flex flex-col justify-center items-center relative font-bold text-5xl">Your Health Diagnosis, now Simplified 
                <p className="text-lg font-normal">
                  Just type in your symptoms and get instant, accurate results.
                  Understand what your body is telling you with HealHive - your
                  personal health assistant.
                </p></div>
                
         
              <div
                // onClick="predictDisease()"
                className="border border-black w-[100px] h-[100px] bg-gray-200 hover:bg-gray-400 hover:text-white text-black font-medium absolute top-0 right-0 flex justify-center items-center text-center m-2 cursor-pointer"

              >
                Start Diagnosing Now
              </div>
            </div>
            <div
               className="min-w-1/2 h-full flex justify-center items-center overflow-hidden"
            >
             
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/storylens/image/upload/v1702151671/uxsd31xlalnaslcvqmkb.jpg"
                  alt="sl"
                  
                />
             
            </div>
          </div>
        </div>
        <div
          className=""
        >
          <div
            data-type="grid-layout"
            className="react-grid-item ltr  false  cd-padding   "
            id="Div044G"
            data-clientid="Div044G"
            data-displayname="Container"
          >
            
              <p className="text-3xl text-gray-400 h-32 text-center">
                Loved by thousands of health-conscious individuals worldwide for
                accurate results.{" "}
              </p>
          
            <div
              data-type="grid-layout"
              className="react-grid-item ltr  false  cd-padding   "
              id="SectionHU7i"
              data-clientid="SectionHU7i"
              data-displayname="Section block"
            >
              <div
                id="SpanPlMf"
                data-clientid="SpanPlMf"
                data-displayname="Text"
                className="flex flex-col justify-center items-center"
              >
                 <FaMicrosoft className="w-full" />
                <p>Microsoft </p>
              </div>
              <span
                id="SpanogzJ"
                data-clientid="SpanogzJ"
                data-displayname="Text"
                className="react-grid-item ltr false flex justify-center items-center"
              >
                 <FaAtlassian className="w-full" />
                <p>Nuance </p>
              </span>
              <div
                id="SpanTQaf"
                data-clientid="SpanTQaf"
                data-displayname="Text"
                className="react-grid-item ltr false flex justify-center items-center "
              >
                <FaGoogle className="w-full" />
                <p>Google </p>
              </div>
              <div
                id="Span6izB"
                data-clientid="Span6izB"
                data-displayname="Text"
                className="react-grid-item ltr false flex justify-center items-center   "
              >
                <FaApple className="w-full" />
                <p>Apple </p>
              </div>
            </div>
            <div
              className="react-grid-item ltr  false  cd-padding h-[50vh] flex justify-center items-center"
            
            >
              <div
                className="react-grid-item ltr h-full false cd-padding flex flex-col justify-center items-start"
              >
                <div
                  id="Paragraphm2Iz"
                  data-clientid="Paragraphm2Iz"
                  data-displayname=""
                  className="react-grid-item ltr  false   "
                >
                  <p className="font-medium mb-6">Top-tier Tech for Health </p>
          
                  <p className="font-bold text-6xl mb-8">Why Choose HealHive for Diagnosis? </p>
                </div>
                <button
                  id="ButtonYmqs"
                  data-clientid="ButtonYmqs"
                  data-displayname="Primary button"
                  className="react-grid-item ltr  false   "
                >
                  <p>GET IN TOUCH</p>
                </button>
              </div>
              <div
                data-type="grid-layout"
                className="react-grid-item ltr false cd-padding h-full "
                id="SectioncRkJ"
                data-clientid="SectioncRkJ"
                data-displayname="Column-2"
              >
                <span
                  id="ParagraphJQDv"
                  data-clientid="ParagraphJQDv"
                  data-displayname=""
                  className="react-grid-item ltr  false text-right"
                >
                  <p>
                    Our advanced AI algorithm understands your health concerns
                    with just a few symptoms. Type it, and get prompt, accurate,
                    and understandable diagnosis and recommendations. Our
                    technology is intuitive, user-friendly, and engineered to
                    streamline your journey towards better health.{" "}
                  </p>
                </span>
              </div>
            </div>
            <div
              data-type="grid-layout"
              className="react-grid-item ltr  false  cd-padding   "
              id="Div7iIc"
              data-clientid="Div7iIc"
              data-displayname="3 column"
            >
              <div
                data-type="grid-layout"
                className="react-grid-item ltr  false  cd-padding   "
                id="Div2UuJ"
                data-clientid="Div2UuJ"
                data-displayname="Column"
              >
                <span
                  id="VectorkQLM"
                  data-displayname="image"
                  className="react-grid-item ltr  false   "
                >
                  <img
                    className=""
                    data-clientid="VectorkQLM"
                    id="VectorkQLM-id"
                    src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1679042627/static/vectorsvg_1679042626_24645.svg"
                    alt="sl"
                    // compprops="[object Object]"
                    // type="page"
                    // clientid="VectorkQLM"
                    // cssobj="[object Object]"
                    // cssstring="[object Object]"
                    // parent_id="Div2UuJ"
                    // name="Vector"
                    // componentstyle="[object Object]"
                  />
                </span>
                <span
                  id="Paragraph7hLY"
                  data-clientid="Paragraph7hLY"
                  data-displayname=""
                  className="react-grid-item ltr  false   "
                >
                  <p>Intelligent Diagnostics </p>
                </span>
                <span
                  id="ParagraphxMcn"
                  data-clientid="ParagraphxMcn"
                  data-displayname=""
                  className="react-grid-item ltr  false   "
                >
                  <p>
                    Our AI comprehends symptoms and provides precise health
                    diagnosis.{" "}
                  </p>
                </span>
              </div>
              <div
                data-type="grid-layout"
                className="react-grid-item ltr  false  cd-padding   "
                id="DivVB7B"
                data-clientid="DivVB7B"
                data-displayname="Column"
              >
                <span
                  id="VectorZMoz"
                  data-displayname="image"
                  className="react-grid-item ltr  false   "
                >
                  <img
                    className=""
                    data-clientid="VectorZMoz"
                    id="VectorZMoz-id"
                    src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1679042627/static/vector-1svg_1679042626_72896.svg"
                    alt="sl"
                    // compprops="[object Object]"
                    // type="page"
                    // clientid="VectorZMoz"
                    // cssobj="[object Object]"
                    // cssstring="[object Object]"
                    // parent_id="DivVB7B"
                    // name="Vector"
                    // componentstyle="[object Object]"
                  />
                </span>
                <span
                  id="ParagraphElXh"
                  data-clientid="ParagraphElXh"
                  data-displayname=""
                  className="react-grid-item ltr  false   "
                >
                  <p>Customized Health Advice </p>
                </span>
                <span
                  id="ParagraphKqBh"
                  data-clientid="ParagraphKqBh"
                  data-displayname=""
                  className="react-grid-item ltr  false   "
                >
                  <p>
                    Get personalized precautionary measures based on diagnosis.{" "}
                  </p>
                </span>
              </div>
              <div
                data-type="grid-layout"
                className="react-grid-item ltr  false  cd-padding   "
                id="Div3ga0"
                data-clientid="Div3ga0"
                data-displayname="Column"
              >
                <span
                  id="VectorruSJ"
                  data-displayname="image"
                  className="react-grid-item ltr  false   "
                >
                  <img
                    className=""
                    data-clientid="VectorruSJ"
                    id="VectorruSJ-id"
                    src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1679042627/static/framesvg_1679042626_29925.svg"
                    alt="sl"
                    // compprops="[object Object]"
                    // type="page"
                    // clientid="VectorruSJ"
                    // cssobj="[object Object]"
                    // cssstring="[object Object]"
                    // parent_id="Div3ga0"
                    // name="Vector"
                    // componentstyle="[object Object]"
                  />
                </span>
                <span
                  id="ParagraphaQJb"
                  data-clientid="ParagraphaQJb"
                  data-displayname=""
                  className="react-grid-item ltr  false   "
                >
                  <p>User-friendly Interface </p>
                </span>
                <span
                  id="Paragraph1Loa"
                  data-clientid="Paragraph1Loa"
                  data-displayname=""
                  className="react-grid-item ltr  false   "
                >
                  <p>
                    Type, receive results and precautions - as simple as that!{" "}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          data-type="grid-layout"
          className="react-grid-item ltr  undefined  cd-padding   "
          id="DivDm4R"
          data-clientid="DivDm4R"
          data-displayname="Flex - Horizontal"
        >
          <div
            data-type="grid-layout"
            className="react-grid-item ltr  false  cd-padding   "
            id="DivPI10"
            data-clientid="DivPI10"
            data-displayname="Container"
          >
            <span
              id="Span8HCq"
              data-clientid="Span8HCq"
              data-displayname="H1 Center Header"
              className="react-grid-item ltr  false   "
            >
              <p>Getting started with HealHive is Super Simple </p>

              {/* <style id="style-section-DivPI10-Span8HCq">[data-clientId="Span8HCq"]{font-family:Kumbh Sans;font-size:46px;font-weight:700;color:#eee;line-height:56px;padding:0px 0px 28px 0px;text-align:center;opacity:100%;}</style> */}
            </span>
            <div
              data-type="grid-layout"
              className="react-grid-item ltr  false  cd-padding   "
              id="Div2e4X"
              data-clientid="Div2e4X"
              data-displayname="Flex - Horizontal"
            >
              <div
                data-type="grid-layout"
                className="react-grid-item ltr  false  cd-padding   "
                id="DivHLGN"
                data-clientid="DivHLGN"
                data-displayname="Div"
              >
                <span
                  id="SpanOO40"
                  data-clientid="SpanOO40"
                  data-displayname="Text"
                  className="react-grid-item ltr  false   "
                >
                  <p>01</p>
                </span>
                <span
                  id="Span79GY"
                  data-clientid="Span79GY"
                  data-displayname="Text"
                  className="react-grid-item ltr  false   "
                >
                  <p>Step 1: Enter Your Symptoms </p>
                </span>
                <span
                  id="ParagraphqscU"
                  data-clientid="ParagraphqscU"
                  data-displayname=""
                  className="react-grid-item ltr  false   "
                >
                  <p>Type in symptoms you`re experiencing. </p>
                </span>
              </div>
              <div
                data-type="grid-layout"
                className="react-grid-item ltr  false  cd-padding   "
                id="DivCrhQ"
                data-clientid="DivCrhQ"
                data-displayname="Div"
              >
                <span
                  id="Spanh5tv"
                  data-clientid="Spanh5tv"
                  data-displayname="Text"
                  className="react-grid-item ltr  false   "
                >
                  <p>02</p>
                </span>
                <span
                  id="Span3hJE"
                  data-clientid="Span3hJE"
                  data-displayname="Text"
                  className="react-grid-item ltr  false   "
                >
                  <p>Step 2: Evaluate Your Diagnosis </p>
                </span>
                <span
                  id="Paragraph3RyQ"
                  data-clientid="Paragraph3RyQ"
                  data-displayname=""
                  className="react-grid-item ltr  false   "
                >
                  <p>Review the provided health diagnosis. </p>
                </span>
              </div>
              <div
                data-type="grid-layout"
                className="react-grid-item ltr  false  cd-padding   "
                id="Divi3NI"
                data-clientid="Divi3NI"
                data-displayname="Div"
              >
                <span
                  id="SpanmcRt"
                  data-clientid="SpanmcRt"
                  data-displayname="Text"
                  className="react-grid-item ltr  false   "
                >
                  <p>03</p>
                </span>
                <span
                  id="Span5TGf"
                  data-clientid="Span5TGf"
                  data-displayname="Text"
                  className="react-grid-item ltr  false   "
                >
                  <p>Step 3: Take Recommended Precautions </p>
                </span>
                <span
                  id="Paragraphu4jI"
                  data-clientid="Paragraphu4jI"
                  data-displayname=""
                  className="react-grid-item ltr  false   "
                >
                  <p>Follow suggested precautions for better health. </p>
                </span>
              </div>
            </div>
          </div>
        </div>
       
        {/*  hero section */}
        <HeroSection />
            
        {/* output section */}
        <OutputSection />

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
