module.exports = function(api) {
  var userModel = require("../models/user/user.model.server");
  var bcrypt = require("bcrypt-nodejs");
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var facebookConfig ={
    clientID : "374947576290073",
    clientSecret : "f6163559d9f11a5d8b3356ebf19746b8",
    // callbackURL :"http://localhost:3100/auth/facebook/callback"
    callbackURL : "https://nair-vivek-webdev.herokuapp.com/auth/facebook/callback"
  };

  api.get("/api/user/hello", helloUser);
  api.get("/api/user/:userId", findUserById);
  api.get("/api/user",findUsers);
  api.post("/api/user", createUser);
  api.delete("/api/user/:userId", deleteUser);
  // api.put("/api/user/:userId", updateUser);
  api.put("/api/user/:userId", updateUser);
  api.post('/api/login', passport.authenticate('local'), login);
  api.post('/api/logout', logout);
  api.post ('/api/register', register);
  api.post('/api/loggedin', loggedin);
  api.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));


  api.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      // successRedirect: 'http://localhost:4200/user',
      // failureRedirect: 'http://localhost:4200/login'
      successRedirect: 'https://nair-vivek-webdev.herokuapp.com/user',
      failureRedirect: 'https://nair-vivek-webdev.herokuapp.com/login'
    }));


  passport.serializeUser(serializeUser);
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(
        function(user) {
          if(user.username === username && bcrypt.compareSync(password,user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              lastName:  names[1],
              firstName: names[0],
              username: profile.username,
              email:     profile.emails ? profile.emails[0].value:"",
              facebook: {
                id:    profile.id,
                token: token
              }
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }


  function serializeUser(user, done){
    done(null, user);
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register (req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .createUser(user)
      .then(
        function(user){
          if(user){
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }


  function createUser(req, res){
    const newUser = req.body;
    userModel.createUser(newUser)
      .then(function(user){
        res.json(user);
      });
  }
  function helloUser(req, res){
    res.send("Hello from user service");
  }
  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user){
        if(user) {
          res.json(user);
        } else {
          res.status(400).send({message: "User not found"});
        }
        res.json(user);
      });
    } else if (username) {
      userModel.findUserByUsername(username)
        .then(function(user){
          res.json(user);
        });
    } else {
      userModel.findAllUsers()
        .then(function (users) {
          res.json(users);

        }, function(err){
          console.log(err);
        });
    }
  }

  function findUserById(req, res) {
    const userId = req.params["userId"];
    console.log(userId);
    userModel
      .findUserById(userId)
      .then(function(user){
        res.json(user);
      },function (err) {
        console.log(err);
      });

  }

  function updateUser(req, res) {
    const userId = req.params["userId"];
    var user = req.body;

    // const userId = user["userId"];
    userModel
      .updateUser(userId, user)
      .then(function(user){
        return userModel.findUserById(userId);
      })
      .then(function(user) {
        res.json(user);
        return;
      },function(err){
        console.log(err);
        return;
      });

  }

  function deleteUser(req, res) {
    const userId = req.params["userId"];
    userModel.deleteUser(user)
      .then(function (user) {
        res.json(user);
      });
  }

}
