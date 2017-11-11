module.exports = function(api) {
  api.post("/api/user/:userId/website", createWebsite);
  api.get("/api/user/:userId/website", findAllWebsitesForUser);
  api.get("/api/website/:websiteId", findWebsiteById);
  api.put("/api/website/:websiteId", updateWebsite);
  api.delete("/api/website/:websiteId", deleteWebsite);

  var websiteModel = require('../models/website/website.model.server');

  function createWebsite(req, res){
    const userId = req.params['userId'];
    const website = req.body;
    websiteModel.createWebsite(website.developerId, website)
      .then(function(website){
        res.json(website);
      });
  }

  function findWebsiteById(req, res){
    const websiteId = req.params['websiteId'];
    websiteModel.findWebsiteById(websiteId)
      .then(function(website){
        res.json(website);
      });
  }

  function findAllWebsitesForUser(req, res){
    const userId = req.params['userId'];
    websiteModel.findAllWebsitesForUser(userId)
      .then(function(websites){
        res.json(websites);
      });
  }


  // function getWebsitesForUserId(userId) {
  //   const ws = [];
  //   for (var i=0; i<websites.length; i++){
  //     if (websites[i].developerId === userId){
  //       ws.push(websites[i]);
  //     }
  //   }
  //   return ws;
  // }

  // function getWebsiteById(websiteId) {
  //   for (var i=0; i< websites.length; i++){
  //     if(websites[i]._id === websiteId){
  //       return websites[i];
  //     }
  //   }
  // }

  function deleteWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    websiteModel.deleteWebsite(websiteId)
      .then(function (status) {
        return websiteModel.findAllWebsitesForUser(websiteId.developerId);
      })
      .then(function (websites) {
        res.json(websites);
        return;
      },(function (err) {
        res.sendStatus(404).send(err)
        return;
      }));
  }
  function updateWebsite(req, res){
    const websiteId = req.params['websiteId'];
    const userId = req.params['userId'];
    const newWebsite = req.body;
    websiteModel.updateWebsite(websiteId,newWebsite)
      .then(function(status){
        return websiteModel.findAllWebsitesForUser(userId);
      })
      .then(function (websites) {
        res.json(websites);
        return;
      },(function (err) {
        res.sendStatus(404).send(err)
        return;
      }));
  }

}
