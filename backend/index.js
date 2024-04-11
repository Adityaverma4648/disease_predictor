const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 7000;

// Body parser middleware
app.use(bodyParser.json());

// MongoDB configuration
// const dbURI = 'your_mongodb_connection_string';
// mongoose
//   .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log('MongoDB connection error:', err));

// Disease prediction endpoint
app.get('/predict', (req, res) => {
  // Assume req.body contains symptoms data
  const symptoms = req.body;

  console.log(symptoms);

  // Python script path
  const scriptPath = './PythonModel/untitled.pkl';

  // Prepare PythonShell options
  const options = {
    mode: 'json',
    pythonOptions: ['-u'],
    args: [JSON.stringify(symptoms)],
  };

  // Run the Python script
  PythonShell.run(scriptPath, options, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error predicting disease.');
    } else {
      const prediction = results[0];
      res.json({ prediction });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
