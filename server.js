const express = require('express');
const path = require('path');

const users = require('./routes/api/users');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const passport = require('passport');
const mongoose = require("mongoose");
const Models = require('./models');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = Promise;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bucketlist";
console.log(MONGODB_URI);
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

app.use(passport.initialize());

// PASSPORT CONFIG
require('./config/passport')(passport);

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

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build')); // serve the static react app
  app.get(/^\/(?!api).*/, (req, res) => { // don't serve api routes to react app
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
  console.log('Serving React App...');
};

// USE ROUTES
app.use('/api/users', users);
app.use(routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
