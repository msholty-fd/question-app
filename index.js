const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const htmlFile = path.join(__dirname + "/index.html");
const appJs = path.join(__dirname + "/app.js");

app.get("/", (req, res) => res.sendFile(htmlFile));
app.get("/app.js", (req, res) => res.sendFile(appJs));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
