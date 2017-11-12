module.exports = function(api) {
  api.get("/api/user/hello", helloUser);
  api.get("/api/user/:userId", findUserById);
  api.get("/api/user",findUsers);
  api.post("/api/user", createUser);
  api.delete("/api/user/:userId", deleteUser);
  api.put("/api/user/:userId", updateUser);

  var userModel = require("../models/user/user.model.server");

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
