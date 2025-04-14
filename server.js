const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Real API for Free Fire Player data
app.get('/api/player/:uid', async (req, res) => {
  const { uid } = req.params;
  const region = 'IN';  // Example region: India (use your correct region here)

  try {
    const response = await axios.get(`https://free-ff-api.jinix6.com/api/v1/playerstats`, {
      params: { region, uid }
    });

    // Send back data if successful
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Failed to fetch player data from API." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
