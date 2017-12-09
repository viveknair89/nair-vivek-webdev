const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
SESSION_SECRET = '';
if (process.env.SESSION_SECRET) {
  sessionSecret = process.env.SESSION_SECRET;
} else {
  sessionSecret = "vasdakjshdakjh";
}
// app.use(session({secret: process.env.SESSION_SECRET }));
// app.use(session({secret: "vivek" }));
app.use(expressSession({secret: sessionSecret}));
app.use(passport.initialize());
app.use(passport.session());


// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port = process.env.PORT || '3100';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

var serverSide = require("./server/test-mongodb/app");
serverSide(app);

require("./assignment/app.js")(app);
app.listen(port);
// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});


// server.listen( port , () => console.log('Running'));
