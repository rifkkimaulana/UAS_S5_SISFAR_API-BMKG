const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/api/status_gempa", async (req, res) => {
  try {
    const response = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
