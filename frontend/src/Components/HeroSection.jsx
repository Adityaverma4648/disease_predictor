/* eslint-disable no-unused-vars */
import React from 'react'

const HeroSection = () => {
  return (
    <section className="hero">
    <div className="container">
      <h2>Your Health Companion</h2>
      <p>
        Enter your symptoms below to get information about potential
        diseases and precautions.
      </p>
      <div className="symptoms-input">
        <div id="prediction-form">
          <form id="diseaseForm">
            <label htmlFor="diseaseCode">Enter Symptoms:</label>
            <input
              type="text"
              id="diseaseCode"
              name="diseaseCode"
              required
            />

            <button
              type="button"
              // onClick="predictDisease()"
            >
              Predict
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection