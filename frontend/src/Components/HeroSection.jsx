/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroSection = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [uniqueSymptoms, setUniqueSymptoms] = useState([]);
  const [disease, setDisease] = useState([]);
  const [data, setData] = useState([]);
  const [precautions, setPrecautions] = useState([]);

  useEffect(() => {
    axios.get("https://diseasepredictorbackend-7a3t.onrender.com/data").then((res) => {
      const array = [];

      setData(res.data.result);

      res.data.result.forEach((item) => {
        const s = item.symptoms.split(", ");
        // console.log(symptoms);
        s.forEach((d) => {
          s.forEach((id) => {
            if (!array.includes(id)) {
              array.push(id);
            }
          });
        });
      });

      setUniqueSymptoms(array);
    });
  }, []);

  const predictDisease = (e) => {
    console.log("Symptoms : ", symptoms);
    axios
      .get("https://diseasepredictorbackend-7a3t.onrender.com/predict", {
        headers: {
          "Content-Type": "application/json",
        },
        params: { symptoms: symptoms },
      })
      .then((res) => {
        console.log(res);
        setDisease(res.data.result.predicted_disease);
      });
  };

  useEffect(() => {

    const diseaseArray = [];
    data.map((d)=>{
      diseaseArray.push(d.disease);  
    });

    console.log(diseaseArray);

    const matched = data.filter((item) => {
      return item.disease == disease;
    });

    setPrecautions(matched[0]?.precautions);

    console.log("Disease :", disease, "matched :", matched);
  }, [disease, data]);

  return (
    <>
      <section className="hero bg-white" id="HeroSection">
        <div className="container">
          <h2>Your Health Companion</h2>
          <p>
            Enter your symptoms below to get information about potential
            diseases and precautions.
          </p>
          <div className="flex justify-center items-center">
            <div className="">
              <form className="flex md:flex-row flex-col justify-center items-center">
                <label
                  htmlFor="diseaseCode"
                  className="me-2 md:w-auto w-11/12 flex font-semibold"
                >
                  Enter Symptoms:
                </label>
                <div>
                  <input
                    type="text"
                    id="diseaseCode"
                    name="diseaseCode"
                    className="md:w-[40vw] w-[60vw] border border-black rounded-md py-4 px-8 text-black outline-none select-none"
                    onChange={(e) => {
                      setSymptoms(e.target.value);
                      console.log(symptoms);
                    }}
                    required
                  />

                  <button
                    type="button"
                    className="bg-black text-white rounded-md py-4 px-8 mx-2"
                    onClick={() => {
                      predictDisease();
                    }}
                  >
                    Predict
                  </button>
                </div>
              </form>
              <div className="text-gray-400 my-4">
                <span className="font-semibold">
                  Enter the symptom in following format :
                </span>
                <span className="text-xl">
                  [ "Pain","Swelling","Bruising","Deformity","Difficulty
                  moving","Loss of function"]
                </span>
              </div>
            </div>
          </div>

          {/* <div className="bg-gray-300 w-full h-[40vh] m-8 overflow-y-scroll relative">
            <div className="flex justify-between items-center py-4 px-2">
              <div className="font-semibold text-xl">
                Choose Symptoms from below list
              </div>

              <div>
                <input
                  type="text"
                  className="px-2 py-4 outline-none"
                  placeholder="Search symptoms"
                  required
                />
              </div>
            </div>
            {uniqueSymptoms?.map((d, index) => {
              return (
                <button key={index} type="button" onClick={() => {}}>
                  <div className="m-2 p-2 bg-white text-[16px]">{d}</div>
                </button>
              );
            })}
          </div> */}
        </div>
      </section>

      {/*  output section */}
      <section
        className="output"
        id="output"
        // style="display: none;"
      >
        <div id="result" className="w-full text-3xl flex flex-col justify-start items-center px-8">
          <h2 className="w-10/12 text-left my-2 font-bold underline">Diagnosis : </h2>
          <p className="w-10/12 text-left my-2">
            <strong >Predicted Disease:</strong>
            <span className="text-2xl">
            {disease}
            </span>
          </p>
          <p className="w-10/12 text-left my-2">
            <strong>Predicted precautions for the predicted disease:</strong>
            <span className="text-2xl">
            {precautions}
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
