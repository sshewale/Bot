//require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Chat bot server started on port: ${port}`));















// const express = require("express");
// var bodyParser = require("body-parser");

// const app = express();
// const port = 3000;

// //app.get("/", (req, res) => res.send("Hello World!"));
// app.get("/", (req, res) => res.json({ info: 'Node.js, Express, and Postgres API' }));


// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
