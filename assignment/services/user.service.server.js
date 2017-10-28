module.exports = function(api) {
  api.get("/api/user/hello", helloUser);
  api.get("/api/user/:userId", findUserById);
  api.get("/api/user",findUsers);
  api.post("/api/user", createUser);
  api.delete("/api/user/:userId", deleteUser);
  api.put("/api/user/:userId", updateUser);

  var users = [
    {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder',
      email: 'alice@wonderland.com' },
    {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley',
      email: 'bob@marley.com' },
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia',
      email: 'charly@garcia.com' },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi',
      email: 'jannunzi@annunzi.com' }
  ];

  function createUser(req, res){
    const newuser = req.body;
    users.push(newuser);
    res.json(newuser);
  }
  function helloUser(req, res){
      res.send("Hello from user service");
  }
  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      var user = users.find( function (user) {
        return user.username === username && user.password === password;
      });
      if(user) {
        res.json(user);
      } else {
        res.json(null);
      }
      return;
    } else if (username) {
      var user = users.find( function (user) {
        return user.username === username;
      });
      if(user) {
        res.json(user);
      } else {
        res.json(null);
      }
      return;
    }
    res.json(users);
  }
  function findUserById(req, res) {
    const userId = req.params["userId"];
    var user = users.find( function (user) {
      return user._id === userId;
    });
    res.json(user);
  }

  function updateUser(req, res) {
    const userId = req.params["userId"];
    var updatedUser = req.body;
    for (var i=0; i< users.length; i++){
      if (users[i]._id === userId) {
        users[i] = updatedUser;
      }
    }
    res.json(users);
  }

  function deleteUser(req, res) {
    const userId = req.params["userId"];
    for (var i=0; i<users.length; i++){
      if (users[i]._id === userId) {
        users.splice( i, 1);
      }
    }
    res.json(users);
  }
};
