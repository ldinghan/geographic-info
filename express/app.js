const express = require("express");
const axios = require("axios");
require("dotenv").config({ path: "./config.env" });

const app = express();

app.use(express.json());
app.use(express.static("./src")); // looks for index.html

const env = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  API_KEY: process.env.API_KEY,
};
console.log(env);
app.get("/country/:countryCode", (req, res) => {
  axios
    .get(
      `https://countries-cities.p.rapidapi.com/location/country/${req.params.countryCode}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": env.API_KEY,
          "X-RapidAPI-Host": "countries-cities.p.rapidapi.com",
        },
      }
    )
    .then((response) => res.status(200).json({data: response.data}))
    .catch((err) =>
      res
        .status(500)
        .json({ err: err })
    );
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

module.exports = { app, env };
