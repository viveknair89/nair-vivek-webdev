var mongoose = require('mongoose');
var UserSchema =require("./user.schema.server");
var db = require('../models.server');
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials =findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId = findUserByFacebookId;
UserModel.facebookStrategy = facebookStrategy;

module.exports = UserModel;

function updateUser(userId, user){
  console.log(userId)
  return UserModel.update({_id: userId}, user);
}

function facebookStrategy(token, refreshToken, profile, done) {
  UserModel.findUserByFacebookId(profile.id)
}


function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}


function  createUser(user) {
  console.log('creating user');
  return UserModel.create(user);
}

function findUserById(userId){
  return UserModel.findOne({_id: userId});
}

function findUserByUsername(username){
  return UserModel.findOne({username: username});
}

function  findUserByCredentials(username, password) {
  return  UserModel.findOne({username: username, password: password});
}

function findAllUsers() {
  UserModel.find(function (err, docs) {
    console.log(docs);

  });
}

function deleteUser(userId){
  return UserModel.remove({_id: userId});
}

