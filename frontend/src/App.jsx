import { useState } from 'react';
import axios from 'axios';

function App() {
  const [symptoms, setSymptoms] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleSymptomsChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/predict', { symptoms });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gray-900 text-white'>
      <h1 className='text-3xl'>Disease Prediction App</h1>
      <form onSubmit={handleSubmit} className='w-[45vw]
      py-[40px] flex flex-col justify-center items-start'>
        <label htmlFor="symptoms">Enter Symptoms:</label>
        <input
          type="text"
          id="symptoms"
          className='w-full py-2 outline-none select-none my-2 rounded-md'
          value={symptoms}
          onChange={handleSymptomsChange}
        />
        <button type="submit" className='border border-blue-400 px-8 py-2 rounded-md'>Predict</button>
      </form>
      {prediction && <p>Predicted Disease: {prediction}</p>}
    </div>
  );
}

export default App;
