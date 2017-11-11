var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/cs5610';
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds129434.mlab.com:29434/heroku_vlss0c70'; // use yours
}

var db = mongoose.connect(connectionString, {useMongoClient: true});

module.exports = db;
