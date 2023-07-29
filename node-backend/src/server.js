const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, '..', 'data', 'data.json');

app.use(bodyParser.json());
app.use(cors());

app.post('/api/save', (req, res) => {
  try {
    const data = req.body;

    // Check if the received data is empty or not valid JSON
    if (!data || Object.keys(data).length === 0) {
      throw new Error('Received empty or invalid JSON data.');
    }

    // Read the existing data from the file (handle empty file case)
    let existingData = {};
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
      if (fileContent.trim() !== '') {
        existingData = JSON.parse(fileContent);
      }
    }

    // Merge the existing data with the received data
    const newData = { ...existingData, ...data };

    // Write the updated data back to the file
    fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2));

    res.status(200).json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Failed to save data.', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
