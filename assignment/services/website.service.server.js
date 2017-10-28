module.exports = function(api) {
  api.post("/api/user/:userId/website", createWebsite);
  api.get("/api/user/:userId/website", findAllWebsitesForUser);
  api.get("/api/website/:websiteId", findWebsiteById);
  api.put("/api/website/:websiteId", updateWebsite);
  api.delete("/api/website/:websiteId", deleteWebsite);

  websites = [
    { _id: '123', name: 'Facebook',    developerId: '456', description: 'Lorem' },
    { _id: '234', name: 'Tweeter',     developerId: '456', description: 'Lorem' },
    { _id: '456', name: 'Gizmodo',     developerId: '456', description: 'Lorem' },
    { _id: '890', name: 'Go',          developerId: '123', description: 'Lorem' },
    { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
    { _id: '678', name: 'Checkers',    developerId: '123', description: 'Lorem' },
    { _id: '789', name: 'Chess',       developerId: '234', description: 'Lorem' }
  ];

  function createWebsite(req, res){
    // const userId = req.params['userId'];
    const website = req.body;
    // website.developerId = userId;
    websites.push(website);
    res.json(website);
  }
  function findWebsiteById(req, res){
    const userId = req.params['userId'];
    const websiteId = req.params['websiteId'];
    res.json(getWebsiteById(websiteId));
  }

  function findAllWebsitesForUser(req, res){
    const userId = req.params['userId'];
    const websites =  getWebsitesForUserId(userId);
    res.json(websites);
  }


  function getWebsitesForUserId(userId) {
    const ws = [];
    for (var i=0; i<websites.length; i++){
      if (websites[i].developerId === userId){
          ws.push(websites[i]);
      }
    }
    return ws;
  }

  function getWebsiteById(websiteId) {
    for (var i=0; i< websites.length; i++){
      if(websites[i]._id === websiteId){
        return websites[i];
      }
    }
  }

  function deleteWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    const userId = req.params['userId'];
    for (var i=0; i<websites.length; i++){
      if (websites[i]._id === websiteId) {
        websites.splice( i, 1);
      }
    }
    res.json(websites);
  }
  function updateWebsite(req, res){
    const websiteId = req.params['websiteId'];
    const userId = req.params['userId'];
    const newWebsite = req.body;
    for (var i =0; i<websites.length; i++){
      if(websites[i]._id === websiteId) {
        websites[i] = newWebsite;
        var ws = getWebsitesForUserId(userId);
        res.json(ws);
        return;
      }
    }
  }

}

