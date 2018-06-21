const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const Models = require('./models');

const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("client/build"));

// app.use(routes);

app.get('/', (req,res) => {
  res.status(200).send('hello this is the from server.js')
})

mongoose.Promise = Promise;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bucketlist";
console.log(MONGODB_URI);
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

app.post('/testpost', (req,res) => {
    let item = new Models.Items({
      title: req.body.title
    });
    item.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    })
});

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });