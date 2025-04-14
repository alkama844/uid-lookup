// api/player.js
const axios = require('axios');

module.exports = async (req, res) => {
  const { uid } = req.query;
  const region = 'BD'; // Bangladesh server

  try {
    const response = await axios.get('https://free-ff-api.jinix6.com/api/v1/playerstats', {
      params: { region, uid }
    });

    // Return the player data if the request is successful
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch player data." });
  }
};
