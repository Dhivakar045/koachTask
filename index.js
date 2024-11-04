// index.js
const express = require('express');
const { storeData, retrieveData } = require('./s3Bucket');

const app = express();
app.use(express.json());

// POST Endpoint to store JSON data
app.post('/store', async (req, res) => {
  try {
    const data = req.body;
    if (typeof data !== 'object' || data === null) {
      return res.status(400).send({ error: 'Invalid JSON data' });
    }
    const result = await storeData(data);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: 'Failed to store data', details: error.message });
  }
});

// GET Endpoint to retrieve all JSON data
app.get('/retrieve', async (req, res) => {
  try {
    const data = await retrieveData();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to retrieve data', details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
