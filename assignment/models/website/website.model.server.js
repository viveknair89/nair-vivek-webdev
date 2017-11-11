var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model('websiteModel', websiteSchema);
var db = require('../models.server');

websiteModel.createWebsite = createWebsite;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.deleteWebsite = deleteWebsite;
websiteModel.updateWebsite = updateWebsite;
websiteModel.findWebsiteById = findWebsiteById;

module.exports = websiteModel;

function createWebsite(userId, website){
  website.developerId = userId;
  return websiteModel.create(website);
}

function findAllWebsitesForUser(userId){
  return websiteModel.find({developerId: userId});
}

function findWebsiteById(webid){
  return websiteModel.findOne({_id: webid});
}

function updateWebsite(webid, website){
  return websiteModel.update({_id: webid}, website);
}

function deleteWebsite(webid){
  return websiteModel.remove({_id: webid});
}
