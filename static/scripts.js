function predictDisease() {
  const diseaseCode = document.getElementById('diseaseCode').value;
  const url = `http://127.0.0.1:5000/api/disease/${diseaseCode}`;


  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Display the result
      console.log(data);
      document.getElementById('result').innerHTML = `<p>Disease: ${data.disease}</p><p>Precautions: ${data.precaution}</p>`;
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
}





