const bodyParser = require('body-parser');
const express = require('express');
const { PythonShell } = require('python-shell');
const { spawn } = require('child_process');
const data = require("./PythonModel/csvjson.json");
const faculty = require("./PythonModel/faculty.json");
const catgorizedDiseases = require("./PythonModel/Speacility.json");
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


function runPythonScript(inputSymptom) {
  return new Promise((resolve, reject) => {
      const pythonProcess = spawn('python', ['./PythonModel/index.py', inputSymptom]);

      let data = '';
      pythonProcess.stdout.on('data', (chunk) => {
          data += chunk.toString();
      });

      pythonProcess.stderr.on('data', (error) => {
          reject(error.toString());
      });

      pythonProcess.on('close', (code) => {
          if (code === 0) {
              try {
                  const result = JSON.parse(data);
                  resolve(result);
              } catch (parseError) {
                  reject(parseError.toString());
              }
          } else {
              reject(`Python process exited with code ${code}`);
          }
      });
  });
}

// Disease prediction endpoint
app.get('/predict', (req, res) => {

  console.log(req.query);

  const symptoms = req.query.symptoms; // Assuming input_symptom is the key in the JSON request

  console.log('Received input_symptom:', symptoms); // Debugging statement

  // const data = symptoms.join(', ');


  runPythonScript(symptoms)
  .then((result) => {
      console.log(result);
      if(result)
        res.status(200).json({
         result : result
        })
      else
        res.status(400).json({
      result : "Error finding results"})
  })
  .catch((error) => {
      console.error('Error running Python script:', error);
  });
});

app.get('/data',(req,res)=>{
  if(data){
    res.status(200).json({result : data});
  }
  else
    res.status(500).json({
         result : "Error finding the data"
     });
})

app.get('/diseaseArray',(req,res)=>{
  if(data){
    const diseaseArray = [];
    data.map((d)=>{
      diseaseArray.push(d.disease);  
    });
    const uniqueValues = Array.from(new Set(diseaseArray))
    res.status(200).json({
      result : uniqueValues
    })
  }else{
    res.status(500).json({
      result : "Error Finding it"
    })
  }
})

app.get('/categorizedDiseases',(req,res)=>{
  if(catgorizedDiseases){
    res.status(200).json({
      result : catgorizedDiseases
    })
  }else{
    res.status(500).json({
      result : "Error Finding it"
    })
  }
})

app.get('/doctor',(req,res)=>{
  if(faculty) {
  res.status(200).json({
     result : faculty 
  })}else{
    res.status(500).json({
      result : "Error finding data"
    })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
