const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/player/:uid', async (req, res) => {
  const { uid } = req.params;
  const region = 'BD'; // Change this as needed

  try {
    const response = await axios.get(`https://free-ff-api.example.com/api/v1/playerstats`, {
      params: { region, uid }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch player data." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running ✅🚀 at http://localhost:${PORT}`);
});
