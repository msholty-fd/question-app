const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const htmlFile = path.join(__dirname + "/index.html");
const appJs = path.join(__dirname + "/app.js");

app.get("/", (req, res) => res.sendFile(htmlFile));
app.get("/app.js", (req, res) => res.sendFile(appJs));
app.get("/questions", function(req, res) {
  const MongoClient = require("mongodb").MongoClient;
  const url =
    "mongodb://heroku_nndjz5dt:o2b43nc5ce0u1mdp7u022kgpkp@ds125616.mlab.com:25616/heroku_nndjz5dt";
  const dbName = "heroku_nndjz5dt";
  const client = new MongoClient(url, { useNewUrlParser: true });

  client.connect(function(err) {
    const db = client.db(dbName);
    db.collection("questions")
      .find()
      .toArray(function(err, docs) {
        res.json(docs);
      });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
