var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');
var PageModel = mongoose.model('PageModel', pageSchema);
var db = require('../models.server');

PageModel.findPageById = findPageById;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.createPage = createPage;
PageModel.deletePage = deletePage;
PageModel.updatePage = updatePage;

module.exports = PageModel;

function createPage(websiteId, page){
  page.websiteId = websiteId;
  return PageModel.create(page);
}

function findAllPagesForWebsite(websiteId){
  return PageModel.find({websiteId: websiteId});
}

function findPageById(pageId){
  return PageModel.findOne({_id: pageId});
}

function updatePage(pageId, page){
  return PageModel.update({_id: pageId}, page);
}

function deletePage(pageId){
  return PageModel.remove({_id: pageId});
}
