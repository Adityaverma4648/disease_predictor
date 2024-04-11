/* eslint-disable no-unused-vars */
import React from "react";

const OutputSection = () => {
  return (
    <section className="output" id="output"      
    // style="display: none;"
    >
      <div id="result" className="container">
        <h2>Diagnosis</h2>
        <p>
          <strong>Disease:</strong> <span id="diseaseName"> </span>
        </p>
        <p>
          <strong>Precautions:</strong> <span id="precautions"> </span>
        </p>
      </div>
    </section>
  );
};

export default OutputSection;
